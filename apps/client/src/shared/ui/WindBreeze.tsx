import { useEffect, useRef } from 'react';

interface WindBreezeProps {
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  baseY: number;
  size: number;
  speedX: number;
  amplitude: number;
  frequency: number;
  phase: number;
  opacity: number;
  maxOpacity: number;
  color: string;
}

export function WindBreeze({ className = '' }: WindBreezeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Scroll Velocity Tracking (Reactive Wind Surge)
    let lastScrollY = window.scrollY;
    let targetVelocity = 0;
    let currentVelocity = 0;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = Math.abs(currentY - lastScrollY);
      // Amplify scroll delta into dynamic wind velocity boost
      targetVelocity = Math.min(delta * 0.15, 4.5);
      lastScrollY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Color palette: soft matte cyan and ethereal ice-white
    const colors = [
      'rgba(0, 242, 254, ',   // Cyan
      'rgba(56, 189, 248, ',  // Sky cyan
      'rgba(224, 242, 254, ', // Ice white
      'rgba(148, 163, 184, ', // Slate dust
    ];

    // Initialize organic wind particles
    const particleCount = 48;
    const particles: Particle[] = [];

    const createParticle = (spawnAnywhere = false): Particle => {
      const x = spawnAnywhere ? Math.random() * (width || 1200) : -20 - Math.random() * 80;
      const y = Math.random() * (height || 600);
      return {
        x,
        y,
        baseY: y,
        size: 0.8 + Math.random() * 1.8, // Fine micro motes (0.8px - 2.6px)
        speedX: 0.6 + Math.random() * 0.9, // Gentle horizontal draft
        amplitude: 6 + Math.random() * 14, // Subtle sinusoidal wave (wind flutter)
        frequency: 0.0015 + Math.random() * 0.0025,
        phase: Math.random() * Math.PI * 2,
        opacity: 0,
        maxOpacity: 0.15 + Math.random() * 0.28, // Soft, non-intrusive matte opacity
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(true));
    }

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Smooth decay of scroll velocity into natural breeze
      currentVelocity += (targetVelocity - currentVelocity) * 0.08;
      targetVelocity *= 0.93; // Inertial dampening

      // Center exclusion zone: gently fade out particles near the hero headline
      const centerX = width / 2;
      const centerY = height * 0.36;
      const exclusionRadiusX = Math.min(width * 0.38, 420);
      const exclusionRadiusY = 160;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Reactive horizontal drift boosted by scroll velocity
        const effectiveSpeed = p.speedX * (1 + currentVelocity * 2.2);
        p.x += effectiveSpeed;

        // Harmonic flutter wave with scroll turbulence expansion
        const waveAmp = p.amplitude * (1 + currentVelocity * 0.6);
        p.y = p.baseY + Math.sin(time * p.frequency + p.phase) * waveAmp;

        // Fade in when entering from the left, fade out near the right edge
        if (p.x < 100) {
          p.opacity = Math.min(p.maxOpacity, p.opacity + 0.008);
        } else if (p.x > width - 120) {
          p.opacity = Math.max(0, p.opacity - 0.008);
        } else {
          p.opacity = Math.min(p.maxOpacity, p.opacity + 0.004);
        }

        // Calculate distance from hero text center (ellipse)
        const dx = (p.x - centerX) / exclusionRadiusX;
        const dy = (p.y - centerY) / exclusionRadiusY;
        const distSq = dx * dx + dy * dy;

        // Apply smooth falloff if inside the text zone
        let effectiveOpacity = p.opacity;
        if (distSq < 1) {
          effectiveOpacity *= Math.pow(distSq, 1.5) * 0.2;
        }

        // Slight luminous boost during high wind surges
        if (currentVelocity > 0.5) {
          effectiveOpacity = Math.min(0.65, effectiveOpacity * (1 + currentVelocity * 0.3));
        }

        if (effectiveOpacity > 0.01) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${effectiveOpacity})`;
          ctx.fill();
        }

        // Reset particle when it leaves viewport boundary
        if (p.x > width + 40) {
          particles[i] = createParticle(false);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden z-0 ${className}`}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}
