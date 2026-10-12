import { DocsSidebar } from '@/widgets/docs-sidebar';
import { TableOfContents } from '@/widgets/table-of-contents';
import { MobileNav } from '@/widgets/mobile-nav';
import { DocsPagination } from '@/shared/ui/DocsPagination';
import { CyberLoader } from '@/shared/ui/CyberLoader';
import { useEffect, useState, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export const DocsLayout = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Reset global window scroll position on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleOpenSidebar = () => setIsMobileMenuOpen(true);
    window.addEventListener('metamorph:open-docs-sidebar', handleOpenSidebar);
    return () => window.removeEventListener('metamorph:open-docs-sidebar', handleOpenSidebar);
  }, []);

  return (
    <div className="min-h-screen bg-neo-bg text-neo-text pt-16 sm:pt-20 flex flex-col">
      <div className="flex-1 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-start">
        {/* Left Sidebar */}
        <DocsSidebar mobileOpen={isMobileMenuOpen} setMobileOpen={setIsMobileMenuOpen} />

        {/* Main Content Area */}
        <main id="docs-content" className="flex-1 min-w-0 py-8 lg:px-12 md:px-8">
          <MobileNav />
          <Suspense fallback={<CyberLoader compact message="LOADING DOCS SECTION..." />}>
            <Outlet />
          </Suspense>
          <DocsPagination />
        </main>

        {/* Right Table of Contents */}
        <TableOfContents />
      </div>
    </div>
  );
};
