import { ROUTES } from '@/shared/config/routes';
import { Menu, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface DocsHeaderProps {
  onOpenSearch: () => void;
}

export function DocsHeader({ onOpenSearch }: DocsHeaderProps) {
  const location = useLocation();

  const isTabActive = (path: string) => {
    if (path === ROUTES.DOCS.ROOT) {
      return location.pathname === ROUTES.DOCS.ROOT;
    }
    return location.pathname.startsWith(path);
  };

  const getTabClasses = (path: string) => `
    px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
      isTabActive(path)
        ? 'bg-cyan-950/80 text-cyan-300 font-semibold border border-cyan-500/40 shadow-[0_0_12px_rgba(0,242,254,0.15)]'
        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
    }
  `;

  return (
    <header className="fixed top-0 w-full z-40 backdrop-blur-xl bg-[#06090e]/95 border-b border-cyan-500/15 py-3 px-4 sm:px-6 md:px-8 flex justify-between items-center h-20 transition-all">
      {/* Left: Mobile Drawer Trigger + Brand Logo & Badge */}
      <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('metamorph:open-docs-sidebar'))}
          className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all cursor-pointer"
          aria-label="Open documentation sidebar"
        >
          <Menu size={18} className="text-cyan-400" />
        </button>

        <Link 
          to="/" 
          className="group flex items-center gap-2.5 text-white cursor-pointer"
          title="Metamorph Home"
        >
          <img 
            src="/logo_metamorph.png" 
            alt="Metamorph" 
            className="w-8 h-8 object-contain drop-shadow-[0_0_10px_rgba(0,242,254,0.4)] group-hover:scale-105 transition-transform" 
          />
          <span className="font-extrabold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-200 hidden sm:inline">
            Metamorph
          </span>
        </Link>

        <span className="px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono text-[10px] uppercase font-bold tracking-wider">
          DOCS
        </span>
      </div>

      {/* Center: Prominent Command Palette Search */}
      <div className="flex-1 max-w-sm sm:max-w-md lg:max-w-lg mx-3 sm:mx-6">
        <button
          onClick={onOpenSearch}
          className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/60 hover:bg-[#0a1222] text-slate-400 hover:text-slate-200 text-xs font-mono transition-all group shadow-inner focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
          title="Search docs (Ctrl+K)"
        >
          <div className="flex items-center gap-2 min-w-0">
            <Search size={14} className="text-cyan-400 group-hover:scale-110 transition-transform flex-shrink-0" />
            <span className="truncate">Search docs, commands, agents...</span>
          </div>
          <div className="flex items-center gap-1 flex-shrink-0">
            <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-800 border border-slate-700 text-slate-300 rounded font-mono">
              Ctrl
            </kbd>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-800 border border-slate-700 text-slate-300 rounded font-mono">
              K
            </kbd>
          </div>
        </button>
      </div>

      {/* Right: Quick Tabs, Version & External Links */}
      <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
        {/* Navigation Section Pills */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link to={ROUTES.DOCS.ROOT} className={getTabClasses(ROUTES.DOCS.ROOT)}>
            Overview
          </Link>
          <Link to={ROUTES.DOCS.GETTING_STARTED} className={getTabClasses(ROUTES.DOCS.GETTING_STARTED)}>
            Guides
          </Link>
          <Link to={ROUTES.DOCS.CONCEPTS} className={getTabClasses(ROUTES.DOCS.CONCEPTS)}>
            Architecture
          </Link>
          <Link to={ROUTES.DOCS.SWARM} className={getTabClasses(ROUTES.DOCS.SWARM)}>
            Swarm
          </Link>
          <Link to={ROUTES.DOCS.CLI_REFERENCE} className={getTabClasses(ROUTES.DOCS.CLI_REFERENCE)}>
            CLI
          </Link>
        </nav>

        <div className="h-4 w-[1px] bg-slate-800 hidden lg:block" />

        <span className="hidden xl:inline-block text-[10px] font-mono text-slate-500 bg-slate-900/60 px-2 py-0.5 rounded border border-slate-800">
          v2.2.0
        </span>

        <Link
          to="/"
          className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors hidden sm:inline px-2 py-1"
        >
          Home
        </Link>

        <a 
          href="https://www.npmjs.com/package/@nikelyh/metamorph" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-red-500/50 hover:bg-slate-800/80 transition-all hover:shadow-[0_0_15px_rgba(213,0,0,0.2)]" 
          title="npm: @nikelyh/metamorph"
          aria-label="npm package"
        >
          <img src="/icons8-ngp.svg" alt="npm" className="w-4 h-4 object-contain" />
        </a>

        <a 
          href="https://github.com/yohanvillarp/metamorph" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all hover:shadow-[0_0_15px_rgba(0,242,254,0.2)]" 
          aria-label="GitHub Repository"
        >
          <img src="/github.svg" alt="GitHub" className="w-4 h-4 invert opacity-80 hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </header>
  );
}
