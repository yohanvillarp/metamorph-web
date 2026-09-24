import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '@/shared/config/routes';
import { ChevronDown, ChevronRight, X, BookOpen, Layers, Cpu, Terminal, Shield } from 'lucide-react';
import { cn } from '@/shared/lib/utils';

interface DocsSidebarProps {
  mobileOpen?: boolean;
  setMobileOpen?: (open: boolean) => void;
}

export const DocsSidebar = ({ mobileOpen, setMobileOpen }: DocsSidebarProps) => {
  const location = useLocation();
  const [migrationsOpen, setMigrationsOpen] = useState(true);

  // Close mobile menu when route changes
  useEffect(() => {
    if (setMobileOpen) setMobileOpen(false);
  }, [location.pathname, setMobileOpen]);

  const isActive = (path: string) => location.pathname === path || location.pathname + '/' === path;

  const getLinkClasses = (path: string) => `
    px-3 py-2 rounded-xl text-xs md:text-sm font-medium transition-all flex items-center gap-2.5 ${
      isActive(path)
        ? 'bg-cyan-950/80 text-cyan-300 font-semibold border border-cyan-500/40 shadow-[0_0_15px_rgba(0,242,254,0.15)]'
        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
    }
  `;

  const SidebarContent = (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="flex items-center justify-between px-3 pb-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <img src="/logo_metamorph.png" alt="Logo" className="w-5 h-5 object-contain" />
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-400">
            Metamorph Docs
          </span>
        </div>
        <span className="text-[10px] bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-500/30 font-mono text-cyan-300">
          v2.1.2
        </span>
      </div>

      {/* 1. Getting Started */}
      <div>
        <div className="px-3 mb-2 text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1.5">
          <BookOpen size={12} className="text-cyan-400" />
          <span>Getting Started</span>
        </div>
        <nav className="flex flex-col gap-1">
          <Link to={ROUTES.DOCS.ROOT} className={getLinkClasses(ROUTES.DOCS.ROOT)}>
            Overview & Philosophy
          </Link>
          <Link to={ROUTES.DOCS.GETTING_STARTED} className={getLinkClasses(ROUTES.DOCS.GETTING_STARTED)}>
            Installation & Quickstart
          </Link>
        </nav>
      </div>

      {/* 2. Architecture & Concepts */}
      <div>
        <div className="px-3 mb-2 text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1.5">
          <Shield size={12} className="text-cyan-400" />
          <span>Core Architecture</span>
        </div>
        <nav className="flex flex-col gap-1">
          <Link to={ROUTES.DOCS.CONCEPTS} className={getLinkClasses(ROUTES.DOCS.CONCEPTS)}>
            Architecture & Whitepapers
          </Link>
        </nav>
      </div>

      {/* 3. The Swarm */}
      <div>
        <div className="px-3 mb-2 text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1.5">
          <Cpu size={12} className="text-cyan-400" />
          <span>Mozaik v4 Swarm</span>
        </div>
        <nav className="flex flex-col gap-1">
          <Link to={ROUTES.DOCS.SWARM} className={getLinkClasses(ROUTES.DOCS.SWARM)}>
            The 7 Agents Reference
          </Link>
        </nav>
      </div>

      {/* 4. Migration Matrix */}
      <div>
        <div className="flex items-center justify-between px-3 mb-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1.5">
            <Layers size={12} className="text-cyan-400" />
            Migration Matrix
          </span>
          <button
            onClick={() => setMigrationsOpen(!migrationsOpen)}
            className="text-slate-500 hover:text-slate-300"
          >
            {migrationsOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </button>
        </div>
        
        {migrationsOpen && (
          <nav className="flex flex-col gap-1 pl-2 border-l border-white/5 ml-3">
            <Link to={ROUTES.DOCS.MIGRATIONS.FRONTEND} className={getLinkClasses(ROUTES.DOCS.MIGRATIONS.FRONTEND)}>
              Frontend Frameworks
            </Link>
            <Link to={ROUTES.DOCS.MIGRATIONS.BACKEND} className={getLinkClasses(ROUTES.DOCS.MIGRATIONS.BACKEND)}>
              Backend Frameworks
            </Link>
          </nav>
        )}
      </div>

      {/* 5. CLI Reference */}
      <div>
        <div className="px-3 mb-2 text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1.5">
          <Terminal size={12} className="text-cyan-400" />
          <span>Tools & Reference</span>
        </div>
        <nav className="flex flex-col gap-1">
          <Link to={ROUTES.DOCS.CLI_REFERENCE} className={getLinkClasses(ROUTES.DOCS.CLI_REFERENCE)}>
            CLI Commands & Env
          </Link>
        </nav>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 md:hidden" 
          onClick={() => setMobileOpen?.(false)} 
        />
      )}

      {/* Sidebar Container */}
      <aside className={cn(
        "w-64 flex-shrink-0 border-r border-cyan-500/10 overflow-y-auto pt-8 pb-12",
        // Desktop styles
        "md:block md:sticky md:top-20 md:h-[calc(100vh-5rem)] md:z-0 md:bg-transparent md:pr-6",
        // Mobile styles
        mobileOpen ? "fixed inset-y-0 left-0 z-50 bg-[#06090e] h-full px-6 shadow-2xl transition-transform transform translate-x-0" : "hidden"
      )}>
        {/* Mobile Floating Close Button */}
        {mobileOpen && setMobileOpen && (
          <div className="md:hidden mb-6 mt-2 flex justify-end">
            <button 
              onClick={() => setMobileOpen(false)} 
              className="p-2 rounded-lg bg-[#0d1424] border border-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        )}
        
        {SidebarContent}
      </aside>
    </>
  );
};

