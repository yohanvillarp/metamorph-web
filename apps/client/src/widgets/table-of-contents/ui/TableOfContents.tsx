import { useLocation } from 'react-router-dom';
import { ROUTES } from '@/shared/config/routes';
import { generateGroupedSections } from '@/entities/migration';

interface TocItem {
  name: string;
  id: string;
}

export const TableOfContents = () => {
  const location = useLocation();
  const path = location.pathname;

  let items: TocItem[] = [];

  if (path.includes(ROUTES.DOCS.MIGRATIONS.BACKEND)) {
    items = generateGroupedSections(false).map(g => ({ 
      name: g.sourceTech.name, 
      id: g.sourceTech.name.toLowerCase().replace(/\./g, '') 
    }));
  } else if (path.includes(ROUTES.DOCS.MIGRATIONS.FRONTEND)) {
    items = generateGroupedSections(true).map(g => ({ 
      name: g.sourceTech.name, 
      id: g.sourceTech.name.toLowerCase().replace(/\./g, '') 
    }));
  } else if (path.includes(ROUTES.DOCS.GETTING_STARTED)) {
    items = [
      { name: 'Prerequisites', id: 'prerequisites' },
      { name: '1. Installation', id: 'installation' },
      { name: '2. Configure API Key', id: 'api-key-configuration' },
      { name: '3. Run the Swarm', id: 'quick-start' },
      { name: '4. Monitor Dashboard', id: 'monitoring-the-swarm' },
      { name: '5. Review & Apply', id: 'review-and-apply' },
    ];
  } else if (path.includes(ROUTES.DOCS.CONCEPTS)) {
    items = [
      { name: '1. Shadow Workspace', id: 'shadow-workspace' },
      { name: '2. Mozaik v4 Event Swarm', id: 'mozaik-swarm' },
      { name: '3. Hexagonal Architecture', id: 'hexagonal-architecture' },
      { name: '4. Project Intelligence Engine', id: 'project-intelligence-engine' },
      { name: '5. Polymorphic Package Manager', id: 'polymorphic-package-manager' },
      { name: '6. Atomic Git Application', id: 'atomic-git-apply' },
      { name: '7. Technical Whitepapers', id: 'technical-whitepapers' },
    ];
  } else if (path.includes(ROUTES.DOCS.SWARM)) {
    items = [
      { name: 'MapperAgent', id: 'mapper-agent' },
      { name: 'PackageManagerAgent', id: 'package-manager-agent' },
      { name: 'WorkerAgent', id: 'worker-agent' },
      { name: 'ReviewerAgent', id: 'reviewer-agent' },
      { name: 'CoordinatorAgent', id: 'coordinator-agent' },
      { name: 'IntegrationAgent', id: 'integration-agent' },
      { name: 'ReporterAgent', id: 'reporter-agent' },
      { name: 'Concurrency Watchdogs', id: 'concurrency-watchdogs' },
    ];
  } else if (path.includes(ROUTES.DOCS.CLI_REFERENCE)) {
    items = [
      { name: 'metamorph run', id: 'command-run' },
      { name: 'metamorph ui', id: 'command-ui' },
      { name: 'metamorph apply', id: 'command-apply' },
      { name: 'metamorph rollback', id: 'command-rollback' },
      { name: 'metamorph detect', id: 'command-detect' },
      { name: 'metamorph list', id: 'command-list' },
      { name: 'metamorph reset', id: 'command-reset' },
      { name: 'Environment Variables', id: 'env-variables' },
    ];
  } else if (path === ROUTES.DOCS.ROOT || path === ROUTES.DOCS.ROOT + '/') {
    items = [
      { name: 'The Problem', id: 'the-problem' },
      { name: 'The Metamorph Solution', id: 'the-metamorph-solution' },
      { name: 'Next Steps', id: 'next-steps' },
    ];
  }

  if (items.length === 0) return null;

  return (
    <aside className="w-64 flex-shrink-0 hidden lg:block h-[calc(100vh-5rem)] overflow-y-auto sticky top-20 pt-8 pb-12 pl-6 border-l border-cyan-500/10">
      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3">
        On this page
      </h3>
      <nav className="flex flex-col gap-1 border-l border-slate-800">
        {items.map((item) => (
          <a 
            key={item.id} 
            href={`#${item.id}`} 
            className="block px-3 py-1.5 ml-2 rounded-lg text-xs font-mono text-slate-400 hover:text-cyan-300 hover:bg-cyan-950/30 transition-colors truncate"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </aside>
  );
};

