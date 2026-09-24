import { CodeBlock } from '@/shared/ui/CodeBlock';
import { Key, ShieldCheck, PlayCircle } from 'lucide-react';

export const GettingStartedPage = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
          <PlayCircle size={14} className="text-cyan-400" />
          Quickstart Guide
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
          Getting Started with Metamorph
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Follow this guide to install the CLI, configure your inference API keys, and run your first autonomous migration safely in a shadow workspace.
        </p>
      </div>

      {/* Prerequisites */}
      <div className="mb-12 scroll-mt-24" id="prerequisites">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-2">
          <span>Prerequisites</span>
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-300 mb-4 text-sm">
          <li><strong>Node.js:</strong> Version 20.0.0 or newer (<code className="text-cyan-300 font-mono">node:sqlite</code> native storage support).</li>
          <li><strong>Package Manager:</strong> Any standard package manager: <code className="text-cyan-300 font-mono">npm</code>, <code className="text-cyan-300 font-mono">pnpm</code>, <code className="text-cyan-300 font-mono">yarn</code>, or <code className="text-cyan-300 font-mono">bun</code>. Metamorph adapts automatically.</li>
          <li><strong>Git:</strong> Installed and initialized at your project or monorepo root (needed for <code className="text-cyan-300 font-mono">metamorph apply</code>).</li>
          <li><strong>LLM API Key:</strong> Either OpenAI or Anthropic API key to power Worker & Reviewer agents.</li>
        </ul>
      </div>

      {/* Installation */}
      <div className="mb-12 scroll-mt-24" id="installation">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-2">
          <span>1. Installation</span>
        </h2>
        <p className="text-slate-300 mb-4 text-sm leading-relaxed">
          Install the Metamorph CLI globally via NPM, or execute it on-demand with npx:
        </p>
        <CodeBlock code="# Global installation\nnpm install -g @nikelyh/metamorph\n\n# Or run directly without installing\nnpx @nikelyh/metamorph run" />
      </div>

      {/* API Key Configuration */}
      <div className="mb-12 scroll-mt-24" id="api-key-configuration">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-2">
          <Key className="text-cyan-400" size={20} />
          <span>2. Configure Your API Key</span>
        </h2>
        <p className="text-slate-300 mb-4 text-sm leading-relaxed">
          Metamorph blocks execution upfront if no API key is detected, preventing your swarm from halting mid-flight. 
          Create a <code className="text-cyan-300 font-mono">.env</code> file in your project directory or export it in your shell:
        </p>
        <CodeBlock code={'# In your project .env file\nOPENAI_API_KEY=sk-...\n\n# Or directly in terminal (macOS/Linux):\nexport OPENAI_API_KEY="sk-..."\n\n# Or directly in PowerShell (Windows):\n$env:OPENAI_API_KEY="sk-..."'} />
      </div>

      {/* Quick Start */}
      <div className="mb-12 scroll-mt-24" id="quick-start">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-2">
          <span>3. Run the Swarm</span>
        </h2>
        <p className="text-slate-300 mb-4 text-sm leading-relaxed">
          Navigate to the target project directory and launch Metamorph:
        </p>
        <CodeBlock code="cd my-legacy-project\nmetamorph run" />
        
        <p className="text-slate-300 my-4 text-sm leading-relaxed">
          The <strong className="text-white">Project Intelligence Engine (PIE)</strong> scans your project, detects technologies (e.g. Express, React, NestJS), and prompts you with valid migration paths. 
          You can also specify source and destination explicitly:
        </p>
        <CodeBlock code="metamorph run --from react --to next" />

        <div className="mt-6 p-4 rounded-xl bg-[#080d17] border border-cyan-500/20 text-xs text-slate-300 space-y-2">
          <div className="font-mono text-cyan-300 font-bold flex items-center gap-1.5">
            <span>📦 Monorepo Execution & Workspace Targeting</span>
          </div>
          <p className="text-slate-400 leading-relaxed">
            If executed inside a monorepo (Turborepo, pnpm workspaces, npm/yarn workspaces, or Lerna), Metamorph automatically discovers member packages and allows interactive selection, or direct targeting with <code className="text-cyan-300 font-mono">--workspace &lt;pkg&gt;</code>:
          </p>
          <CodeBlock code="metamorph run --workspace apps/client --from react --to next" />
        </div>

        <div className="mt-4 p-4 rounded-xl bg-[#080d17] border border-cyan-500/20 text-xs text-slate-300 space-y-2">
          <div className="font-mono text-cyan-300 font-bold flex items-center gap-1.5">
            <span>⚡ Polymorphic Package Management (PPME)</span>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Metamorph dynamically adapts to <strong className="text-white">npm</strong>, <strong className="text-white">pnpm</strong>, <strong className="text-white">yarn</strong>, and <strong className="text-white">bun</strong>. Dependency installs and shadow verification builds strictly respect your project lockfile, while host manifests are updated without child process leakage.
          </p>
        </div>
      </div>

      {/* Monitoring the Swarm */}
      <div className="mb-12 scroll-mt-24" id="monitoring-the-swarm">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-2">
          <span>4. Monitor Live with Web Dashboard</span>
        </h2>
        <p className="text-slate-300 mb-4 text-sm leading-relaxed">
          While the swarm executes inside the isolated <code className="text-cyan-300 font-mono">.metamorph/shadow</code> sandbox, open a new terminal window in the same folder to launch the visual monitor:
        </p>
        <CodeBlock code="metamorph ui" />
        <p className="text-slate-400 mt-3 text-xs leading-relaxed">
          This starts a local dashboard on <code className="text-cyan-300 font-mono">http://localhost:9876</code> displaying the task queue, agent concurrency, AST diffs, and real-time Mozaik event logs.
        </p>
      </div>

      {/* Review and Apply */}
      <div className="mb-12 scroll-mt-24" id="review-and-apply">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-2">
          <ShieldCheck className="text-emerald-400" size={20} />
          <span>5. Review & Apply to Git</span>
        </h2>
        <p className="text-slate-300 mb-4 text-sm leading-relaxed">
          When the build compiles cleanly in the shadow workspace, the CLI outputs your run identifier (<code className="text-cyan-300 font-mono">runId</code>). 
          Apply the changes to your repository:
        </p>
        <CodeBlock code="metamorph apply <runId> ." />
        
        <p className="text-slate-300 mt-6 mb-4 text-sm leading-relaxed">
          Metamorph creates a dedicated Git branch <code className="text-cyan-300 font-mono">metamorph/&lt;runId&gt;</code>. If you prefer to discard the shadow workspace, roll it back with:
        </p>
        <CodeBlock code="metamorph rollback <runId>" />
      </div>
    </div>
  );
};

