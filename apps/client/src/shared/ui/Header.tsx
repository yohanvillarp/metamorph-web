import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/config/routes';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#06090e]/80 border-b border-cyan-500/15 py-3 px-6 md:px-10 flex justify-between items-center h-20 transition-all">
      <div className="flex items-center gap-6">
        <Link to="/" className="group flex items-center gap-3.5 text-white transition-all">
          <div className="relative">
            <div className="absolute -inset-1 bg-cyan-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img 
              src="/logo_metamorph.png" 
              alt="Metamorph Logo" 
              className="relative w-10 h-10 object-contain drop-shadow-[0_0_12px_rgba(0,242,254,0.4)] group-hover:scale-105 transition-transform duration-300" 
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-cyan-300">
              Metamorph
            </span>
            <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-400/80 -mt-1 hidden sm:block">
              Multi-Agent CLI
            </span>
          </div>
        </Link>

        <span className="hidden lg:inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          npm: @nikelyh/metamorph v2.1.2
        </span>
      </div>

      <div className="flex items-center gap-6 text-sm font-medium text-slate-300">
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
          className="hidden md:block hover:text-cyan-300 transition-colors py-1.5 px-3 rounded-lg hover:bg-white/5"
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
  );
}
