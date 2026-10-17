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
                <th className="p-3 border-b border-slate-800">Default / Example</th>
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
              <tr>
                <td className="p-3 text-cyan-300 font-bold">--disable-agents &lt;list&gt;</td>
                <td className="p-3">Comma-separated auxiliary agents to disable (reporter, reviewer, accounting)</td>
                <td className="p-3">--disable-agents reviewer,reporter</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-bold">--model &lt;model&gt;</td>
                <td className="p-3">LLM model to use for worker agents</td>
                <td className="p-3">--model gpt-5.4</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-bold">--reviewer-model &lt;model&gt;</td>
                <td className="p-3">LLM model specifically for reviewer agent</td>
                <td className="p-3">--reviewer-model claude-sonnet-4-6</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-bold">--concurrency &lt;number&gt;</td>
                <td className="p-3">Number of concurrent agent workers</td>
                <td className="p-3">Default: 3 (e.g. --concurrency 5)</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-bold">--timeout &lt;seconds&gt;</td>
                <td className="p-3">Inference timeout in seconds</td>
                <td className="p-3">Default: 180 (e.g. --timeout 240)</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-bold">--retries &lt;number&gt;</td>
                <td className="p-3">Maximum repair retries per file</td>
                <td className="p-3">Default: 2 (e.g. --retries 3)</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-bold">--dry-run</td>
                <td className="p-3">Preview migration plan, rule sets, and package changes without executing LLM inference or writing files</td>
                <td className="p-3">Flag (e.g. metamorph run --dry-run)</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-bold">--mock</td>
                <td className="p-3">Run 100% offline with the Deterministic Mock LLM Provider at $0.00 cost with simulated token metrics</td>
                <td className="p-3">Flag (e.g. metamorph run --mock)</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-bold">--integration-rounds &lt;number&gt;</td>
                <td className="p-3">Maximum shadow build integration rounds</td>
                <td className="p-3">Default: 4 (e.g. --integration-rounds 2)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-sm font-semibold text-slate-300 font-mono mb-2">Execution Examples & Cost Optimization:</h3>
        <p className="text-xs text-slate-400 mb-3 leading-relaxed">
          You can preview plans safely, test offline at zero cost, or tune execution for maximum speed:
        </p>
        <CodeBlock 
          code={`# Preview migration plan and affected files with zero LLM inference
metamorph run --from express --to hono --dry-run

# Run completely offline with zero API keys ($0.00 expenditure)
metamorph run --from express --to fastify --mock

# Run on a specific monorepo workspace package
metamorph run --workspace apps/client --from react --to next

# Low-cost fast run (disables reviewer & reporter, triggering 0-token fallbacks)
metamorph run --from express --to fastify --disable-agents reviewer,reporter

# Custom model selection with high concurrency
metamorph run --model gpt-5.4 --concurrency 5`} 
        />
      </div>

      {/* 2. metamorph config */}
      <div className="mb-12 scroll-mt-24" id="command-config">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-2">
          <span className="text-cyan-400 font-mono">metamorph config [subcommand]</span>
        </h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Manages local and global settings through a cascading configuration system. Metamorph resolves settings following the strict precedence hierarchy:
          <code className="text-cyan-300 font-mono text-xs ml-1">CLI flags &gt; Environment variables &gt; Local .metamorphrc.json &gt; Global ~/.metamorphrc.json &gt; Defaults</code>.
        </p>

        <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider font-mono mb-2">Subcommands & Wizard</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-left text-xs font-mono border border-slate-800 rounded-xl overflow-hidden">
            <thead className="bg-[#0f172a] text-cyan-300">
              <tr>
                <th className="p-3 border-b border-slate-800">Command</th>
                <th className="p-3 border-b border-slate-800">Description</th>
                <th className="p-3 border-b border-slate-800">Scope</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 bg-[#090e1a] text-slate-300">
              <tr>
                <td className="p-3 text-cyan-300 font-bold">metamorph config</td>
                <td className="p-3">Launches the interactive setup wizard to configure models, concurrency, and limits</td>
                <td className="p-3">Interactive Prompt</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-bold">metamorph config list</td>
                <td className="p-3">Prints all resolved keys with active origin tags ((env), (local), (global), (default))</td>
                <td className="p-3">Resolved View</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-bold">metamorph config get &lt;key&gt;</td>
                <td className="p-3">Outputs the resolved value for a specific setting key</td>
                <td className="p-3">Resolved</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-bold">metamorph config set &lt;key&gt; [val] [--global]</td>
                <td className="p-3">Mutates key in local .metamorphrc.json or globally with --global in ~/.metamorphrc.json</td>
                <td className="p-3">File Write</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-bold">metamorph config path [--global]</td>
                <td className="p-3">Prints the absolute filesystem path to the active configuration file</td>
                <td className="p-3">Path Resolution</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider font-mono mb-2">Supported Configuration Keys</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-left text-xs font-mono border border-slate-800 rounded-xl overflow-hidden">
            <thead className="bg-[#0f172a] text-cyan-300">
              <tr>
                <th className="p-3 border-b border-slate-800">Key</th>
                <th className="p-3 border-b border-slate-800">Type</th>
                <th className="p-3 border-b border-slate-800">Default</th>
                <th className="p-3 border-b border-slate-800">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 bg-[#090e1a] text-slate-300">
              <tr>
                <td className="p-3 text-cyan-300 font-bold">model</td>
                <td className="p-3 text-slate-400">string</td>
                <td className="p-3 text-emerald-400 font-semibold">claude-sonnet-4-6</td>
                <td className="p-3">Primary LLM model powering WorkerAgent code migrations</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-bold">reviewerModel</td>
                <td className="p-3 text-slate-400">string</td>
                <td className="p-3 text-slate-400">(inherits model)</td>
                <td className="p-3">Dedicated LLM model specifically for ReviewerAgent passes</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-bold">concurrency</td>
                <td className="p-3 text-slate-400">number</td>
                <td className="p-3 text-emerald-400 font-semibold">3</td>
                <td className="p-3">Parallel WorkerAgent queue concurrency limit</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-bold">inferenceTimeoutMs</td>
                <td className="p-3 text-slate-400">number</td>
                <td className="p-3 text-emerald-400 font-semibold">180000</td>
                <td className="p-3">Max LLM inference execution timeout per file (in milliseconds)</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-bold">maxRetries</td>
                <td className="p-3 text-slate-400">number</td>
                <td className="p-3 text-emerald-400 font-semibold">2</td>
                <td className="p-3">Maximum code transformation repair attempts per rejected file</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-bold">maxIntegrationRounds</td>
                <td className="p-3 text-slate-400">number</td>
                <td className="p-3 text-emerald-400 font-semibold">4</td>
                <td className="p-3">Maximum shadow compilation repair cycles in IntegrationAgent</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-bold">disabledAgents</td>
                <td className="p-3 text-slate-400">string[]</td>
                <td className="p-3 text-slate-400">[]</td>
                <td className="p-3">Auxiliary agents to disable (reporter, reviewer, accounting)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-sm font-semibold text-slate-300 font-mono mb-2">Example .metamorphrc.json:</h3>
        <CodeBlock code={'{\n  "model": "gpt-5.4",\n  "reviewerModel": "claude-sonnet-4-6",\n  "concurrency": 4,\n  "maxRetries": 2,\n  "maxIntegrationRounds": 3,\n  "disabledAgents": ["reviewer"]\n}'} />
      </div>

      {/* 3. metamorph ui */}
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

      {/* 4. metamorph apply */}
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

      {/* 5. metamorph rollback */}
      <div className="mb-12 scroll-mt-24" id="command-rollback">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-2">
          <span className="text-cyan-400 font-mono">metamorph rollback &lt;runId&gt;</span>
        </h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Safely discards an unapplied migration, deletes the virtual sandbox at <code className="text-cyan-300 font-mono">.metamorph/shadow/&lt;runId&gt;</code>, and cleans up database task records.
        </p>
        <CodeBlock code="metamorph rollback run-9b2e" />
      </div>

      {/* 6. metamorph detect */}
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
        <CodeBlock 
          code={`# Run static intelligence on current folder
metamorph detect .

# Run on another project or monorepo subfolder
metamorph detect ../my-app`} 
        />
      </div>

      {/* 7. metamorph list */}
      <div className="mb-12 scroll-mt-24" id="command-list">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-2">
          <span className="text-cyan-400 font-mono">metamorph list</span>
        </h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Queries the native SQLite database (<code className="text-cyan-300 font-mono">.metamorph/history.db</code>) and displays a summary table of past and ongoing migration runs, their source and target frameworks, task statistics, and applied Git branches.
        </p>
        <CodeBlock code="metamorph list" />
      </div>

      {/* 8. metamorph reset */}
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
        <div className="grid gap-3.5 sm:grid-cols-2">
          {[
            {
              name: 'OPENAI_API_KEY',
              status: 'Required (or Anthropic)',
              isRequired: true,
              desc: 'API key for OpenAI models powering the WorkerAgent and ReviewerAgent in Mozaik.',
            },
            {
              name: 'ANTHROPIC_API_KEY',
              status: 'Required (or OpenAI)',
              isRequired: true,
              desc: 'API key for Anthropic Claude models as an alternative inference provider.',
            },
            {
              name: 'METAMORPH_DEV',
              status: 'Optional (1 / 0)',
              isRequired: false,
              desc: 'Enables development mode logging and allows running directly from source TypeScript without distribution build notices.',
            },
            {
              name: 'METAMORPH_MODEL',
              status: 'Optional (string)',
              isRequired: false,
              desc: 'Overrides the primary worker LLM model across all CLI executions without editing configuration files.',
            },
            {
              name: 'METAMORPH_REVIEWER_MODEL',
              status: 'Optional (string)',
              isRequired: false,
              desc: 'Overrides the dedicated model used specifically by ReviewerAgent for quality gate validation.',
            },
            {
              name: 'METAMORPH_CONCURRENCY',
              status: 'Optional (integer)',
              isRequired: false,
              desc: 'Configures the WorkerAgent concurrency queue limit (default: 3).',
            },
            {
              name: 'METAMORPH_INFERENCE_TIMEOUT_MS',
              status: 'Optional (integer)',
              isRequired: false,
              desc: 'Configures max inference execution duration per file before triggering a timeout error (default: 180000 ms).',
            },
            {
              name: 'METAMORPH_MAX_RETRIES',
              status: 'Optional (integer)',
              isRequired: false,
              desc: 'Maximum retry budget for WorkerAgent when ReviewerAgent rejects a transformed file (default: 2).',
            },
            {
              name: 'METAMORPH_INTEGRATION_ROUNDS',
              status: 'Optional (integer)',
              isRequired: false,
              desc: 'Maximum shadow compilation repair cycles executed by IntegrationAgent (default: 4).',
            },
            {
              name: 'METAMORPH_DISABLED_AGENTS',
              status: 'Optional (comma list)',
              isRequired: false,
              desc: 'List of auxiliary agents to disable (reporter, reviewer, accounting), activating zero-token bypass modes.',
            },
          ].map((env) => (
            <div
              key={env.name}
              className="p-4 rounded-xl bg-[#080d17]/95 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5 flex-wrap">
                  <code className="font-mono font-bold text-cyan-300 text-xs px-2.5 py-1 rounded bg-[#040812] border border-cyan-500/25 select-all">
                    {env.name}
                  </code>
                  <span
                    className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                      env.isRequired
                        ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                        : 'bg-slate-800/70 text-slate-400 border-slate-700/60'
                    }`}
                  >
                    {env.status}
                  </span>
                </div>
                <p className="text-slate-400 font-sans text-xs leading-relaxed">
                  {env.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
