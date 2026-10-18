import { motion } from 'framer-motion';
import { MetamorphLogo } from './MetamorphLogo';

export interface CyberLoaderProps {
  message?: string;
  fullScreen?: boolean;
  compact?: boolean;
}

export function CyberLoader({
  message = 'INITIALIZING METAMORPH DOCS...',
  fullScreen = false,
  compact = false,
}: CyberLoaderProps) {
  const containerClasses = fullScreen
    ? 'fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#06090e]/95 backdrop-blur-2xl'
    : compact
    ? 'py-16 flex flex-col items-center justify-center'
    : 'min-h-[60vh] flex flex-col items-center justify-center';

  return (
    <div className={containerClasses} aria-label="Loading" role="status">
      {/* Ambient background glow */}
      <div className="absolute w-72 h-72 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none animate-pulse" />

      {/* Cybernetic Particle Nexus */}
      <div className="relative w-24 h-24 flex items-center justify-center mb-6">
        {/* Outer Hex/Orbital Track */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
          className="absolute inset-0 rounded-full border border-cyan-500/20 border-t-cyan-400 border-r-cyan-400/50 shadow-[0_0_15px_rgba(0,242,254,0.2)]"
        />

        {/* Middle Dashed Tech Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 5, ease: 'linear', repeat: Infinity }}
          className="absolute inset-2 rounded-full border border-dashed border-cyan-400/40"
        />

        {/* Inner Pulsing Core */}
        <motion.div
          animate={{ scale: [0.9, 1.08, 0.9], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
          className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-950 via-[#0a1b2d] to-cyan-500/20 border border-cyan-400/60 flex items-center justify-center shadow-[0_0_20px_rgba(0,242,254,0.35)]"
        >
          <div className="w-6 h-6 flex items-center justify-center drop-shadow-[0_0_8px_rgba(0,242,254,0.6)]">
            <MetamorphLogo />
          </div>
        </motion.div>

        {/* Orbiting Quantum Sparks */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, ease: 'linear', repeat: Infinity }}
          className="absolute inset-0"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#00f2fe] absolute -top-0.5 left-1/2 -translate-x-1/2" />
        </motion.div>
      </div>

      {/* Monospace Telemetry Status */}
      <div className="flex flex-col items-center gap-2 relative z-10">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider shadow-sm">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-semibold uppercase tracking-widest">{message}</span>
        </div>
        <p className="text-[11px] font-mono text-slate-500 tracking-wide">
          Syncing swarm AST engine &amp; docs registry
        </p>
      </div>
    </div>
  );
}
