import { ShieldCheck, Cpu, Layers, GitBranch } from 'lucide-react';
import { CodeBlock } from '@/shared/ui/CodeBlock';

export const ConceptsPage = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
          <Cpu size={14} className="text-cyan-400" />
          System Architecture
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
          Core Architectural Concepts
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Metamorph was engineered to solve the fundamental dangers of automated refactoring. 
          By combining isolated sandbox execution, event-driven agent swarms, and strict hexagonal boundaries, Metamorph guarantees zero risk to your production code.
        </p>
      </div>

      {/* 1. Shadow Workspace */}
      <div className="mb-14 scroll-mt-24" id="shadow-workspace">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-3">
          <ShieldCheck className="text-cyan-400" />
          1. The Shadow Workspace (Zero-Risk Guarantee)
        </h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Traditional codemods modify files in-place. If an AST transform fails midway, your repository is left in a broken, half-migrated state.
        </p>
        <p className="text-slate-300 mb-4 leading-relaxed">
          In Metamorph, <strong className="text-white">your original project is strictly read-only</strong>. When you invoke <code className="bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 px-1.5 py-0.5 rounded text-sm font-mono">metamorph run</code>:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-300 mb-6">
          <li>A virtual sandbox is created at <code className="bg-slate-800 text-cyan-300 px-1.5 py-0.5 rounded text-sm font-mono">.metamorph/shadow/&lt;runId&gt;</code>.</li>
          <li>All file transformations, AST edits, and <code className="bg-slate-800 text-slate-200 px-1 py-0.5 rounded font-mono text-xs">package.json</code> modifications happen exclusively inside this sandbox.</li>
          <li>Real compilation tests (<code className="bg-slate-800 text-slate-200 px-1 py-0.5 rounded font-mono text-xs">npm install</code> and <code className="bg-slate-800 text-slate-200 px-1 py-0.5 rounded font-mono text-xs">npm run build</code>) execute solely within the shadow workspace.</li>
          <li>Only after the build passes cleanly does the CLI invite you to apply the changes via a dedicated Git branch.</li>
        </ul>

        <div className="p-4 rounded-xl bg-[#080d17] border border-cyan-500/30 font-mono text-xs text-slate-300 leading-relaxed">
          <span className="text-cyan-400 font-bold block mb-1">Invariance Enforced:</span>
          assertSandbox(filePath, sandboxDir) validates every file operation. Any attempt to write outside the shadow workspace throws an immediate runtime exception.
        </div>
      </div>

      {/* 2. Mozaik v4 Event-Driven Swarm */}
      <div className="mb-14 scroll-mt-24" id="mozaik-swarm">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-3">
          <Cpu className="text-cyan-400" />
          2. Mozaik v4 Event Bus & Blackboard Model
        </h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Metamorph does not use a rigid waterfall script. Instead, it deploys a swarm of autonomous agents on top of the <strong className="text-white">Mozaik v4</strong> runtime.
        </p>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Agents communicate exclusively through typed semantic events (<code className="bg-slate-800 text-cyan-300 px-1.5 py-0.5 rounded text-sm font-mono">SemanticEventName</code>) published to a central blackboard:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-300 mb-6">
          <li><strong>Loose Coupling:</strong> Agents never invoke each other directly. They declare situation specifications and react when matching events occur.</li>
          <li><strong>Ephemeral Participants:</strong> Workers and reviewers join the swarm dynamically to handle discrete files and leave upon task completion.</li>
          <li><strong>Concurrent Queue Limits:</strong> LLM inferences are throttled by an internal concurrency queue (max 3 concurrent workers) to ensure you never hit provider rate limits.</li>
        </ul>
      </div>

      {/* 3. Hexagonal Architecture */}
      <div className="mb-14 scroll-mt-24" id="hexagonal-architecture">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-3">
          <Layers className="text-cyan-400" />
          3. Strict Hexagonal Architecture (Ports & Adapters)
        </h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Metamorph’s monorepo is divided into four strictly isolated architectural layers:
        </p>
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-[#090e1a] border border-slate-800">
            <h3 className="font-bold text-cyan-400 font-mono text-sm mb-1">packages/@nikelyh/domain (Zero I/O)</h3>
            <p className="text-sm text-slate-400">
              Contains pure domain entities, migration plans, semantic event contracts, and layered catalog rules. Zero external dependencies, no file system access, and no network calls.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#090e1a] border border-slate-800">
            <h3 className="font-bold text-cyan-400 font-mono text-sm mb-1">packages/@nikelyh/application</h3>
            <p className="text-sm text-slate-400">
              Hosts the Mozaik agent definitions (Mapper, Worker, Reviewer, Coordinator, Integration, Reporter) and the migration runner orchestration logic.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#090e1a] border border-slate-800">
            <h3 className="font-bold text-cyan-400 font-mono text-sm mb-1">packages/@nikelyh/infrastructure</h3>
            <p className="text-sm text-slate-400">
              Implements driven ports: persistent SQLite storage via Node.js native <code className="text-cyan-300 font-mono">node:sqlite DatabaseSync</code>, ts-morph AST tools, shadow workspace file tools, and the Express REST API server.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#090e1a] border border-slate-800">
            <h3 className="font-bold text-cyan-400 font-mono text-sm mb-1">packages/@nikelyh/cli & apps/dashboard</h3>
            <p className="text-sm text-slate-400">
              Driving adapters that expose Metamorph to engineers via the terminal (Commander.js) and the web browser (React 18 FSD dashboard).
            </p>
          </div>
        </div>
      </div>

      {/* 4. Atomic Git Application */}
      <div className="mb-12 scroll-mt-24" id="atomic-git-apply">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-3">
          <GitBranch className="text-cyan-400" />
          4. Atomic Git Application & Rollback
        </h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Once the swarm verifies the shadow build, Metamorph allows you to safely export the result to Git:
        </p>
        <CodeBlock code="metamorph apply <runId> ." />
        <p className="text-slate-300 mt-4 mb-4 leading-relaxed">
          Metamorph automatically isolates the migrated codebase inside a dedicated branch (<code className="bg-slate-800 text-cyan-300 px-1 py-0.5 rounded font-mono text-xs">metamorph/&lt;runId&gt;</code>), enabling standard peer code review before merging into your main branch.
        </p>
        <p className="text-slate-300 leading-relaxed">
          If you choose not to proceed, simply discard the shadow workspace with zero residue:
        </p>
        <CodeBlock code="metamorph rollback <runId>" />
      </div>
    </div>
  );
};
