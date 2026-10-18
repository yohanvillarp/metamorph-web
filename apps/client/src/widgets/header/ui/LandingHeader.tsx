import { ROUTES, PROJECT_LINKS } from '@/shared/config';
import { preloadDocsRoutes } from '@/shared/lib/routePreloader';
import { motion } from 'framer-motion';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MetamorphLogo } from '@/shared/ui/MetamorphLogo';

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
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center drop-shadow-[0_0_10px_rgba(0,242,254,0.35)]">
              <MetamorphLogo />
            </div>
          </motion.div>
          <div className="flex items-center tracking-tight select-none">
            <span className="font-extrabold text-base sm:text-lg text-white group-hover:text-slate-100 transition-colors">
              Meta
            </span>
            <span className="font-black text-base sm:text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] via-cyan-300 to-[#0284c7] group-hover:drop-shadow-[0_0_12px_rgba(0,242,254,0.6)] transition-all">
              mørph
            </span>
          </div>
        </Link>
      </div>

      {/* Center Landing Navigation (Canonical React Router NavLinks) */}
      <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
        <NavLink
          to={ROUTES.DOCS.ROOT}
          className={({ isActive }) =>
            `px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              isActive
                ? 'text-cyan-300 bg-cyan-500/10'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
            }`
          }
        >
          Docs
        </NavLink>
        <NavLink
          to={ROUTES.DOCS.SWARM}
          className={({ isActive }) =>
            `px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              isActive
                ? 'text-cyan-300 bg-cyan-500/10'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
            }`
          }
        >
          The Swarm
        </NavLink>
        <NavLink
          to={ROUTES.DOCS.MIGRATIONS.FRONTEND}
          className={({ isActive }) =>
            `px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              isActive
                ? 'text-cyan-300 bg-cyan-500/10'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
            }`
          }
        >
          Migrations
        </NavLink>
        <NavLink
          to={ROUTES.DOCS.CLI_REFERENCE}
          className={({ isActive }) =>
            `px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              isActive
                ? 'text-cyan-300 bg-cyan-500/10'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
            }`
          }
        >
          CLI Reference
        </NavLink>
        <NavLink
          to={ROUTES.COMMUNITY}
          className={({ isActive }) =>
            `px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              isActive
                ? 'text-cyan-300 bg-cyan-500/10'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
            }`
          }
        >
          Community
        </NavLink>
      </nav>

      {/* Right Marketing Links & Quickstart CTA */}
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
          <img src="/github.svg" alt="GitHub" className="w-4 h-4 opacity-75 group-hover:opacity-100 transition-opacity" />
        </a>

        <div className="h-4 w-px bg-white/10 hidden sm:block mx-0.5" />

        <Link 
          to={ROUTES.DOCS.GETTING_STARTED}
          onMouseEnter={preloadDocsRoutes}
          onTouchStart={preloadDocsRoutes}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-white text-slate-950 hover:bg-slate-200 transition-all shadow-sm"
        >
          <span>Quickstart</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </header>
  );
}
