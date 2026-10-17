import { Menu, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECT_LINKS } from '@/shared/config';
import { useActiveLogo } from '@/shared/lib/useActiveLogo';
import { MetamorphLogo } from '@/shared/ui/MetamorphLogo';

interface DocsHeaderProps {
  onOpenSearch: () => void;
}

export function DocsHeader({ onOpenSearch }: DocsHeaderProps) {
  const [, , activeModelId, activePalette] = useActiveLogo();
  return (
    <header className="fixed top-0 w-full z-40 backdrop-blur-xl bg-[#06090e]/95 border-b border-cyan-500/15 px-3 sm:px-6 md:px-8 flex justify-between items-center h-16 sm:h-20 transition-all">
      {/* Left: Mobile Drawer Trigger + Brand Logo & Badge */}
      <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('metamorph:open-docs-sidebar'))}
          className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all cursor-pointer"
          aria-label="Open documentation sidebar"
          title="Open Menu"
        >
          <Menu size={18} className="text-cyan-400" />
        </button>

        <Link 
          to="/" 
          className="group flex items-center gap-2 text-white cursor-pointer"
          title="Metamorph Home"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center drop-shadow-[0_0_10px_rgba(0,242,254,0.4)] group-hover:scale-105 transition-transform">
            <MetamorphLogo modelId={activeModelId} palette={activePalette} />
          </div>
          <div className="hidden md:flex items-center tracking-tight select-none">
            <span className="font-extrabold text-base sm:text-lg text-white group-hover:text-slate-100 transition-colors">
              Meta
            </span>
            <span className="font-black text-base sm:text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-300 group-hover:drop-shadow-[0_0_12px_rgba(0,242,254,0.6)] transition-all">
              mørph
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 ml-1 shadow-[0_0_8px_rgba(0,242,254,0.9)]" />
          </div>
        </Link>

        <span className="px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono text-[10px] uppercase font-bold tracking-wider">
          DOCS
        </span>
      </div>

      {/* Center: Search Trigger (Responsive & Adaptive) */}
      <div className="flex-1 max-w-[200px] sm:max-w-md lg:max-w-lg mx-2 sm:mx-6 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
        <button
          onClick={onOpenSearch}
          className="w-full flex items-center justify-between px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/60 hover:bg-[#0a1222] text-slate-400 hover:text-slate-200 text-xs font-mono transition-all group shadow-inner focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
          title="Search docs (Ctrl+K)"
        >
          <div className="flex items-center gap-2 min-w-0">
            <Search size={14} className="text-cyan-400 group-hover:scale-110 transition-transform flex-shrink-0" />
            <span className="truncate sm:hidden text-[11px]">Search...</span>
            <span className="truncate hidden sm:inline">Search docs, commands, agents...</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 flex-shrink-0">
            <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-800 border border-slate-700 text-slate-300 rounded font-mono">
              Ctrl
            </kbd>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-800 border border-slate-700 text-slate-300 rounded font-mono">
              K
            </kbd>
          </div>
        </button>
      </div>

      {/* Right: External Package & Code Links */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        <a 
          href={PROJECT_LINKS.discord} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-1.5 sm:p-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#5865F2]/60 hover:bg-slate-800/80 transition-all hover:shadow-[0_0_15px_rgba(88,101,242,0.3)] flex items-center justify-center group" 
          title="Join Discord Community"
          aria-label="Discord Community"
        >
          <img src="/discord.svg" alt="Discord" className="w-4 h-4 object-contain transition-transform group-hover:scale-110" />
        </a>

        <a 
          href={PROJECT_LINKS.npm} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hidden sm:flex p-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-red-500/50 hover:bg-slate-800/80 transition-all hover:shadow-[0_0_15px_rgba(213,0,0,0.2)]" 
          title="npm: @nikelyh/metamorph"
          aria-label="npm package"
        >
          <img src="/icons8-ngp.svg" alt="npm" className="w-4 h-4 object-contain" />
        </a>

        <a 
          href={PROJECT_LINKS.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-1.5 sm:p-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all hover:shadow-[0_0_15px_rgba(0,242,254,0.2)] flex items-center justify-center" 
          aria-label="GitHub Repository"
          title="GitHub Repository"
        >
          <img src="/github.svg" alt="GitHub" className="w-4 h-4 invert opacity-80 hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </header>
  );
}
