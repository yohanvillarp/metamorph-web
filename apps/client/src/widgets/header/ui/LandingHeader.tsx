import { ROUTES, PROJECT_LINKS } from '@/shared/config';
import { preloadDocsRoutes } from '@/shared/lib/routePreloader';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function LandingHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === ROUTES.HOME) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(ROUTES.HOME);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== ROUTES.HOME) {
      navigate(`${ROUTES.HOME}#${sectionId}`);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#07080c]/90 border-b border-white/5 py-3 px-4 sm:px-6 md:px-10 flex justify-between items-center h-20 transition-all">
      {/* Brand & Logo */}
      <div className="flex items-center gap-4 sm:gap-6">
        <Link 
          to="/" 
          onClick={handleLogoClick}
          className="group flex items-center gap-3 text-white transition-all cursor-pointer"
          title="Metamorph Home"
        >
          <motion.div 
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-cyan-400/40 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img 
              src="/logo_metamorph.png" 
              alt="Metamorph Logo" 
              className="relative w-10 h-10 object-contain drop-shadow-[0_0_12px_rgba(0,242,254,0.4)]" 
            />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-cyan-300 group-hover:to-cyan-200 transition-colors">
              Metamorph
            </span>
            <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-400/80 -mt-1 hidden sm:block">
              Multi-Agent CLI
            </span>
          </div>
        </Link>

      </div>

      {/* Center Landing Navigation (Anchors) - Mathematically Centered Floating Dock */}
      <nav className="hidden md:flex items-center gap-1 md:absolute md:left-1/2 md:-translate-x-1/2 bg-[#0c0e17]/95 border border-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg">
        <button
          onClick={() => scrollToSection('swarm')}
          className="px-3 py-1 rounded-full text-xs font-mono text-slate-300 hover:text-cyan-300 hover:bg-white/5 transition-all cursor-pointer"
        >
          The Swarm
        </button>
        <button
          onClick={() => scrollToSection('demo')}
          className="px-3 py-1 rounded-full text-xs font-mono text-slate-300 hover:text-cyan-300 hover:bg-white/5 transition-all cursor-pointer"
        >
          Code Demo
        </button>
        <button
          onClick={() => scrollToSection('matrix')}
          className="px-3 py-1 rounded-full text-xs font-mono text-slate-300 hover:text-cyan-300 hover:bg-white/5 transition-all cursor-pointer"
        >
          Ecosystem
        </button>
        <button
          onClick={() => scrollToSection('community')}
          className="px-3 py-1 rounded-full text-xs font-mono text-slate-300 hover:text-cyan-300 hover:bg-white/5 transition-all cursor-pointer"
        >
          Community
        </button>
        <Link 
          to={ROUTES.DOCS.ROOT}
          onMouseEnter={preloadDocsRoutes}
          onTouchStart={preloadDocsRoutes}
          className="px-3 py-1 rounded-full text-xs font-mono text-slate-300 hover:text-cyan-300 hover:bg-white/5 transition-all"
        >
          Documentation
        </Link>
      </nav>

      {/* Right Marketing Links */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        <a 
          href={PROJECT_LINKS.discord} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#5865F2]/60 hover:bg-slate-800/80 transition-all hover:shadow-[0_0_15px_rgba(88,101,242,0.3)] flex items-center justify-center group" 
          title="Join Discord Community"
          aria-label="Discord Community"
        >
          <img src="/discord.svg" alt="Discord" className="w-4 h-4 object-contain transition-transform group-hover:scale-110" />
        </a>

        <a 
          href={PROJECT_LINKS.npm} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-red-500/50 hover:bg-slate-800/80 transition-all hover:shadow-[0_0_15px_rgba(213,0,0,0.2)]" 
          title="npm: @nikelyh/metamorph"
          aria-label="npm package"
        >
          <img src="/icons8-ngp.svg" alt="npm" className="w-4 h-4 object-contain" />
        </a>

        <a 
          href={PROJECT_LINKS.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all hover:shadow-[0_0_15px_rgba(0,242,254,0.2)]" 
          aria-label="GitHub Repository"
          title="GitHub Repository"
        >
          <img src="/github.svg" alt="GitHub" className="w-4 h-4 invert opacity-80 hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </header>
  );
}
