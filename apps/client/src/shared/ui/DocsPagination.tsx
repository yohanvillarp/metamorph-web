import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { ROUTES } from '@/shared/config/routes';

interface DocPage {
  title: string;
  href: string;
}

const DOC_PAGES: DocPage[] = [
  { title: 'Overview & Philosophy', href: ROUTES.DOCS.ROOT },
  { title: 'Installation & Quickstart', href: ROUTES.DOCS.GETTING_STARTED },
  { title: 'Core Architecture & Whitepapers', href: ROUTES.DOCS.CONCEPTS },
  { title: 'The 8 Swarm Agents', href: ROUTES.DOCS.SWARM },
  { title: 'CLI Command Reference', href: ROUTES.DOCS.CLI_REFERENCE },
  { title: 'Backend Framework Matrix', href: ROUTES.DOCS.MIGRATIONS.BACKEND },
  { title: 'Frontend Framework Matrix', href: ROUTES.DOCS.MIGRATIONS.FRONTEND },
];

export function DocsPagination() {
  const { pathname } = useLocation();

  // Normalize path without trailing slash
  const cleanPath = pathname.replace(/\/$/, '') || '/';
  
  const currentIndex = DOC_PAGES.findIndex((page) => {
    const pageHref = page.href.replace(/\/$/, '') || '/';
    return cleanPath === pageHref;
  });

  if (currentIndex === -1) return null;

  const prev = currentIndex > 0 ? DOC_PAGES[currentIndex - 1] : null;
  const next = currentIndex < DOC_PAGES.length - 1 ? DOC_PAGES[currentIndex + 1] : null;

  return (
    <div className="mt-16 pt-8 border-t border-cyan-500/10">
      {/* Prev / Next Nav Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {prev ? (
          <Link
            to={prev.href}
            className="group flex flex-col p-4 rounded-xl bg-[#080d17] border border-slate-800 hover:border-cyan-500/40 hover:bg-cyan-950/20 transition-all"
          >
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 mb-1 group-hover:text-cyan-400 transition-colors">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
              <span>Previous Page</span>
            </div>
            <div className="text-sm font-semibold text-white group-hover:text-cyan-200 transition-colors">
              {prev.title}
            </div>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            to={next.href}
            className="group flex flex-col items-end text-right p-4 rounded-xl bg-[#080d17] border border-slate-800 hover:border-cyan-500/40 hover:bg-cyan-950/20 transition-all sm:col-start-2"
          >
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 mb-1 group-hover:text-cyan-400 transition-colors">
              <span>Next Page</span>
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="text-sm font-semibold text-white group-hover:text-cyan-200 transition-colors">
              {next.title}
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* Community Links & GitHub Help */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500 pt-4 border-t border-slate-800/40">
        <div className="flex items-center gap-2">
          <span>Metamorph CLI v2.2.0</span>
          <span>•</span>
          <span className="text-slate-400">Mozaik v4 Runtime</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          <a
            href="https://www.npmjs.com/package/@nikelyh/metamorph"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <img src="/icons8-ngp.svg" alt="npm" className="w-3.5 h-3.5 object-contain" />
            <span>npm package</span>
          </a>
          <span>•</span>
          <a
            href="https://github.com/yohanvillarp/metamorph/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1"
          >
            <span>Report an issue</span>
            <ExternalLink size={12} />
          </a>
          <span>•</span>
          <a
            href="https://github.com/yohanvillarp/metamorph"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <img src="/github.svg" alt="GitHub" className="w-3.5 h-3.5 invert opacity-80" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
