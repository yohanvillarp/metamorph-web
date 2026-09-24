import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/config/routes';
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Layers, Terminal, Binary, PackageCheck } from 'lucide-react';

export const OverviewPage = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
          <Sparkles size={14} className="text-cyan-400" />
          Metamorph CLI
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
          Overview & Philosophy
        </h1>
        <p className="text-lg text-slate-300 mb-4 leading-relaxed">
          Metamorph is a Command Line Interface (CLI) designed to automate architectural shifts and framework migrations across modern full-stack codebases.
        </p>
        <p className="text-slate-400 leading-relaxed">
          Unlike traditional codemods or static analysis scripts that rely on brittle regular expressions or shallow Abstract Syntax Tree (AST) transformations, Metamorph orchestrates a swarm of specialized AI agents powered by the <strong className="text-white">Mozaik v4</strong> runtime to understand the semantic context, domain logic, and architectural patterns of your application.
        </p>
      </div>

      <div className="mb-12 scroll-mt-24" id="the-problem">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2">
          The Problem with Traditional Codemods
        </h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Migrating a production application to a new framework (e.g. from Express to NestJS, or React SPA to Next.js App Router) has historically been an excruciating, error-prone endeavor:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-400 mb-4">
          <li><strong>Regressions in-place:</strong> Codemods modify source files directly. If an import fails or types desynchronize, the working tree is left broken.</li>
          <li><strong>Context Blindness:</strong> Regex and basic AST transforms cannot deduce neighbor dependencies, missing exports, or required configuration scaffolds.</li>
          <li><strong>Manual Verification Bottlenecks:</strong> Developers must manually install packages and resolve hundreds of compiler diagnostics by hand.</li>
        </ul>
      </div>

      <div className="mb-12 scroll-mt-24" id="the-metamorph-solution">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2">
          The Metamorph Solution
        </h2>
        <p className="text-slate-300 mb-6 leading-relaxed">
          Metamorph solves architectural shifts through six core architectural pillars:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="p-5 rounded-xl bg-[#090f1c] border border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-bold mb-2">
              <ShieldCheck size={18} />
              Zero-Risk Shadow Workspace
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your source files are strictly read-only. All transformations, dependency installs, and test compilations happen in <code className="text-cyan-300 font-mono">.metamorph/shadow</code>.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#090f1c] border border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-bold mb-2">
              <Cpu size={18} />
              7-Agent Mozaik Swarm
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Mapper, Worker, Reviewer, and Integration agents collaborate over an event-driven blackboard with automated compiler repair loops.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#090f1c] border border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-bold mb-2">
              <Binary size={18} />
              Project Intelligence Engine (PIE)
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Zero-token deterministic heuristics score manifests, resolve Subsumption DAGs, and discover monorepo workspaces (Turborepo, pnpm, npm, Lerna).
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#090f1c] border border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-bold mb-2">
              <PackageCheck size={18} />
              Polymorphic Package Manager (PPME)
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Universal support for <code className="text-cyan-300 font-mono">npm</code>, <code className="text-cyan-300 font-mono">pnpm</code>, <code className="text-cyan-300 font-mono">yarn</code>, and <code className="text-cyan-300 font-mono">bun</code> with lockfile integrity and zero host process leakage.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#090f1c] border border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-bold mb-2">
              <Layers size={18} />
              Layered Domain Catalogs
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Rules are composed hierarchically (Universal, Runtime, Framework Packs, Pair Rules) for maximum transform fidelity.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#090f1c] border border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-bold mb-2">
              <Terminal size={18} />
              Real-Time UI & Git Exporter
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Monitor agents live with <code className="text-cyan-300 font-mono">metamorph ui</code> and export verified builds to clean Git branches with <code className="text-cyan-300 font-mono">metamorph apply</code>.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12 scroll-mt-24" id="next-steps">
        <h2 className="text-2xl font-bold text-white mb-6 border-b border-cyan-500/20 pb-2">
          Documentation Index
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link to={ROUTES.DOCS.GETTING_STARTED} className="p-4 rounded-xl bg-[#090e1a] border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group">
            <div>
              <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">Getting Started</div>
              <div className="text-xs text-slate-500">Installation, setup & quick migration</div>
            </div>
            <ArrowRight size={16} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
          </Link>

          <Link to={ROUTES.DOCS.CONCEPTS} className="p-4 rounded-xl bg-[#090e1a] border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group">
            <div>
              <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">Core Concepts</div>
              <div className="text-xs text-slate-500">Shadow workspace & hexagonal design</div>
            </div>
            <ArrowRight size={16} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
          </Link>

          <Link to={ROUTES.DOCS.SWARM} className="p-4 rounded-xl bg-[#090e1a] border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group">
            <div>
              <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">The 7 Swarm Agents</div>
              <div className="text-xs text-slate-500">Worker, reviewer & integration loops</div>
            </div>
            <ArrowRight size={16} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
          </Link>

          <Link to={ROUTES.DOCS.CLI_REFERENCE} className="p-4 rounded-xl bg-[#090e1a] border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group">
            <div>
              <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">CLI Reference</div>
              <div className="text-xs text-slate-500">Commands, flags & dashboard API</div>
            </div>
            <ArrowRight size={16} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
};

