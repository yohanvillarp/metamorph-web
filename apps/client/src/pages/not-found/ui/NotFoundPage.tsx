import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  BookOpen, 
  Terminal, 
  Search, 
  ArrowRight, 
  Copy, 
  Check, 
  AlertTriangle,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { ROUTES } from '@/shared/config/routes';
import { SEOHead } from '@/shared/ui/SEOHead';
import { ButterflyLogoAnimation } from '@/widgets/ButterflyLogoAnimation';

export function NotFoundPage() {
  const location = useLocation();
  const [copied, setCopied] = useState(false);

  const handleCopyPath = () => {
    navigator.clipboard.writeText(location.pathname);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenSearch = () => {
    window.dispatchEvent(new CustomEvent('metamorph:open-search'));
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-4 py-24 sm:py-32 bg-[#06090e] text-slate-100 overflow-hidden">
      <SEOHead
        title="404 — Route Not Found | Metamorph"
        description="The requested route does not exist in the Metamorph autonomous migration system."
      />

      {/* Ambient Cyber Radiance & Volumetric Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/12 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[400px] bg-blue-600/8 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[350px] bg-teal-500/8 blur-[130px] rounded-full pointer-events-none" />

      {/* Subtle Polygonal Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,242,254,0.3) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative z-10 max-w-4xl w-full mx-auto text-center flex flex-col items-center">
        {/* Animated 404 Hero Composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center mb-8 select-none"
        >
          {/* Large Holographic '4' Left */}
          <span className="font-mono text-7xl sm:text-9xl md:text-[140px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-cyan-500/20 drop-shadow-[0_0_35px_rgba(0,242,254,0.25)]">
            4
          </span>

          {/* Centerpiece: Animated Butterfly Logo with Orbital Pulse */}
          <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-1 sm:mx-4 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-2xl animate-pulse" />
            <ButterflyLogoAnimation className="w-full h-full" />
          </div>

          {/* Large Holographic '4' Right */}
          <span className="font-mono text-7xl sm:text-9xl md:text-[140px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-cyan-500/20 drop-shadow-[0_0_35px_rgba(0,242,254,0.25)]">
            4
          </span>
        </motion.div>

        {/* Status Pill & Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
            <AlertTriangle size={13} className="text-cyan-400" />
            <span>Telemetry: Route Out of Bounds</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Destination Unresolved
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
            The route you requested does not map to any active catalog entry or documentation slice in the current{' '}
            <span className="text-cyan-300 font-mono font-semibold">Metamorph v2.3.0</span> swarm environment.
          </p>
        </motion.div>

        {/* Cyber Diagnostics Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="w-full max-w-xl mx-auto mb-10 text-left rounded-2xl bg-[#070b13]/95 border border-cyan-500/25 shadow-[0_0_35px_rgba(0,242,254,0.1)] overflow-hidden backdrop-blur-xl"
        >
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#0a1120] border-b border-cyan-500/15 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/80 inline-block" />
              <span className="ml-2 text-slate-400 text-[11px]">swarm-dispatcher://error.telemetry</span>
            </div>
            <button
              onClick={handleCopyPath}
              className="flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Copy route path"
            >
              {copied ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
              <span>{copied ? 'Copied' : 'Copy URI'}</span>
            </button>
          </div>

          {/* Terminal Diagnostics Body */}
          <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 space-y-2">
            <div className="text-red-400/90 font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
              <span>[ROUTER_CATALOG_MISSING]</span>
            </div>
            <div className="text-slate-400">
              <span className="text-slate-500">&gt; Target URI&nbsp;&nbsp;&nbsp;&nbsp;:</span>{' '}
              <span className="text-cyan-300 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-500/30">
                {location.pathname}
              </span>
            </div>
            <div className="text-slate-400">
              <span className="text-slate-500">&gt; Shadow Sandbox:</span>{' '}
              <span className="text-emerald-400">Isolated</span> (Zero user files touched)
            </div>
            <div className="text-slate-400">
              <span className="text-slate-500">&gt; Resolution&nbsp;&nbsp;&nbsp;&nbsp;:</span>{' '}
              <span>Use global search or select an indexed route below.</span>
              <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse align-middle" />
            </div>
          </div>
        </motion.div>

        {/* Prominent Quick-Search Bar Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="w-full max-w-xl mx-auto mb-10"
        >
          <button
            onClick={handleOpenSearch}
            className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#0a1222]/90 border border-cyan-500/30 hover:border-cyan-400 hover:bg-[#0e1a30] text-slate-300 hover:text-white transition-all group shadow-[0_0_25px_rgba(0,242,254,0.1)] hover:shadow-[0_0_35px_rgba(0,242,254,0.25)] cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 group-hover:scale-110 transition-transform">
                <Search size={18} />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-semibold text-white">Search Documentation & Tools</div>
                <div className="text-[11px] font-mono text-slate-400">Jump directly to commands, agents, flags, or matrices</div>
              </div>
            </div>
            <div className="flex items-center gap-1 font-mono text-xs">
              <kbd className="px-2 py-1 bg-slate-900 border border-slate-700 text-slate-300 rounded-lg">Ctrl</kbd>
              <kbd className="px-2 py-1 bg-slate-900 border border-slate-700 text-slate-300 rounded-lg">K</kbd>
            </div>
          </button>
        </motion.div>

        {/* 4 Interactive Cyber Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl"
        >
          {/* Card 1: Landing Page */}
          <Link
            to={ROUTES.HOME}
            className="group flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-[#080d17] border border-slate-800/80 hover:border-cyan-500/50 hover:bg-cyan-950/20 text-left transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(0,242,254,0.15)]"
          >
            <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
              <Home size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between text-sm font-bold text-white group-hover:text-cyan-200 transition-colors mb-1">
                <span>Landing Page</span>
                <ArrowRight size={14} className="text-slate-500 group-hover:translate-x-1 group-hover:text-cyan-400 transition-all" />
              </div>
              <p className="text-xs text-slate-400 line-clamp-2">
                Return to the product overview, interactive pipeline visualizer, and code transformation demo.
              </p>
            </div>
          </Link>

          {/* Card 2: Documentation Overview */}
          <Link
            to={ROUTES.DOCS.ROOT}
            className="group flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-[#080d17] border border-slate-800/80 hover:border-cyan-500/50 hover:bg-cyan-950/20 text-left transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(0,242,254,0.15)]"
          >
            <div className="p-3 rounded-xl bg-teal-950/60 border border-teal-500/30 text-teal-400 group-hover:scale-110 transition-transform">
              <BookOpen size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between text-sm font-bold text-white group-hover:text-teal-200 transition-colors mb-1">
                <span>Documentation Hub</span>
                <ArrowRight size={14} className="text-slate-500 group-hover:translate-x-1 group-hover:text-teal-400 transition-all" />
              </div>
              <p className="text-xs text-slate-400 line-clamp-2">
                Read architecture whitepapers, philosophy, and installation quickstarts for Metamorph.
              </p>
            </div>
          </Link>

          {/* Card 3: CLI Reference */}
          <Link
            to={ROUTES.DOCS.CLI_REFERENCE}
            className="group flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-[#080d17] border border-slate-800/80 hover:border-cyan-500/50 hover:bg-cyan-950/20 text-left transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(0,242,254,0.15)]"
          >
            <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400 group-hover:scale-110 transition-transform">
              <Terminal size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between text-sm font-bold text-white group-hover:text-purple-200 transition-colors mb-1">
                <span>CLI Reference</span>
                <ArrowRight size={14} className="text-slate-500 group-hover:translate-x-1 group-hover:text-purple-400 transition-all" />
              </div>
              <p className="text-xs text-slate-400 line-clamp-2">
                Explore commands like run, config, apply, rollback, detect, and adaptive agent tuning flags.
              </p>
            </div>
          </Link>

          {/* Card 4: Swarm Agents */}
          <Link
            to={ROUTES.DOCS.SWARM}
            className="group flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-[#080d17] border border-slate-800/80 hover:border-cyan-500/50 hover:bg-cyan-950/20 text-left transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(0,242,254,0.15)]"
          >
            <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-500/30 text-blue-400 group-hover:scale-110 transition-transform">
              <Sparkles size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between text-sm font-bold text-white group-hover:text-blue-200 transition-colors mb-1">
                <span>The 8 Swarm Agents</span>
                <ArrowRight size={14} className="text-slate-500 group-hover:translate-x-1 group-hover:text-blue-400 transition-all" />
              </div>
              <p className="text-xs text-slate-400 line-clamp-2">
                Deep dive into Mozaik v4 autonomous agents: Worker, Reviewer, Coordinator, Accounting, and more.
              </p>
            </div>
          </Link>
        </motion.div>

        {/* Bottom Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer py-1 px-3 rounded-lg hover:bg-white/5"
          >
            <RotateCcw size={13} />
            <span>Go back to previous page</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
