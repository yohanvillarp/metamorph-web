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

    // Wheel & Scroll Velocity Tracking (Reactive Wind Surge)
    let lastScrollY = window.scrollY;
    let targetVelocity = 0;
    let currentVelocity = 0;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = Math.abs(currentY - lastScrollY);
      // Amplify scroll delta into dynamic wind velocity boost
      targetVelocity = Math.min(targetVelocity + delta * 0.18, 5.5);
      lastScrollY = currentY;
    };

    const handleWheel = (e: WheelEvent) => {
      const delta = Math.min(Math.abs(e.deltaY) * 0.015, 4);
      targetVelocity = Math.min(targetVelocity + delta, 5.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });

    // Color palette: soft cyan, sky cyan, ice white, slate dust
    const colors = [
      'rgba(0, 242, 254, ',   // Neon Cyan
      'rgba(56, 189, 248, ',  // Sky cyan
      'rgba(224, 242, 254, ', // Ice white
      'rgba(148, 163, 184, ', // Slate dust
    ];

    // Initialize organic wind particles
    const particleCount = 60;
    const particles: Particle[] = [];

    const createParticle = (spawnAnywhere = false): Particle => {
      const x = spawnAnywhere ? Math.random() * (width || 1200) : -30 - Math.random() * 80;
      const y = Math.random() * (height || 800);
      return {
        x,
        y,
        baseY: y,
        size: 0.9 + Math.random() * 1.6, // Fine micro motes (0.9px - 2.5px)
        speedX: 0.7 + Math.random() * 1.1, // Gentle horizontal draft
        amplitude: 5 + Math.random() * 12, // Subtle sinusoidal wave (wind flutter)
        frequency: 0.0012 + Math.random() * 0.0022,
        phase: Math.random() * Math.PI * 2,
        opacity: 0,
        maxOpacity: 0.22 + Math.random() * 0.32, // Clearly visible yet elegant matte opacity
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
      currentVelocity += (targetVelocity - currentVelocity) * 0.09;
      targetVelocity *= 0.92; // Inertial dampening

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Reactive horizontal drift boosted by scroll velocity
        const speedBoost = 1 + currentVelocity * 2.5;
        const effectiveSpeed = p.speedX * speedBoost;
        p.x += effectiveSpeed;

        // Harmonic flutter wave with scroll turbulence
        const waveAmp = p.amplitude * (1 + currentVelocity * 0.4);
        p.y = p.baseY + Math.sin(time * p.frequency + p.phase) * waveAmp;

        // Fade in when entering from the left, fade out near the right edge
        if (p.x < 120) {
          p.opacity = Math.min(p.maxOpacity, p.opacity + 0.012);
        } else if (p.x > width - 120) {
          p.opacity = Math.max(0, p.opacity - 0.012);
        } else {
          p.opacity = Math.min(p.maxOpacity, p.opacity + 0.006);
        }

        // Luminous boost during high wind surges
        let effectiveOpacity = p.opacity;
        if (currentVelocity > 0.3) {
          effectiveOpacity = Math.min(0.75, effectiveOpacity * (1 + currentVelocity * 0.35));
        }

        if (effectiveOpacity > 0.01) {
          // Aerodynamic speed trail streak when scrolling/surging
          if (currentVelocity > 0.15) {
            const streakLen = Math.min(effectiveSpeed * 7, 36);
            ctx.beginPath();
            ctx.moveTo(p.x - streakLen, p.y);
            ctx.lineTo(p.x, p.y);
            ctx.lineWidth = p.size * 0.85;
            ctx.lineCap = 'round';
            ctx.strokeStyle = `${p.color}${effectiveOpacity * 0.65})`;
            ctx.stroke();
          }

          // Main particle mote
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${effectiveOpacity})`;
          ctx.fill();
        }

        // Reset particle when it leaves viewport boundary
        if (p.x > width + 50) {
          particles[i] = createParticle(false);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className={`fixed inset-0 pointer-events-none select-none overflow-hidden z-0 ${className}`}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}
