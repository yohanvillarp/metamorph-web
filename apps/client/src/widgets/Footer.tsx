import { Link } from 'react-router-dom';
import { ExternalLink, ShieldCheck, Terminal, Cpu } from 'lucide-react';
import { ROUTES } from '@/shared/config/routes';
import { PROJECT_LINKS } from '@/shared/config/links';
import { MetamorphLogo } from '@/shared/ui/MetamorphLogo';

export function Footer() {
  return (
    <footer className="border-t border-cyan-500/10 bg-[#04060a] text-slate-400 relative z-10 selection:bg-cyan-500/30 selection:text-white">
      {/* Subtle top ambient glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />

      {/* Main Footer Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand & Mission Column (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link
              to={ROUTES.HOME}
              className="group flex items-center gap-3 text-white transition-all cursor-pointer mb-4"
              title="Metamorph Home"
            >
              <div className="w-8 h-8 flex items-center justify-center drop-shadow-[0_0_10px_rgba(0,242,254,0.35)] group-hover:scale-105 transition-transform">
                <MetamorphLogo />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center tracking-tight select-none">
                  <span className="font-extrabold text-lg text-white group-hover:text-slate-100 transition-colors">
                    Meta
                  </span>
                  <span className="font-black text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] via-cyan-300 to-[#0284c7] group-hover:drop-shadow-[0_0_12px_rgba(0,242,254,0.6)] transition-all">
                    mørph
                  </span>
                </div>
                <span className="text-[11px] font-mono text-cyan-400/80 -mt-0.5">
                  Autonomous Migration Swarm
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed mb-5 font-normal">
              Autonomous framework migration and semantic AST refactoring system driven by a concurrent swarm of 8 Mozaik v4 agents with closed-loop verification.
            </p>

            {/* Invariant Guarantees */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                <ShieldCheck size={13} className="text-cyan-400" />
                <span>Zero-Risk Shadow Confinement</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                <Cpu size={13} className="text-cyan-400" />
                <span>Mozaik v4 Bus</span>
              </div>
            </div>
          </div>

          {/* Nav Column 1: Documentation (2 cols) */}
          <div className="md:col-span-2 sm:col-span-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-4 flex items-center gap-1.5">
              <Terminal size={13} className="text-cyan-400" />
              <span>Docs</span>
            </h3>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <Link to={ROUTES.DOCS.GETTING_STARTED} className="hover:text-cyan-300 transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link to={ROUTES.DOCS.SWARM} className="hover:text-cyan-300 transition-colors">
                  Swarm Architecture
                </Link>
              </li>
              <li>
                <Link to={ROUTES.DOCS.MIGRATIONS.ROOT} className="hover:text-cyan-300 transition-colors">
                  Supported Pairs
                </Link>
              </li>
              <li>
                <Link to={ROUTES.DOCS.CLI_REFERENCE} className="hover:text-cyan-300 transition-colors">
                  CLI Reference
                </Link>
              </li>
              <li>
                <Link to={ROUTES.DOCS.CONCEPTS} className="hover:text-cyan-300 transition-colors">
                  Core Invariants
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: Ecosystem (2 cols) */}
          <div className="md:col-span-2 sm:col-span-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-4">
              Ecosystem
            </h3>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href="#demo"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Live Code Demo
                </a>
              </li>
              <li>
                <a
                  href="#pipeline"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('pipeline')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  8-Agent Pipeline
                </a>
              </li>
              <li>
                <Link to={ROUTES.DOCS.COMMUNITY} className="hover:text-cyan-300 transition-colors">
                  Contributors
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Column 3: Community & Registry (3 cols) */}
          <div className="md:col-span-3 sm:col-span-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-4">
              Community & Code
            </h3>
            <div className="space-y-2.5">
              {/* GitHub Link */}
              <a
                href={PROJECT_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-xs font-mono transition-all"
              >
                <div className="flex items-center gap-2 text-slate-300 group-hover:text-white">
                  <img src="/github.svg" alt="GitHub" className="w-4 h-4 object-contain" />
                  <span>GitHub Repository</span>
                </div>
                <ExternalLink size={12} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              {/* npm Link */}
              <a
                href={PROJECT_LINKS.npm}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-xs font-mono transition-all"
              >
                <div className="flex items-center gap-2 text-slate-300 group-hover:text-white">
                  <img src="/icons8-ngp.svg" alt="npm" className="w-4 h-4 object-contain" />
                  <span>@nikelyh/metamorph</span>
                </div>
                <ExternalLink size={12} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              {/* Discord Link */}
              <a
                href={PROJECT_LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-xs font-mono transition-all"
              >
                <div className="flex items-center gap-2 text-slate-300 group-hover:text-white">
                  <img src="/discord.svg" alt="Discord" className="w-4 h-4 object-contain" />
                  <span>Discord Community</span>
                </div>
                <ExternalLink size={12} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Sub-Footer (Copyright & Meta) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p className="text-center sm:text-left">
            © 2026 Metamorph Swarm. Built for high-reliability framework transformations. Released under Apache-2.0.
          </p>

          <div className="flex items-center gap-3 text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-300">Swarm Ready</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
