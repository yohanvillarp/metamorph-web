import { motion } from 'framer-motion';
import { useState } from 'react';

export function ButterflyLogoAnimation({ className = "w-72 h-72" }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative flex items-center justify-center cursor-pointer select-none group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Cyan Halo / Particle Aura */}
      <motion.div 
        animate={{
          scale: isHovered ? [1, 1.25, 1.15] : [1, 1.1, 1],
          opacity: isHovered ? [0.6, 0.9, 0.75] : [0.3, 0.5, 0.3],
        }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-[#00f2fe]/40 to-cyan-400/25 blur-3xl rounded-full pointer-events-none"
      />

      {/* Cyber Polygon Geometric Ambient Mesh */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute -inset-10 border border-cyan-500/10 rounded-full pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,242,254,0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Central Butterfly Logo with Poly Glow */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {/* SVG Faceted Grid Overlay */}
        <motion.div
          animate={{
            filter: isHovered 
              ? 'drop-shadow(0 0 25px rgba(0, 242, 254, 0.9)) drop-shadow(0 0 50px rgba(6, 182, 212, 0.6))'
              : 'drop-shadow(0 0 15px rgba(0, 242, 254, 0.5)) drop-shadow(0 0 30px rgba(6, 182, 212, 0.3))',
            y: isHovered ? -6 : [0, -8, 0],
          }}
          transition={{
            y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
            filter: { duration: 0.3 }
          }}
          className="w-full h-full flex items-center justify-center"
        >
          <img 
            src="/logo_metamorph.png" 
            alt="Metamorph Geometric Butterfly" 
            className="w-full h-full object-contain filter contrast-125 group-hover:scale-105 transition-transform duration-500" 
          />
        </motion.div>

        {/* Dynamic Light Scanlines over Logo */}
        <motion.div 
          animate={{
            top: ['-20%', '120%'],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent pointer-events-none blur-[1px]"
        />

        {/* Floating Geometric Sparkles / Code Particles */}
        {[
          { top: '15%', left: '10%', delay: 0 },
          { top: '20%', right: '12%', delay: 0.7 },
          { bottom: '25%', left: '18%', delay: 1.4 },
          { bottom: '20%', right: '15%', delay: 2.1 },
        ].map((pt, i) => (
          <motion.div
            key={i}
            style={{ ...pt, position: 'absolute' }}
            animate={{
              scale: [0, 1.2, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              delay: pt.delay,
              ease: "easeInOut"
            }}
            className="w-2 h-2 rotate-45 border border-cyan-300 bg-cyan-400/80 shadow-[0_0_8px_rgba(0,242,254,0.9)]"
          />
        ))}
      </div>
    </div>
  );
}
