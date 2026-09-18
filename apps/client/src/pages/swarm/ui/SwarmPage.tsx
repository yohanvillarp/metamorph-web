import { RefreshCw, Zap, CheckCircle2, Clock } from 'lucide-react';

export const SwarmPage = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
          <Zap size={14} className="text-cyan-400" />
          Agent Swarm Reference
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
          The 7 Mozaik Swarm Agents
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Metamorph delegates the migration workload to seven specialized agents orchestrated concurrently over the Mozaik v4 event bus.
          Each agent operates with isolated responsibilities and strict concurrency boundaries.
        </p>
      </div>

      {/* Agents Deep Dive */}
      <div className="space-y-10 mb-14">
        {/* 1. Mapper */}
        <div className="p-6 rounded-2xl bg-[#090f1c] border border-cyan-500/20 scroll-mt-24" id="mapper-agent">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              1. MapperAgent
            </h2>
            <span className="text-xs font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
              Discovery Phase
            </span>
          </div>
          <p className="text-sm text-slate-300 mb-3 leading-relaxed">
            Scans the user’s project directory, constructs the abstract file tree, and identifies files requiring migration according to the selected catalog. 
            For every matched file, it emits a <code className="bg-slate-800 text-cyan-300 px-1 py-0.5 rounded font-mono text-xs">FILE_DISCOVERED</code> event.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-400 bg-[#06090e] p-3.5 rounded-xl border border-white/5">
            <div><strong className="text-slate-200">Listens to:</strong> MIGRATION_STARTED</div>
            <div><strong className="text-cyan-400">Emits:</strong> FILE_DISCOVERED (per file)</div>
          </div>
        </div>

        {/* 2. PackageManager */}
        <div className="p-6 rounded-2xl bg-[#090f1c] border border-cyan-500/20 scroll-mt-24" id="package-manager-agent">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              2. PackageManagerAgent
            </h2>
            <span className="text-xs font-mono bg-teal-950 text-teal-300 border border-teal-500/30 px-2.5 py-0.5 rounded-full">
              Dependency Isolation
            </span>
          </div>
          <p className="text-sm text-slate-300 mb-3 leading-relaxed">
            Performs surgical edits directly on <code className="bg-slate-800 text-cyan-300 px-1 py-0.5 rounded font-mono text-xs">.metamorph/shadow/package.json</code>. 
            Adds target framework dependencies, strips deprecated libraries, scaffolds build scripts (e.g. Next or Vite configs), and emits <code className="bg-slate-800 text-cyan-300 px-1 py-0.5 rounded font-mono text-xs">PHASE_PACKAGES_READY</code>.
          </p>
          <div className="p-3 bg-amber-950/30 border border-amber-500/30 rounded-lg text-xs text-amber-200 mb-3">
            <strong>Host Safety Rule:</strong> PackageManager never spawns npm subprocesses in your root directory. It manipulates JSON strings directly in disk sandbox.
          </div>
        </div>

        {/* 3. Worker */}
        <div className="p-6 rounded-2xl bg-[#090f1c] border border-cyan-500/30 shadow-[0_0_20px_rgba(0,242,254,0.08)] scroll-mt-24" id="worker-agent">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-cyan-300 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              3. WorkerAgent
            </h2>
            <span className="text-xs font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/40 px-2.5 py-0.5 rounded-full">
              Concurrency: Max 3
            </span>
          </div>
          <p className="text-sm text-slate-300 mb-3 leading-relaxed">
            The core code transformer. Receives <code className="bg-slate-800 text-cyan-300 px-1 py-0.5 rounded font-mono text-xs">FILE_DISCOVERED</code> or <code className="bg-slate-800 text-red-300 px-1 py-0.5 rounded font-mono text-xs">FILE_REJECTED</code> events, extracts <strong className="text-white">NeighborContext</strong> (imports, sibling exports), applies catalog architectural rules, and writes the transformed AST to the shadow workspace.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-400 bg-[#06090e] p-3.5 rounded-xl border border-white/5">
            <div><strong className="text-slate-200">Rate Limit Control:</strong> ConcurrencyQueue (3 max)</div>
            <div><strong className="text-cyan-400">Emits:</strong> FILE_MIGRATED / FILE_FAILED</div>
          </div>
        </div>

        {/* 4. Reviewer */}
        <div className="p-6 rounded-2xl bg-[#090f1c] border border-cyan-500/20 scroll-mt-24" id="reviewer-agent">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              4. ReviewerAgent
            </h2>
            <span className="text-xs font-mono bg-emerald-950 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
              Quality Gate
            </span>
          </div>
          <p className="text-sm text-slate-300 mb-3 leading-relaxed">
            Examines every migrated file for AST errors, missing imports, hallucinated packages, or broken contracts. 
            If valid, emits <code className="bg-slate-800 text-emerald-300 px-1 py-0.5 rounded font-mono text-xs">FILE_REVIEWED</code>. 
            If issues are detected, emits <code className="bg-slate-800 text-red-300 px-1 py-0.5 rounded font-mono text-xs">FILE_REJECTED</code> with detailed feedback for the Worker (budgeted up to 2 retries).
          </p>
        </div>

        {/* 5. Coordinator */}
        <div className="p-6 rounded-2xl bg-[#090f1c] border border-cyan-500/20 scroll-mt-24" id="coordinator-agent">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              5. CoordinatorAgent
            </h2>
            <span className="text-xs font-mono bg-indigo-950 text-indigo-300 border border-indigo-500/30 px-2.5 py-0.5 rounded-full">
              Zero-LLM State Machine
            </span>
          </div>
          <p className="text-sm text-slate-300 mb-3 leading-relaxed">
            A purely deterministic state monitor with zero LLM API cost. Tracks the plan status, counts completed/failed tasks, verifies that packages are ready, and when all files have settled, triggers <code className="bg-slate-800 text-cyan-300 px-1 py-0.5 rounded font-mono text-xs">PHASE_INTEGRATION_STARTED</code>.
          </p>
        </div>

        {/* 6. Integration */}
        <div className="p-6 rounded-2xl bg-[#090f1c] border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.08)] scroll-mt-24" id="integration-agent">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-amber-300 font-mono flex items-center gap-2">
              <RefreshCw size={16} className="text-amber-400 animate-spin" />
              6. IntegrationAgent (Self-Repair Loop)
            </h2>
            <span className="text-xs font-mono bg-amber-950 text-amber-300 border border-amber-500/40 px-2.5 py-0.5 rounded-full">
              Up to 4 Build Rounds
            </span>
          </div>
          <p className="text-sm text-slate-300 mb-3 leading-relaxed">
            The ultimate test. Executes real <code className="bg-slate-800 text-slate-200 px-1 py-0.5 rounded font-mono text-xs">npm install</code> and <code className="bg-slate-800 text-slate-200 px-1 py-0.5 rounded font-mono text-xs">npm run build</code> inside the shadow workspace.
          </p>
          <p className="text-sm text-slate-300 mb-3 leading-relaxed">
            If the compiler flags type errors or missing exports, IntegrationAgent parses compiler diagnostics via ts-morph and diagnostic tools, re-injects the failing files back to <strong className="text-white">WorkerAgent</strong> with fresh repair budgets, and rebuilds.
          </p>
          <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-lg text-xs text-emerald-300 flex items-center gap-2">
            <CheckCircle2 size={16} />
            <span>When the build succeeds without errors, IntegrationAgent emits MIGRATION_COMPLETED.</span>
          </div>
        </div>

        {/* 7. Reporter */}
        <div className="p-6 rounded-2xl bg-[#090f1c] border border-cyan-500/20 scroll-mt-24" id="reporter-agent">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              7. ReporterAgent
            </h2>
            <span className="text-xs font-mono bg-purple-950 text-purple-300 border border-purple-500/30 px-2.5 py-0.5 rounded-full">
              MIGRATION.md
            </span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            Compiles a complete audit log in <code className="bg-slate-800 text-cyan-300 px-1 py-0.5 rounded font-mono text-xs">.metamorph/shadow/&lt;runId&gt;/MIGRATION.md</code>. 
            Lists all transformed files, applied rules, integration round metrics, and the ready-to-run Git apply command.
          </p>
        </div>
      </div>

      {/* Safety & Watchdogs Table */}
      <div className="scroll-mt-24" id="concurrency-watchdogs">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-3">
          <Clock className="text-cyan-400" />
          Concurrency Limits & Watchdogs
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono border border-slate-800 rounded-xl overflow-hidden">
            <thead className="bg-[#0f172a] text-cyan-400 uppercase">
              <tr>
                <th className="p-3 border-b border-slate-800">Mechanism</th>
                <th className="p-3 border-b border-slate-800">Location</th>
                <th className="p-3 border-b border-slate-800">Limit</th>
                <th className="p-3 border-b border-slate-800">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 bg-[#090e1a] text-slate-300">
              <tr>
                <td className="p-3 font-bold text-white">ConcurrencyQueue</td>
                <td className="p-3">WorkerAgent</td>
                <td className="p-3 text-cyan-300">3 tasks</td>
                <td className="p-3">Prevents LLM API rate limits and memory spikes</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white">Retry Budget</td>
                <td className="p-3">WorkerAgent</td>
                <td className="p-3 text-cyan-300">2 retries / file</td>
                <td className="p-3">Prevents infinite reject-repair loops</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white">Integration Rounds</td>
                <td className="p-3">IntegrationAgent</td>
                <td className="p-3 text-cyan-300">4 build rounds</td>
                <td className="p-3">Caps shadow compilation attempts</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white">Global Watchdog</td>
                <td className="p-3">CoordinatorAgent</td>
                <td className="p-3 text-cyan-300">30 minutes</td>
                <td className="p-3">Terminates frozen runs automatically</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
