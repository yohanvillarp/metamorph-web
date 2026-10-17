import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/config/routes';
import { ArrowRight, ShieldCheck, Cpu, Layers, Terminal, Binary, PackageCheck, AlertTriangle } from 'lucide-react';
import { SEOHead } from '@/shared/ui/SEOHead';
import { TechnicalCallout } from '@/shared/ui/TechnicalCallout';

export const OverviewPage = () => {
  return (
    <div className="max-w-4xl">
      <SEOHead
        title="Overview & Philosophy | Metamorph Docs"
        description="Discover how Metamorph automates full-stack software migrations through zero-risk shadow workspaces, Mozaik v4 event swarms, and the Project Intelligence Engine."
        keywords="metamorph philosophy, software migration, shadow workspace, mozaik v4, code refactoring, zero risk migration"
      />
      {/* Header with High-Density Spec Tags */}
      <div className="mb-10 pb-6 border-b border-slate-800/80">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-900 border border-slate-700/80 text-cyan-400 font-mono text-[11px] font-bold tracking-wider uppercase">
            <Cpu size={13} className="text-cyan-400" />
            ARCHITECTURE OVERVIEW
          </span>
          <span className="text-[11px] font-mono text-slate-500">ENGINE: MOZAIK V4</span>
          <span className="text-slate-700">•</span>
          <span className="text-[11px] font-mono text-emerald-400">ISOLATION: ZERO-RISK</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
          Overview &amp; Philosophy
        </h1>
        <p className="text-base sm:text-lg text-slate-300 mb-3 leading-relaxed">
          Metamorph is a Command Line Interface (CLI) designed to automate architectural shifts and framework migrations across modern full-stack codebases.
        </p>
        <p className="text-sm text-slate-400 leading-relaxed">
          Unlike traditional codemods or static analysis scripts that rely on brittle regular expressions or shallow Abstract Syntax Tree (AST) transformations, Metamorph orchestrates a swarm of specialized AI agents powered by the <strong className="text-white">Mozaik v4</strong> runtime to understand the semantic context, domain logic, and architectural patterns of your application.
        </p>
      </div>

      <div className="mb-12 scroll-mt-24" id="the-problem">
        <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          <AlertTriangle size={18} className="text-amber-400" />
          <span>The Problem with Traditional Codemods</span>
        </h2>
        <p className="text-slate-300 mb-4 text-xs sm:text-sm leading-relaxed">
          Migrating a production application to a new framework (e.g. from Express to NestJS, or React SPA to Next.js App Router) has historically been an excruciating, error-prone endeavor:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-400 mb-6">
          <li><strong className="text-slate-200">Regressions in-place:</strong> Codemods modify source files directly. If an import fails or types desynchronize, the working tree is left broken.</li>
          <li><strong className="text-slate-200">Context Blindness:</strong> Regex and basic AST transforms cannot deduce neighbor dependencies, missing exports, or required configuration scaffolds.</li>
          <li><strong className="text-slate-200">Manual Verification Bottlenecks:</strong> Developers must manually install packages and resolve hundreds of compiler diagnostics by hand.</li>
        </ul>

        <TechnicalCallout
          type="diagnostic"
          title="Static Regex vs. Autonomous Swarm Transformation"
          badge="LIMITATION OF LEGACY CODEMODS"
        >
          <p>
            Traditional AST scripts fail when signatures change across imported module boundaries. Metamorph solves this by maintaining a reactive Blackboard in Mozaik v4, allowing the <code className="text-slate-200 font-mono">ReviewerAgent</code> and <code className="text-slate-200 font-mono">IntegrationAgent</code> to test-compile in isolation and dispatch repair loops before source code is ever touched.
          </p>
        </TechnicalCallout>
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
              8-Agent Adaptive Swarm
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Eight specialized agents with dynamic bypass modes, automated compiler repair loops, and real-time dollar cost accounting.
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
              Monitor agents live with <code className="text-cyan-300 font-mono">metamorph ui</code> (including the real-time Shadow Diff Viewer) and export verified builds to clean Git branches with <code className="text-cyan-300 font-mono">metamorph apply</code>.
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
              <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">The 8 Swarm Agents</div>
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

