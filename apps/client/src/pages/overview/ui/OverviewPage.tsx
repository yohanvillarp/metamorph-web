import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/config/routes';

export const OverviewPage = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-neo-text mb-4 tracking-tight">
          Overview
        </h1>
        <p className="text-lg text-neo-text-muted mb-4">
          Metamorph is a Command Line Interface (CLI) designed to automate architectural shifts and framework migrations across modern codebases.
        </p>
        <p className="text-neo-text-muted">
          Unlike traditional codemods or static analysis tools that rely on regular expressions or Abstract Syntax Tree (AST) transformations, Metamorph utilizes artificial intelligence to process the semantic context, domain logic, and architectural patterns of your application.
        </p>
      </div>

      <div className="mb-12 scroll-mt-24" id="the-problem">
        <h2 className="text-2xl font-bold text-neo-text mb-6 border-b border-neo-border pb-2">
          The Problem
        </h2>
        <p className="text-neo-text-muted mb-4">
          Migrating an existing application to a new framework (e.g., from Express to NestJS, or React to Next.js) is a labor-intensive process. It requires engineering teams to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-neo-text-muted mb-4">
          <li>Understand the intricacies of both the legacy and the target frameworks.</li>
          <li>Manually rewrite routing, state management, and dependency injection patterns.</li>
          <li>Resolve regressions, broken imports, and structural inconsistencies.</li>
        </ul>
      </div>

      <div className="mb-12 scroll-mt-24" id="the-metamorph-solution">
        <h2 className="text-2xl font-bold text-neo-text mb-6 border-b border-neo-border pb-2">
          The Metamorph Solution
        </h2>
        <p className="text-neo-text-muted mb-6">
          Metamorph addresses migration through an automated, multi-agent orchestration approach based on the <strong className="text-white">Mozaik</strong> framework. Specialized agents work collaboratively to refactor the codebase.
        </p>

        <h3 className="text-lg font-semibold text-neo-text mb-4 uppercase tracking-wide">Core Principles</h3>
        <ul className="space-y-4 text-neo-text-muted">
          <li>
            <strong className="text-white">Multi-Agent Orchestration:</strong> The migration workload is distributed across specialized agents. Mapper agents analyze the dependency graph, Worker agents perform file-level refactoring, Reviewer agents verify semantic correctness, and Package Manager agents handle dependency upgrades.
          </li>
          <li>
            <strong className="text-white">Isolated Workspace (.metamorph/shadow):</strong> All code transformations occur in an isolated <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono text-neo-accent">.metamorph/shadow</code> environment. The original source code remains untouched until the migration is explicitly approved and applied to the working directory.
          </li>
          <li>
            <strong className="text-white">Observability:</strong> Metamorph includes a local server and a dashboard interface. Running the <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono text-neo-accent">metamorph ui</code> command allows teams to visualize the dependency graph, inspect individual file modifications, and monitor agent activity in real-time.
          </li>
          <li>
            <strong className="text-white">Hexagonal Architecture:</strong> Metamorph is built on Domain-Driven Design (DDD) principles, cleanly separating the AI migration catalogs (business rules) from the underlying file system operations and technology detectors (infrastructure).
          </li>
        </ul>
      </div>

      <div className="mb-12 scroll-mt-24" id="next-steps">
        <h2 className="text-2xl font-bold text-neo-text mb-6 border-b border-neo-border pb-2">
          Next Steps
        </h2>
        <p className="text-neo-text-muted mb-4">
          Ready to modernize your codebases?
        </p>
        <ul className="list-disc pl-6 space-y-2 text-neo-text-muted">
          <li>
            Proceed to the <Link to={ROUTES.DOCS.GETTING_STARTED} className="text-neo-accent hover:underline">Getting Started</Link> guide to install the CLI.
          </li>
          <li>
            View the <Link to={ROUTES.DOCS.MIGRATIONS.BACKEND} className="text-neo-accent hover:underline">Supported Migrations</Link> to see which architectural shifts are currently available.
          </li>
        </ul>
      </div>
    </div>
  );
};
