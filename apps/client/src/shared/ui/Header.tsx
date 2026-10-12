import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { ROUTES } from '@/shared/config/routes';
import { SearchModal } from './SearchModal';

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Global Ctrl+K / Cmd+K listener & custom event trigger
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    const handleCustomOpen = () => setIsSearchOpen(true);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('metamorph:open-search', handleCustomOpen);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('metamorph:open-search', handleCustomOpen);
    };
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === ROUTES.HOME) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(ROUTES.HOME);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 w-full z-40 backdrop-blur-xl bg-[#06090e]/85 border-b border-cyan-500/15 py-3 px-4 sm:px-6 md:px-10 flex justify-between items-center h-20 transition-all">
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Interactive Logo & Title */}
          <Link 
            to="/" 
            onClick={handleLogoClick}
            className="group flex items-center gap-3 text-white transition-all cursor-pointer"
            title="Metamorph - Return to Top"
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

          <span className="hidden xl:inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            npm: @nikelyh/metamorph v2.2.0
          </span>
        </div>

        {/* Center: Search Button (Desktop & Tablet) */}
        <div className="flex-1 max-w-xs mx-4 hidden md:block">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 hover:bg-[#0a1222] text-slate-400 hover:text-slate-200 text-xs font-mono transition-all group shadow-inner"
          >
            <div className="flex items-center gap-2">
              <Search size={14} className="text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Search docs...</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-800/80 border border-slate-700 text-slate-300 rounded">
                Ctrl
              </kbd>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-800/80 border border-slate-700 text-slate-300 rounded">
                K
              </kbd>
            </div>
          </button>
        </div>

        {/* Right Nav Links & Actions */}
        <div className="flex items-center gap-3 sm:gap-6 text-sm font-medium text-slate-300">
          {/* Mobile Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-white transition-all"
            aria-label="Search"
          >
            <Search size={18} className="text-cyan-400" />
          </button>

          <Link 
            to={ROUTES.DOCS.ROOT} 
            className="hover:text-cyan-300 transition-colors py-1.5 px-3 rounded-lg hover:bg-white/5"
          >
            Docs
          </Link>
          <Link 
            to={ROUTES.DOCS.GETTING_STARTED} 
            className="hidden sm:block hover:text-cyan-300 transition-colors py-1.5 px-3 rounded-lg hover:bg-white/5"
          >
            Getting Started
          </Link>
          <Link 
            to={ROUTES.DOCS.MIGRATIONS.FRONTEND} 
            className="hidden lg:block hover:text-cyan-300 transition-colors py-1.5 px-3 rounded-lg hover:bg-white/5"
          >
            Matrix
          </Link>
          
          <div className="h-4 w-[1px] bg-slate-800 hidden sm:block" />

          <a 
            href="https://www.npmjs.com/package/@nikelyh/metamorph" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            npm
          </a>

          <a 
            href="https://github.com/yohanvillarp/metamorph" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all hover:shadow-[0_0_15px_rgba(0,242,254,0.2)]" 
            aria-label="GitHub Repository"
          >
            <img src="/github.svg" alt="GitHub" className="w-5 h-5 invert opacity-80 hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </header>

      {/* Global Command Palette Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
