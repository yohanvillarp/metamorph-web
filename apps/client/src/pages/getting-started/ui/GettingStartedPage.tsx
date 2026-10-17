import { CodeBlock } from '@/shared/ui/CodeBlock';
import { PolymorphicCodeBlock } from '@/shared/ui/PolymorphicCodeBlock';
import { TechnicalCallout } from '@/shared/ui/TechnicalCallout';
import { SandboxTreeVisualizer } from '@/shared/ui/SandboxTreeVisualizer';
import { Key, ShieldCheck, PlayCircle, ExternalLink, Package, Terminal, GitBranch, Eye } from 'lucide-react';
import { SEOHead } from '@/shared/ui/SEOHead';

export const GettingStartedPage = () => {
  return (
    <div className="max-w-4xl">
      <SEOHead
        title="Installation & Quickstart | Metamorph Docs"
        description="Step-by-step engineering guide to installing Metamorph CLI, polymorphic package manager execution, deterministic mock testing, and shadow workspace sandboxing."
        keywords="metamorph quickstart, install metamorph, cli migration guide, monorepo migration, shadow workspace, pnpm, bun, yarn, mock llm"
      />

      {/* Header with High-Density Spec Tags */}
      <div className="mb-10 pb-6 border-b border-slate-800/80">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-900 border border-slate-700/80 text-cyan-400 font-mono text-[11px] font-bold tracking-wider uppercase">
            <PlayCircle size={13} className="text-cyan-400" />
            ENGINEERING WORKFLOW
          </span>
          <span className="text-[11px] font-mono text-slate-500">SPEC: QUICKSTART-V2.3</span>
          <span className="text-slate-700">•</span>
          <span className="text-[11px] font-mono text-emerald-400">STATUS: STABLE</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
          Installation &amp; Execution Pipeline
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
          Follow this reference pipeline to install the CLI across any modern JavaScript runtime, configure inference authentication, and execute zero-risk AST transformations inside an isolated shadow workspace.
        </p>
      </div>

      {/* Prerequisites Table / Specification */}
      <div className="mb-12 scroll-mt-24" id="prerequisites">
        <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          <Terminal size={18} className="text-cyan-400" />
          <span>System Prerequisites</span>
        </h2>
        <p className="text-slate-400 mb-4 text-xs sm:text-sm leading-relaxed">
          Metamorph operates natively on the host filesystem and requires minimal baseline dependencies:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#060910]">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-[#0a0f1d] text-slate-300 border-b border-slate-800">
              <tr>
                <th className="p-3">Dependency</th>
                <th className="p-3">Minimum Constraint</th>
                <th className="p-3">Architectural Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr>
                <td className="p-3 text-cyan-300 font-semibold">Node.js</td>
                <td className="p-3 font-mono">&gt;= 20.0.0 (LTS)</td>
                <td className="p-3 text-slate-400">Native <code className="text-slate-300">node:sqlite</code> persistence (<code className="text-slate-300">DatabaseSync</code>)</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-semibold">Package Manager</td>
                <td className="p-3 font-mono">npm | pnpm | yarn | bun</td>
                <td className="p-3 text-slate-400">Polymorphic package manager engine (PPME) auto-detects active lockfile</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-semibold">Git VCS</td>
                <td className="p-3 font-mono">&gt;= 2.25.0</td>
                <td className="p-3 text-slate-400">Clean branch checkout on export (<code className="text-slate-300">metamorph/&lt;runId&gt;</code>)</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-semibold">LLM Inference</td>
                <td className="p-3 font-mono">OpenAI / Anthropic / Mock</td>
                <td className="p-3 text-slate-400">Live API credentials, or zero-cost offline development via <code className="text-slate-300">--mock</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 1. Polymorphic Installation */}
      <div className="mb-12 scroll-mt-24" id="installation">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-2 mb-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Package className="text-cyan-400" size={18} />
            <span>1. CLI Installation</span>
          </h2>
          <a
            href="https://www.npmjs.com/package/@nikelyh/metamorph"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors w-fit"
          >
            <img src="/icons8-ngp.svg" alt="npm" className="w-3.5 h-3.5 object-contain" />
            <span>v2.3.0 on npm</span>
            <ExternalLink size={12} />
          </a>
        </div>
        <p className="text-slate-300 mb-4 text-xs sm:text-sm leading-relaxed">
          Install the CLI globally into your user binary path, or execute on-demand without prior installation:
        </p>

        <PolymorphicCodeBlock
          title="Global Installation"
          commands={{
            npm: 'npm install -g @nikelyh/metamorph',
            pnpm: 'pnpm add -g @nikelyh/metamorph',
            yarn: 'yarn global add @nikelyh/metamorph',
            bun: 'bun add -g @nikelyh/metamorph',
          }}
        />

        <PolymorphicCodeBlock
          title="On-Demand Execution"
          commands={{
            npm: 'npx @nikelyh/metamorph run',
            pnpm: 'pnpm dlx @nikelyh/metamorph run',
            yarn: 'yarn dlx @nikelyh/metamorph run',
            bun: 'bunx @nikelyh/metamorph run',
          }}
        />
      </div>

      {/* 2. Configure Inference Authentication & Mock Alternative */}
      <div className="mb-12 scroll-mt-24" id="api-key-configuration">
        <h2 className="text-xl font-bold text-white mb-3 border-b border-slate-800 pb-2 flex items-center gap-2">
          <Key className="text-cyan-400" size={18} />
          <span>2. Configure Inference Authentication</span>
        </h2>
        <p className="text-slate-300 mb-4 text-xs sm:text-sm leading-relaxed">
          When running live AST transformations, worker and reviewer agents require API credentials. Export them in your active terminal shell or save to your project root <code className="text-cyan-300 font-mono">.env</code>:
        </p>

        <CodeBlock 
          language="bash"
          code={`# In your project root .env
OPENAI_API_KEY=sk-proj-...

# macOS / Linux terminal export
export OPENAI_API_KEY="sk-proj-..."

# Windows PowerShell terminal export
$env:OPENAI_API_KEY="sk-proj-..."`} 
        />

        <TechnicalCallout
          type="telemetry"
          title="Deterministic Mock LLM Provider"
          badge="$0.00 OFFLINE"
          metric="ZERO CREDENTIALS"
        >
          <p>
            You can evaluate the entire Mozaik v4 swarm, verify shadow workspace compilation, and run CI/CD smoke tests without spending tokens or configuring API keys. Pass the <code className="text-cyan-300 font-mono">--mock</code> flag:
          </p>
          <div className="mt-2 font-mono text-cyan-300 bg-[#04060a] p-2 rounded border border-slate-800 text-xs">
            $ metamorph run --from express --to hono --mock
          </div>
        </TechnicalCallout>
      </div>

      {/* 3. Cascading Configuration Wizard */}
      <div className="mb-12 scroll-mt-24" id="config-setup">
        <h2 className="text-xl font-bold text-white mb-3 border-b border-slate-800 pb-2 flex items-center gap-2">
          <Terminal className="text-cyan-400" size={18} />
          <span>3. Configure Project Settings (Optional)</span>
        </h2>
        <p className="text-slate-300 mb-4 text-xs sm:text-sm leading-relaxed">
          Metamorph implements a cascading configuration resolution pipeline (<code className="text-cyan-300 font-mono text-xs">CLI flags &gt; env &gt; local .metamorphrc.json &gt; global ~/.metamorphrc.json &gt; defaults</code>). Launch the interactive setup wizard to configure persistent concurrency bounds and models:
        </p>
        <CodeBlock language="bash" code="metamorph config" />
      </div>

      {/* 4. Launching the Swarm */}
      <div className="mb-12 scroll-mt-24" id="quick-start">
        <h2 className="text-xl font-bold text-white mb-3 border-b border-slate-800 pb-2 flex items-center gap-2">
          <PlayCircle className="text-cyan-400" size={18} />
          <span>4. Run the Migration Swarm</span>
        </h2>
        <p className="text-slate-300 mb-4 text-xs sm:text-sm leading-relaxed">
          Navigate to your repository and execute Metamorph. The <strong>Project Intelligence Engine (PIE)</strong> detects your project architecture automatically and prompts for target destinations:
        </p>
        <CodeBlock language="bash" code="cd my-legacy-project\nmetamorph run" />

        <p className="text-slate-300 my-4 text-xs sm:text-sm leading-relaxed">
          You can inspect the entire migration plan statically without executing inference or writing files using <code className="text-cyan-300 font-mono">--dry-run</code>:
        </p>
        <CodeBlock 
          language="bash"
          code={`# Static plan preview: lists discovered files, rule catalogs, and package changes
metamorph run --from express --to fastify --dry-run

# Explicit execution bypassing interactive framework detection
metamorph run --from react --to next`} 
        />

        <TechnicalCallout
          type="heuristic"
          title="Monorepo Package Isolation"
          badge="TURBOREPO • PNPM • LERNA"
        >
          <p>
            When executed inside a monorepo workspace root, Metamorph maps package boundaries and lets you target specific packages directly with <code className="text-cyan-300 font-mono">--workspace &lt;pkg&gt;</code>:
          </p>
          <div className="mt-2 font-mono text-cyan-300 bg-[#04060a] p-2 rounded border border-slate-800 text-xs">
            $ metamorph run --workspace apps/web --from react --to next
          </div>
        </TechnicalCallout>
      </div>

      {/* Sandbox Isolation Visualizer Blueprint */}
      <div className="mb-12 scroll-mt-24" id="shadow-workspace-isolation">
        <h2 className="text-xl font-bold text-white mb-3 border-b border-slate-800 pb-2 flex items-center gap-2">
          <ShieldCheck className="text-emerald-400" size={18} />
          <span>5. Confinement Blueprint (Zero-Risk Guarantee)</span>
        </h2>
        <p className="text-slate-300 mb-2 text-xs sm:text-sm leading-relaxed">
          Metamorph guarantees that your working directory remains strictly untouched during the entire migration. All transformations, package installs, and compilation diagnostics are quarantined inside the shadow sandbox:
        </p>

        <SandboxTreeVisualizer runId="run-8f2c" />
      </div>

      {/* 6. Live Dashboard & Telemetry */}
      <div className="mb-12 scroll-mt-24" id="monitoring-the-swarm">
        <h2 className="text-xl font-bold text-white mb-3 border-b border-slate-800 pb-2 flex items-center gap-2">
          <Eye className="text-cyan-400" size={18} />
          <span>6. Real-Time Telemetry &amp; Shadow Diff Viewer</span>
        </h2>
        <p className="text-slate-300 mb-4 text-xs sm:text-sm leading-relaxed">
          While the swarm transforms files inside the shadow sandbox, launch the embedded React Dashboard in a secondary terminal to monitor agent concurrency, token expenditure, and inspect unified file diffs:
        </p>
        <CodeBlock language="bash" code="metamorph ui" />

        <TechnicalCallout
          type="spec"
          title="Built-in Shadow Diff Viewer"
          badge="DASHBOARD TELEMETRY"
          metric="PORT: 9876"
        >
          <p>
            The dashboard displays real-time syntax-highlighted unified diffs between your original codebase and the shadow workspace before you decide to apply changes.
          </p>
        </TechnicalCallout>
      </div>

      {/* 7. Review and Apply */}
      <div className="mb-12 scroll-mt-24" id="review-and-apply">
        <h2 className="text-xl font-bold text-white mb-3 border-b border-slate-800 pb-2 flex items-center gap-2">
          <GitBranch className="text-cyan-400" size={18} />
          <span>7. Apply Verified Migration to Git</span>
        </h2>
        <p className="text-slate-300 mb-4 text-xs sm:text-sm leading-relaxed">
          Once the verification build passes inside the sandbox, export the transformed files directly onto a clean, dedicated Git branch:
        </p>
        <CodeBlock language="bash" code="metamorph apply run-8f2c ." />
        
        <p className="text-slate-400 mt-4 text-xs leading-relaxed">
          This checks out branch <code className="text-cyan-300 font-mono">metamorph/run-8f2c</code> in your repository. Alternatively, if you wish to discard the sandbox run completely:
        </p>
        <CodeBlock language="bash" code="metamorph rollback run-8f2c" />
      </div>
    </div>
  );
};
