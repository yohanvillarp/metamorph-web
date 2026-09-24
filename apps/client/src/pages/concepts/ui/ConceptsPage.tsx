import { ShieldCheck, Cpu, Layers, GitBranch, Binary, PackageCheck, FileText, ExternalLink, Network, Boxes } from 'lucide-react';
import { CodeBlock } from '@/shared/ui/CodeBlock';

const WHITEPAPERS = [
  {
    id: '01',
    title: 'Project Intelligence Engine (PIE)',
    file: '01-project-intelligence-engine.md',
    description: 'Multi-stage heuristic confidence scoring, Subsumption DAG, and zero-token monorepo workspace topology resolution.',
    tag: 'Intelligence & Heuristics',
  },
  {
    id: '02',
    title: 'Polymorphic Package Manager Engine (PPME)',
    file: '02-package-manager-engine.md',
    description: 'Universal support for npm, pnpm, yarn, and bun with lockfile preservation and zero host subprocess leakage.',
    tag: 'Package Management',
  },
  {
    id: '03',
    title: 'Mozaik v4 Swarm Orchestration',
    file: '03-mozaik-swarm-orchestration.md',
    description: 'Event-driven blackboard model, typed semantic events, ephemeral participant lifecycle, and concurrency watchdogs.',
    tag: 'Multi-Agent Swarm',
  },
  {
    id: '04',
    title: 'Shadow Workspace Isolation',
    file: '04-shadow-workspace-isolation.md',
    description: 'Zero-risk virtual sandbox confinement, assertSandbox boundary enforcement, and isolated verification builds.',
    tag: 'Sandbox Security',
  },
  {
    id: '05',
    title: 'Layered Migration Catalogs',
    file: '05-layered-migration-catalogs.md',
    description: 'Hierarchical rule composition (Universal -> Runtime -> Framework Packs -> Pair Rules) for high-fidelity AST transforms.',
    tag: 'Rule Catalogs',
  },
  {
    id: '06',
    title: 'Dashboard FSD Architecture & Telemetry',
    file: '06-dashboard-fsd-telemetry.md',
    description: 'Feature-Sliced Design (FSD) React telemetry client, SSE event streams, and real-time swarm visualization.',
    tag: 'Telemetry & UI',
  },
];

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
          Metamorph was engineered to eliminate the fundamental risks of automated refactoring. 
          By combining isolated sandbox execution, event-driven agent swarms, deterministic heuristics, and strict hexagonal boundaries, Metamorph guarantees zero risk to your production code.
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
          <li>Real compilation tests (<code className="bg-slate-800 text-slate-200 px-1 py-0.5 rounded font-mono text-xs">install</code> and <code className="bg-slate-800 text-slate-200 px-1 py-0.5 rounded font-mono text-xs">build</code>) execute solely within the shadow workspace using your project's native package manager.</li>
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
          <li><strong>Ephemeral Participants:</strong> Workers and reviewers join the swarm dynamically to handle discrete files and leave upon task completion (<code className="text-cyan-300 font-mono">await participant.leave()</code>) to guarantee zero memory leaks.</li>
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
              Hosts the Mozaik agent definitions (Mapper, Worker, Reviewer, Coordinator, Integration, Reporter, PackageManager) and the migration runner orchestration logic.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#090e1a] border border-slate-800">
            <h3 className="font-bold text-cyan-400 font-mono text-sm mb-1">packages/@nikelyh/infrastructure</h3>
            <p className="text-sm text-slate-400">
              Implements driven ports: persistent SQLite storage via Node.js native <code className="text-cyan-300 font-mono">node:sqlite DatabaseSync</code>, ts-morph AST tools, shadow workspace file tools, Project Intelligence Engine heuristics, and the Express REST API server.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#090e1a] border border-slate-800">
            <h3 className="font-bold text-cyan-400 font-mono text-sm mb-1">packages/@nikelyh/cli & apps/dashboard</h3>
            <p className="text-sm text-slate-400">
              Driving adapters that expose Metamorph to engineers via the terminal (Commander.js) and the web browser (React 19 FSD dashboard).
            </p>
          </div>
        </div>
      </div>

      {/* 4. Project Intelligence Engine (PIE) & Monorepo Topology */}
      <div className="mb-14 scroll-mt-24" id="project-intelligence-engine">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-3">
          <Binary className="text-cyan-400" />
          4. Project Intelligence Engine (PIE) & Monorepo Topology
        </h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          The <strong className="text-white">Project Intelligence Engine (PIE)</strong> is Metamorph's deterministic static analysis engine. 
          Operating entirely without LLM inference (consuming <strong className="text-cyan-300">zero tokens</strong>), PIE calculates mathematical confidence scores across manifest declarations, lockfile signatures, and filesystem structural markers.
        </p>

        {/* PIE Architecture Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-[#090e1a] border border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-bold mb-2">
              <Network size={16} />
              The Subsumption DAG
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Meta-frameworks encapsulate underlying libraries (e.g. Next.js includes React; NestJS includes Express/Fastify). 
              PIE runs a <strong>Directed Acyclic Graph (DAG)</strong> to eliminate redundant classifications: <code className="text-cyan-300 font-mono">Next.js ≻ React</code> and <code className="text-cyan-300 font-mono">NestJS ≻ Express</code>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#090e1a] border border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-bold mb-2">
              <Boxes size={16} />
              Monorepo Workspace Discovery
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              PIE traverses upward from any directory to detect root monorepo boundaries: 
              <strong> Turborepo</strong> (<code className="text-cyan-300 font-mono">turbo.json</code>), <strong>pnpm workspaces</strong> (<code className="text-cyan-300 font-mono">pnpm-workspace.yaml</code>), <strong>npm/yarn workspaces</strong>, and <strong>Lerna</strong> (<code className="text-cyan-300 font-mono">lerna.json</code>).
            </p>
          </div>
        </div>

        <p className="text-slate-300 mb-3 text-sm leading-relaxed">
          Run standalone project intelligence directly from the command line:
        </p>
        <CodeBlock code="metamorph detect ." />
      </div>

      {/* 5. Polymorphic Package Manager Engine (PPME) */}
      <div className="mb-14 scroll-mt-24" id="polymorphic-package-manager">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-3">
          <PackageCheck className="text-cyan-400" />
          5. Polymorphic Package Manager Engine (PPME)
        </h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Modern JavaScript and TypeScript teams utilize divergent package managers. 
          Hardcoded <code className="bg-slate-800 text-slate-200 px-1 py-0.5 rounded font-mono text-xs">npm</code> commands break projects relying on pnpm's strict symlinks, Yarn Berry zero-installs, or Bun's binary runtime.
        </p>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Metamorph's <strong className="text-white">Polymorphic Package Manager Engine (PPME)</strong> provides universal compatibility:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-slate-300 mb-6 text-sm">
          <li><strong>Universal Lockfile Inspection:</strong> Autonomously identifies <code className="text-cyan-300 font-mono">npm</code> (<code className="text-slate-400 font-mono">package-lock.json</code>), <code className="text-cyan-300 font-mono">pnpm</code> (<code className="text-slate-400 font-mono">pnpm-lock.yaml</code>), <code className="text-cyan-300 font-mono">yarn</code> (<code className="text-slate-400 font-mono">yarn.lock</code>), and <code className="text-cyan-300 font-mono">bun</code> (<code className="text-slate-400 font-mono">bun.lockb</code>), or checks Corepack declarations.</li>
          <li><strong>Zero Host Process Leakage:</strong> <code className="text-cyan-300 font-mono">PackageManagerAgent</code> manipulates dependency manifests directly as JSON on disk. No dependency install commands are ever executed in the user's host workspace.</li>
          <li><strong>Native Sandbox Verification:</strong> The shadow workspace executes verification builds using the exact flags required by the active tool (e.g. <code className="text-cyan-300 font-mono">pnpm install --frozen-lockfile</code> and <code className="text-cyan-300 font-mono">pnpm run build</code>).</li>
        </ul>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left text-xs font-mono border border-slate-800 rounded-xl overflow-hidden">
            <thead className="bg-[#0f172a] text-cyan-300">
              <tr>
                <th className="p-3 border-b border-slate-800">Package Manager</th>
                <th className="p-3 border-b border-slate-800">Install Command</th>
                <th className="p-3 border-b border-slate-800">Add Dependency</th>
                <th className="p-3 border-b border-slate-800">Build Command</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 bg-[#090e1a] text-slate-300">
              <tr>
                <td className="p-3 font-bold text-cyan-300">npm</td>
                <td className="p-3">npm install</td>
                <td className="p-3">npm install &lt;pkg&gt;</td>
                <td className="p-3">npm run build</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-cyan-300">pnpm</td>
                <td className="p-3">pnpm install</td>
                <td className="p-3">pnpm add &lt;pkg&gt;</td>
                <td className="p-3">pnpm run build</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-cyan-300">yarn</td>
                <td className="p-3">yarn</td>
                <td className="p-3">yarn add &lt;pkg&gt;</td>
                <td className="p-3">yarn build</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-cyan-300">bun</td>
                <td className="p-3">bun install</td>
                <td className="p-3">bun add &lt;pkg&gt;</td>
                <td className="p-3">bun run build</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 6. Atomic Git Application */}
      <div className="mb-14 scroll-mt-24" id="atomic-git-apply">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-3">
          <GitBranch className="text-cyan-400" />
          6. Atomic Git Application & Rollback
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

      {/* 7. System Architecture Whitepapers */}
      <div className="mb-12 scroll-mt-24" id="technical-whitepapers">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-3">
          <FileText className="text-cyan-400" />
          7. System Architecture Whitepapers
        </h2>
        <p className="text-slate-300 mb-6 leading-relaxed">
          For architects, security auditors, and core contributors, the Metamorph engineering team maintains 6 comprehensive technical whitepapers in the official repository:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {WHITEPAPERS.map((wp) => (
            <a
              key={wp.id}
              href={`https://github.com/yohanvillarp/metamorph/blob/main/docs/architecture/${wp.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#090e1a] border border-slate-800 hover:border-cyan-500/40 hover:bg-[#0c1424] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
                    {wp.tag}
                  </span>
                  <ExternalLink size={14} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 font-mono">
                  {wp.id}. {wp.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {wp.description}
                </p>
              </div>
              <div className="text-[11px] font-mono text-cyan-400/80 group-hover:text-cyan-300 flex items-center gap-1.5 pt-2 border-t border-white/5">
                <span>Read Whitepaper on GitHub</span>
                <span>➔</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

