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

    // Color palette: soft matte cyan and ethereal ice-white
    const colors = [
      'rgba(0, 242, 254, ',   // Cyan
      'rgba(56, 189, 248, ',  // Sky cyan
      'rgba(224, 242, 254, ', // Ice white
      'rgba(148, 163, 184, ', // Slate dust
    ];

    // Initialize organic wind particles
    const particleCount = 42;
    const particles: Particle[] = [];

    const createParticle = (spawnAnywhere = false): Particle => {
      const x = spawnAnywhere ? Math.random() * (width || 1200) : -20 - Math.random() * 80;
      const y = Math.random() * (height || 600);
      return {
        x,
        y,
        baseY: y,
        size: 0.8 + Math.random() * 1.6, // Fine micro motes (0.8px - 2.4px)
        speedX: 0.5 + Math.random() * 0.9, // Gentle horizontal draft
        amplitude: 6 + Math.random() * 14, // Subtle sinusoidal wave (wind flutter)
        frequency: 0.0015 + Math.random() * 0.0025,
        phase: Math.random() * Math.PI * 2,
        opacity: 0,
        maxOpacity: 0.15 + Math.random() * 0.25, // Soft, non-intrusive matte opacity
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

      // Center exclusion zone: gently fade out particles near the hero headline
      // to guarantee zero distraction and perfect text legibility
      const centerX = width / 2;
      const centerY = height * 0.36; // Headline vertical anchor
      const exclusionRadiusX = Math.min(width * 0.38, 420);
      const exclusionRadiusY = 160;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Organic horizontal drift
        p.x += p.speedX;
        // Natural harmonic wave (simulating butterfly wing flutter drafts)
        p.y = p.baseY + Math.sin(time * p.frequency + p.phase) * p.amplitude;

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
          // Smooth fade out: 0 opacity at center, ramping up towards edge
          effectiveOpacity *= Math.pow(distSq, 1.5) * 0.2;
        }

        if (effectiveOpacity > 0.01) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${effectiveOpacity})`;
          ctx.fill();
        }

        // Reset particle when it moves out of view
        if (p.x > width + 30) {
          particles[i] = createParticle(false);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
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
