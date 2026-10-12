import { Link } from 'react-router-dom';
import { Home, BookOpen, Terminal, ArrowLeft } from 'lucide-react';
import { ROUTES } from '@/shared/config/routes';
import { SEOHead } from '@/shared/ui/SEOHead';

export function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-[#06090e] text-slate-100">
      <SEOHead
        title="Page Not Found (404) | Metamorph"
        description="The requested documentation page does not exist in Metamorph."
      />

      <div className="max-w-md w-full text-center relative z-10">
        {/* Glowing Logo Backdrop */}
        <div className="relative inline-block mb-6">
          <div className="absolute -inset-4 bg-cyan-400/20 rounded-full blur-2xl" />
          <img 
            src="/logo_metamorph.png" 
            alt="Metamorph" 
            className="w-20 h-20 mx-auto object-contain relative drop-shadow-[0_0_25px_rgba(0,242,254,0.4)]" 
          />
        </div>

        {/* 404 Header */}
        <div className="inline-block px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
          Error 404
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Page Not Found
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed mb-8">
          The documentation page or section you are looking for has been moved, refactored, or does not exist in the current Metamorph v2.2.0 release.
        </p>

        {/* Quick Links */}
        <div className="flex flex-col gap-2.5 mb-8">
          <Link
            to={ROUTES.HOME}
            className="flex items-center justify-between p-3.5 rounded-xl bg-[#090f1c] border border-cyan-500/20 hover:border-cyan-500/60 hover:bg-cyan-950/30 text-white transition-all text-xs font-mono group"
          >
            <div className="flex items-center gap-3">
              <Home size={16} className="text-cyan-400" />
              <span>Return to Landing Page</span>
            </div>
            <ArrowLeft size={14} className="rotate-180 text-slate-500 group-hover:text-cyan-400 transition-colors" />
          </Link>

          <Link
            to={ROUTES.DOCS.ROOT}
            className="flex items-center justify-between p-3.5 rounded-xl bg-[#090f1c] border border-cyan-500/20 hover:border-cyan-500/60 hover:bg-cyan-950/30 text-white transition-all text-xs font-mono group"
          >
            <div className="flex items-center gap-3">
              <BookOpen size={16} className="text-cyan-400" />
              <span>Browse Documentation</span>
            </div>
            <ArrowLeft size={14} className="rotate-180 text-slate-500 group-hover:text-cyan-400 transition-colors" />
          </Link>

          <Link
            to={ROUTES.DOCS.CLI_REFERENCE}
            className="flex items-center justify-between p-3.5 rounded-xl bg-[#090f1c] border border-cyan-500/20 hover:border-cyan-500/60 hover:bg-cyan-950/30 text-white transition-all text-xs font-mono group"
          >
            <div className="flex items-center gap-3">
              <Terminal size={16} className="text-cyan-400" />
              <span>CLI Command Reference</span>
            </div>
            <ArrowLeft size={14} className="rotate-180 text-slate-500 group-hover:text-cyan-400 transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
}
