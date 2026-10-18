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

    // Color palette: soft matte cyan, sky cyan, slate dust, muted mist
    const colors = [
      'rgba(0, 242, 254, ',   // Neon Cyan
      'rgba(56, 189, 248, ',  // Sky cyan
      'rgba(203, 213, 225, ', // Slate dust
      'rgba(148, 163, 184, ', // Muted mist
    ];

    // Subtle atmospheric particle count (balanced & non-intrusive)
    const particleCount = 38;
    const particles: Particle[] = [];

    const createParticle = (spawnAnywhere = false): Particle => {
      const x = spawnAnywhere ? Math.random() * (width || 1200) : -25 - Math.random() * 60;
      const y = Math.random() * (height || 800);
      return {
        x,
        y,
        baseY: y,
        size: 0.7 + Math.random() * 1.1, // Delicate micro motes (0.7px - 1.8px)
        speedX: 0.5 + Math.random() * 0.8, // Gentle horizontal draft
        amplitude: 4 + Math.random() * 10, // Subtle wave
        frequency: 0.001 + Math.random() * 0.002,
        phase: Math.random() * Math.PI * 2,
        opacity: 0,
        maxOpacity: 0.10 + Math.random() * 0.14, // Industry standard ambient opacity (0.10 - 0.24)
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
      targetVelocity *= 0.92; // Inertial dampening

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Reactive horizontal drift boosted gently by scroll velocity
        const speedBoost = 1 + currentVelocity * 1.8;
        const effectiveSpeed = p.speedX * speedBoost;
        p.x += effectiveSpeed;

        // Harmonic flutter wave with scroll turbulence
        const waveAmp = p.amplitude * (1 + currentVelocity * 0.3);
        p.y = p.baseY + Math.sin(time * p.frequency + p.phase) * waveAmp;

        // Smooth fade at viewport edges
        if (p.x < 100) {
          p.opacity = Math.min(p.maxOpacity, p.opacity + 0.008);
        } else if (p.x > width - 100) {
          p.opacity = Math.max(0, p.opacity - 0.008);
        } else {
          p.opacity = Math.min(p.maxOpacity, p.opacity + 0.004);
        }

        // Ambient luminous boost during scroll surge capped at a subtle ceiling
        let effectiveOpacity = p.opacity;
        if (currentVelocity > 0.2) {
          effectiveOpacity = Math.min(0.38, effectiveOpacity * (1 + currentVelocity * 0.25));
        }

        if (effectiveOpacity > 0.01) {
          // Soft, feathered aerodynamic velocity tail when scrolling
          if (currentVelocity > 0.15) {
            const streakLen = Math.min(effectiveSpeed * 4, 18);
            ctx.beginPath();
            ctx.moveTo(p.x - streakLen, p.y);
            ctx.lineTo(p.x, p.y);
            ctx.lineWidth = p.size * 0.75;
            ctx.lineCap = 'round';
            ctx.strokeStyle = `${p.color}${effectiveOpacity * 0.38})`;
            ctx.stroke();
          }

          // Main particle mote
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
