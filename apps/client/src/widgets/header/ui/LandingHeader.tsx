import { ROUTES, PROJECT_LINKS } from '@/shared/config';
import { preloadDocsRoutes } from '@/shared/lib/routePreloader';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#06090e]/85 border-b border-white/[0.07] px-4 sm:px-8 h-16 flex justify-between items-center transition-all">
      {/* Brand & Logo */}
      <div className="flex items-center gap-3">
        <Link 
          to="/" 
          onClick={handleLogoClick}
          className="group flex items-center gap-2.5 text-white transition-all cursor-pointer"
          title="Metamorph Home"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute -inset-1 bg-cyan-400/25 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img 
              src="/logo_metamorph.png" 
              alt="Metamorph Logo" 
              className="relative w-7 h-7 sm:w-8 sm:h-8 object-contain drop-shadow-[0_0_10px_rgba(0,242,254,0.35)]" 
            />
          </motion.div>
          <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-cyan-200 transition-colors">
            Metamorph
          </span>
        </Link>
      </div>

      {/* Center Landing Navigation (Clean Integrated Links) */}
      <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
        <button
          onClick={() => scrollToSection('swarm')}
          className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] transition-all cursor-pointer"
        >
          The Swarm
        </button>
        <button
          onClick={() => scrollToSection('demo')}
          className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] transition-all cursor-pointer"
        >
          Code Demo
        </button>
        <button
          onClick={() => scrollToSection('matrix')}
          className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] transition-all cursor-pointer"
        >
          Ecosystem
        </button>
        <button
          onClick={() => scrollToSection('community')}
          className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] transition-all cursor-pointer"
        >
          Community
        </button>
      </nav>

      {/* Right Marketing Links & Docs CTA */}
      <div className="flex items-center gap-2 sm:gap-3">
        <a 
          href={PROJECT_LINKS.discord} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 rounded-lg text-slate-400 hover:text-[#5865F2] hover:bg-white/[0.04] transition-all flex items-center justify-center group" 
          title="Join Discord Community"
          aria-label="Discord Community"
        >
          <img src="/discord.svg" alt="Discord" className="w-4 h-4 object-contain opacity-75 group-hover:opacity-100 transition-opacity" />
        </a>

        <a 
          href={PROJECT_LINKS.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.04] transition-all flex items-center justify-center group" 
          aria-label="GitHub Repository"
          title="GitHub Repository"
        >
          <img src="/github.svg" alt="GitHub" className="w-4 h-4 invert opacity-75 group-hover:opacity-100 transition-opacity" />
        </a>

        <div className="h-4 w-px bg-white/10 hidden sm:block mx-0.5" />

        <Link 
          to={ROUTES.DOCS.ROOT}
          onMouseEnter={preloadDocsRoutes}
          onTouchStart={preloadDocsRoutes}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-white text-slate-950 hover:bg-slate-200 transition-all shadow-sm"
        >
          <span>Docs</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </header>
  );
}
