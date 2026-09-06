import { CodeBlock } from '@/shared/ui/CodeBlock';

export const GettingStartedPage = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-neo-text mb-4 tracking-tight">
          Getting Started
        </h1>
        <p className="text-lg text-neo-text-muted">
          Welcome to Metamorph. Follow this guide to install the CLI, start the local dashboard, and begin migrating your applications securely.
        </p>
      </div>

      <div className="mb-12 scroll-mt-24" id="installation">
        <h2 className="text-2xl font-bold text-neo-text mb-6 border-b border-neo-border pb-2">
          Installation
        </h2>
        <p className="text-neo-text-muted mb-4">
          Install the Metamorph CLI globally using Node Package Manager (NPM):
        </p>
        <CodeBlock code="npm install -g @nikelyh/metamorph" />
      </div>

      <div className="mb-12 scroll-mt-24" id="quick-start">
        <h2 className="text-2xl font-bold text-neo-text mb-6 border-b border-neo-border pb-2">
          Quick Start
        </h2>
        <p className="text-neo-text-muted mb-4">
          Navigate to your legacy project directory and start the migration process:
        </p>
        <CodeBlock code="cd my-legacy-project\nmetamorph run" />
        
        <p className="text-neo-text-muted mb-4">
          Metamorph will automatically detect your current technology stack (e.g., Express, React) and prompt you to select a target framework. You can also bypass the interactive prompt by specifying the source directly:
        </p>
        <CodeBlock code="metamorph run --from express" />
      </div>

      <div className="mb-12 scroll-mt-24" id="monitoring-the-swarm">
        <h2 className="text-2xl font-bold text-neo-text mb-6 border-b border-neo-border pb-2">
          Monitoring the Swarm
        </h2>
        <p className="text-neo-text-muted mb-4">
          Once the migration initializes, Metamorph orchestrates a swarm of specialized autonomous agents that work in the background. Every modification occurs safely inside an isolated <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono text-neo-accent">.metamorph/shadow</code> workspace, ensuring your original code remains completely untouched.
        </p>
        <p className="text-neo-text-muted mb-4">
          To monitor the agents in real-time, open a new terminal tab in the same project directory and start the local server:
        </p>
        <CodeBlock code="metamorph ui" />
        <p className="text-neo-text-muted mt-2">
          This will launch a local dashboard interface in your default browser where you can visualize the dependency graph, inspect individual file transformations, and track the overall progress.
        </p>
      </div>

      <div className="mb-12 scroll-mt-24" id="review-and-apply">
        <h2 className="text-2xl font-bold text-neo-text mb-6 border-b border-neo-border pb-2">
          Review and Apply
        </h2>
        <p className="text-neo-text-muted mb-4">
          After the agents finish processing the shadow workspace, the CLI will output a unique run identifier (<code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono text-neo-accent">runId</code>). You can review the proposed changes and explicitly apply them to your working directory. Metamorph will automatically create a new Git branch to ensure the transition is fully reversible.
        </p>
        <CodeBlock code="metamorph apply <runId> ." />
        
        <p className="text-neo-text-muted mt-6 mb-4">
          If you prefer to discard the changes and clean up the shadow workspace, you can safely use the rollback command:
        </p>
        <CodeBlock code="metamorph rollback <runId>" />
      </div>
    </div>
  );
};
