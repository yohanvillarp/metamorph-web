import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '@/shared/config/routes';
import { ChevronDown, ChevronRight, X } from 'lucide-react';
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
  const isMigrationActive = location.pathname.includes(ROUTES.DOCS.MIGRATIONS.ROOT);

  const SidebarContent = (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6 md:mb-3 px-3">
        <h3 className="text-sm font-semibold text-neo-text uppercase tracking-wider flex items-center justify-between w-full">
          <span>Metamorph</span>
          <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full border border-white/5 font-mono text-neo-text-muted">v2.0.0</span>
        </h3>
      </div>
      <nav className="flex flex-col gap-1">
        <Link
          to={ROUTES.DOCS.ROOT}
          className={`px-3 py-2 rounded-xl text-sm transition-colors ${
            isActive(ROUTES.DOCS.ROOT) && !isMigrationActive && !isActive(ROUTES.DOCS.GETTING_STARTED)
              ? 'bg-[#1a2332] text-neo-accent font-medium border border-neo-accent/20' 
              : 'text-neo-text-muted hover:text-neo-text hover:bg-white/5'
          }`}
        >
          Overview
        </Link>

        <Link
          to={ROUTES.DOCS.GETTING_STARTED}
          className={`px-3 py-2 rounded-xl text-sm transition-colors ${
            isActive(ROUTES.DOCS.GETTING_STARTED)
              ? 'bg-[#1a2332] text-neo-accent font-medium border border-neo-accent/20' 
              : 'text-neo-text-muted hover:text-neo-text hover:bg-white/5'
          }`}
        >
          Getting Started
        </Link>

        {/* Nested Migrations Menu */}
        <div className="mt-1">
          <button
            onClick={() => setMigrationsOpen(!migrationsOpen)}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-colors ${
              isMigrationActive && !migrationsOpen
                ? 'bg-[#1a2332] text-neo-accent font-medium border border-neo-accent/20'
                : 'text-neo-text-muted hover:text-neo-text hover:bg-white/5'
            }`}
          >
            <span>Migrations</span>
            {migrationsOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          
          {migrationsOpen && (
            <div className="flex flex-col gap-1 mt-1 pl-4 border-l border-white/5 ml-3">
              <Link
                to={ROUTES.DOCS.MIGRATIONS.BACKEND}
                className={`px-3 py-2 rounded-xl text-sm transition-colors ${
                  isActive(ROUTES.DOCS.MIGRATIONS.BACKEND)
                    ? 'text-neo-accent font-medium'
                    : 'text-neo-text-muted hover:text-neo-text hover:bg-white/5'
                }`}
              >
                Backend Frameworks
              </Link>
              <Link
                to={ROUTES.DOCS.MIGRATIONS.FRONTEND}
                className={`px-3 py-2 rounded-xl text-sm transition-colors ${
                  isActive(ROUTES.DOCS.MIGRATIONS.FRONTEND)
                    ? 'text-neo-accent font-medium'
                    : 'text-neo-text-muted hover:text-neo-text hover:bg-white/5'
                }`}
              >
                Frontend Frameworks
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden" 
          onClick={() => setMobileOpen?.(false)} 
        />
      )}

      {/* Sidebar Container */}
      <aside className={cn(
        "w-64 flex-shrink-0 border-r border-neo-border overflow-y-auto pt-8 pb-12",
        // Desktop styles
        "md:block md:sticky md:top-20 md:h-[calc(100vh-5rem)] md:z-0 md:bg-transparent md:pr-6",
        // Mobile styles
        mobileOpen ? "fixed inset-y-0 left-0 z-50 bg-neo-bg h-full px-6 shadow-2xl transition-transform transform translate-x-0" : "hidden"
      )}>
        {/* Mobile Floating Close Button */}
        {mobileOpen && setMobileOpen && (
          <div className="md:hidden mb-6 mt-2">
            <button 
              onClick={() => setMobileOpen(false)} 
              className="p-2 rounded-lg bg-[#1a2332] border border-white/10 text-neo-text-muted hover:text-white transition-colors flex items-center justify-center shadow-md"
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
