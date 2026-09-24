import { Terminal, Key } from 'lucide-react';
import { CodeBlock } from '@/shared/ui/CodeBlock';
import { SEOHead } from '@/shared/ui/SEOHead';

export const CliReferencePage = () => {
  return (
    <div className="max-w-4xl">
      <SEOHead
        title="CLI Command Reference | Metamorph Docs"
        description="Complete command-line documentation for Metamorph: metamorph run, ui, apply, rollback, detect, list, reset, monorepo flags, and environment variables."
        keywords="metamorph cli, cli reference, metamorph run, metamorph detect, metamorph apply, command line migration"
      />
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
          <Terminal size={14} className="text-cyan-400" />
          Command-Line Interface
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
          CLI Command Reference
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Complete reference for the <code className="text-cyan-300 font-mono">@nikelyh/metamorph</code> command-line tools, flags, interactive flows, and environment variables.
        </p>
      </div>

      {/* 1. metamorph run */}
      <div className="mb-12 scroll-mt-24" id="command-run">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-2">
          <span className="text-cyan-400 font-mono">metamorph run [path]</span>
        </h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Initializes and runs an autonomous migration on the specified target path (defaults to current directory <code className="text-cyan-300 font-mono">.</code>).
        </p>
        
        <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider font-mono mb-2">Options & Flags</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-left text-xs font-mono border border-slate-800 rounded-xl overflow-hidden">
            <thead className="bg-[#0f172a] text-cyan-300">
              <tr>
                <th className="p-3 border-b border-slate-800">Flag</th>
                <th className="p-3 border-b border-slate-800">Description</th>
                <th className="p-3 border-b border-slate-800">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 bg-[#090e1a] text-slate-300">
              <tr>
                <td className="p-3 text-cyan-300 font-bold">--from &lt;tech&gt;</td>
                <td className="p-3">Source framework ID (skips interactive detector)</td>
                <td className="p-3">--from react</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-bold">--to &lt;tech&gt;</td>
                <td className="p-3">Target framework ID</td>
                <td className="p-3">--to next</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-bold">--workspace &lt;pkg&gt;</td>
                <td className="p-3">Target a specific package in a monorepo</td>
                <td className="p-3">--workspace apps/web</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-sm font-semibold text-slate-300 font-mono mb-2">Monorepos & Interactive Selection:</h3>
        <p className="text-xs text-slate-400 mb-3 leading-relaxed">
          When run inside a monorepo (Turborepo, pnpm workspaces, npm/yarn workspaces, or Lerna), Metamorph automatically discovers member packages and prompts you to select one, or you can bypass the prompt with <code className="text-cyan-300 font-mono">--workspace &lt;pkg&gt;</code>.
        </p>
        <CodeBlock code="# Run on a specific monorepo workspace package\nmetamorph run --workspace apps/client --from react --to next\n\n# Or run interactively with full auto-detection\nmetamorph run" />
      </div>

      {/* 2. metamorph ui */}
      <div className="mb-12 scroll-mt-24" id="command-ui">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-2">
          <span className="text-cyan-400 font-mono">metamorph ui [-p &lt;port&gt;]</span>
        </h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Launches the local Express REST API server and automatically opens the Metamorph Web Dashboard in your default browser (default port: <code className="text-cyan-300 font-mono">9876</code>).
        </p>
        <CodeBlock code="metamorph ui --port 9876" />
        <div className="mt-4 p-4 rounded-xl bg-[#080d17] border border-slate-800 text-xs font-mono text-slate-400 space-y-1">
          <div><strong className="text-slate-200">GET  /api/plans</strong> : Returns list of active and historic migration runs</div>
          <div><strong className="text-slate-200">GET  /api/events</strong> : Real-time Mozaik semantic event bus stream</div>
          <div><strong className="text-slate-200">POST /api/migrations/start</strong> : Dispatches a new migration run</div>
          <div><strong className="text-slate-200">POST /api/migrations/rollback</strong> : Discards a plan sandbox</div>
        </div>
      </div>

      {/* 3. metamorph apply */}
      <div className="mb-12 scroll-mt-24" id="command-apply">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-2">
          <span className="text-cyan-400 font-mono">metamorph apply &lt;runId&gt; &lt;targetPath&gt;</span>
        </h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Exports a completed, verified shadow workspace onto a dedicated Git branch (<code className="text-cyan-300 font-mono">metamorph/&lt;runId&gt;</code>) in your target repository.
        </p>
        <div className="p-3 bg-cyan-950/40 border border-cyan-500/30 rounded-lg text-xs text-cyan-200 mb-4">
          <strong>Precondition:</strong> Only plans with status <code className="text-emerald-300 font-bold">outcome: "success"</code> and <code className="text-emerald-300 font-bold">phase: "completed"</code> can be applied. If a build failed in shadow, apply is blocked to protect your codebase.
        </div>
        <CodeBlock code="metamorph apply run-9b2e ." />
      </div>

      {/* 4. metamorph rollback */}
      <div className="mb-12 scroll-mt-24" id="command-rollback">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-2">
          <span className="text-cyan-400 font-mono">metamorph rollback &lt;runId&gt;</span>
        </h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Safely discards an unapplied migration, deletes the virtual sandbox at <code className="text-cyan-300 font-mono">.metamorph/shadow/&lt;runId&gt;</code>, and cleans up database task records.
        </p>
        <CodeBlock code="metamorph rollback run-9b2e" />
      </div>

      {/* 5. metamorph detect */}
      <div className="mb-12 scroll-mt-24" id="command-detect">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-2">
          <span className="text-cyan-400 font-mono">metamorph detect [path]</span>
        </h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Executes static intelligence analysis over dependencies, configuration markers, and physical directory layouts without starting a migration or invoking any LLM (<strong className="text-cyan-300">zero tokens</strong>).
        </p>
        <p className="text-slate-400 text-xs mb-3 leading-relaxed">
          Outputs detected frameworks, confidence scores, runtime variants (e.g. App Router vs Pages Router), bundlers, package managers, monorepo topologies, and Subsumption DAG resolutions.
        </p>
        <CodeBlock code="# Run static intelligence on current folder\nmetamorph detect .\n\n# Run on another project or monorepo subfolder\nmetamorph detect ../my-app" />
      </div>

      {/* 6. metamorph list */}
      <div className="mb-12 scroll-mt-24" id="command-list">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-2">
          <span className="text-cyan-400 font-mono">metamorph list</span>
        </h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Queries the native SQLite database (<code className="text-cyan-300 font-mono">.metamorph/history.db</code>) and displays a summary table of past and ongoing migration runs, their source and target frameworks, task statistics, and applied Git branches.
        </p>
        <CodeBlock code="metamorph list" />
      </div>

      {/* 7. metamorph reset */}
      <div className="mb-14 scroll-mt-24" id="command-reset">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-2">
          <span className="text-cyan-400 font-mono">metamorph reset</span>
        </h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Clears all migration history, plan states, and event records from the local SQLite database (<code className="text-cyan-300 font-mono">.metamorph/history.db</code>), resetting the state store to a clean slate.
        </p>
        <CodeBlock code="metamorph reset" />
      </div>

      {/* Environment Variables */}
      <div className="scroll-mt-24" id="env-variables">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-3">
          <Key className="text-cyan-400" />
          Environment Variables
        </h2>
        <div className="space-y-4 text-xs font-mono">
          <div className="p-4 rounded-xl bg-[#080d17] border border-slate-800">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-cyan-300">OPENAI_API_KEY</span>
              <span className="text-amber-400">Required (or Anthropic)</span>
            </div>
            <p className="text-slate-400 font-sans text-xs">
              API key for OpenAI models powering the WorkerAgent and ReviewerAgent in Mozaik.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#080d17] border border-slate-800">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-cyan-300">ANTHROPIC_API_KEY</span>
              <span className="text-amber-400">Required (or OpenAI)</span>
            </div>
            <p className="text-slate-400 font-sans text-xs">
              API key for Anthropic Claude models as an alternative inference provider.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#080d17] border border-slate-800">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-cyan-300">METAMORPH_DEV</span>
              <span className="text-slate-500">Optional (1 / 0)</span>
            </div>
            <p className="text-slate-400 font-sans text-xs">
              Enables development mode logging and allows running directly from source TypeScript without distribution build notices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
