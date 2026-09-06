import { useLocation } from 'react-router-dom';
import { ROUTES } from '@/shared/config/routes';
import { generateGroupedSections } from '@/entities/migration';

export const TableOfContents = () => {
  const location = useLocation();
  const isBackend = location.pathname.includes(ROUTES.DOCS.MIGRATIONS.BACKEND);
  const isFrontend = location.pathname.includes(ROUTES.DOCS.MIGRATIONS.FRONTEND);
  const isGettingStarted = location.pathname.includes(ROUTES.DOCS.GETTING_STARTED);

  let platforms: { name: string; id?: string }[] = [];
  
  if (isBackend) {
    platforms = generateGroupedSections(false).map(g => ({ name: g.sourceTech.name, id: g.sourceTech.name.toLowerCase().replace(/\./g, '') }));
  } else if (isFrontend) {
    platforms = generateGroupedSections(true).map(g => ({ name: g.sourceTech.name, id: g.sourceTech.name.toLowerCase().replace(/\./g, '') }));
  } else if (isGettingStarted) {
    platforms = [
      { name: 'Installation', id: 'installation' },
      { name: 'Quick Start', id: 'quick-start' },
    ];
  }

  return (
    <aside className="w-64 flex-shrink-0 hidden lg:block h-[calc(100vh-4rem)] overflow-y-auto sticky top-16 pt-8 pb-12 pl-6">
      <h3 className="text-sm font-semibold text-neo-text mb-4 tracking-wide">
        On this page
      </h3>
      <nav className="flex flex-col gap-1 border-l border-white/5">
        {platforms.map((p) => {
          const sectionId = p.id || p.name.toLowerCase().replace(/\./g, '');
          return (
            <a 
              key={p.name} 
              href={`#${sectionId}`} 
              className="block px-3 py-2 ml-4 rounded-xl text-sm text-neo-text-muted hover:text-neo-text hover:bg-white/5 transition-colors"
            >
              {p.name}
            </a>
          );
        })}
      </nav>
    </aside>
  );
};
