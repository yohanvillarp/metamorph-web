import { Link } from 'react-router-dom';
import {
  GitPullRequest,
  ExternalLink,
  Terminal,
  Layers,
  Shield,
  ArrowRight,
  CheckCircle2,
  Users,
} from 'lucide-react';
import { SEOHead } from '@/shared/ui/SEOHead';
import { CodeBlock } from '@/shared/ui/CodeBlock';
import { ROUTES, PROJECT_LINKS } from '@/shared/config';

export const CommunityPage = () => {
  return (
    <div className="max-w-4xl">
      <SEOHead
        title="Developer Contributing Guide | Metamorph Docs"
        description="Comprehensive developer guide to contributing to @nikelyh/metamorph: local monorepo setup, adding migration target catalogs, testing in shadow workspaces, and pull request standards."
        keywords="contribute to metamorph, developer guide, open source migration, framework codemod contribution, mozaik v4 development, ast catalogs"
        canonicalPath="/docs/contributing"
      />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
          Contributing to Metamorph
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Metamorph is built and maintained in the open. This guide explains how to set up the monorepo locally, implement new framework migration catalogs in <code className="text-cyan-300 font-mono">@nikelyh/domain</code>, verify changes inside shadow workspaces, and submit pull requests.
        </p>
      </div>

      {/* Community Hub Reference Callout Banner */}
      <div className="mb-10 p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-cyan-950/40 border border-cyan-500/30 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2.5">
          <Users size={16} className="text-cyan-400" />
          <span className="text-xs text-slate-300">
            Looking for Discord channels, live maintainer chat, and the Contributors Hall of Fame?
          </span>
        </div>
        <Link
          to={ROUTES.COMMUNITY}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-300 hover:text-white transition-colors"
        >
          <span>Visit Community Hub</span>
          <ArrowRight size={13} />
        </Link>
      </div>

      {/* 1. Core Architectural Invariants */}
      <div className="mb-12 scroll-mt-24" id="invariants">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-2">
          <Shield className="text-cyan-400" size={22} />
          <span>Core Invariants (Never Violate)</span>
        </h2>
        <p className="text-slate-300 mb-4 leading-relaxed text-sm">
          Every contribution must uphold the core architectural invariants of Metamorph:
        </p>

        <div className="space-y-3 mb-6">
          <div className="p-4 rounded-xl bg-[#080d17] border border-slate-800">
            <h3 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-cyan-400" />
              <span>Zero-Risk Shadow Workspace Confinement</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Never mutate user source code directly during an active migration. All transformations, dependency installs, and build checks take place strictly inside <code className="text-cyan-300 font-mono">.metamorph/shadow/&lt;runId&gt;</code>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#080d17] border border-slate-800">
            <h3 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-cyan-400" />
              <span>Zero I/O in @nikelyh/domain</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              The domain package is pure and deterministic. It is strictly prohibited from importing filesystem modules (<code className="text-cyan-300 font-mono">node:fs</code>), databases (<code className="text-cyan-300 font-mono">node:sqlite</code>), or external network protocols.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#080d17] border border-slate-800">
            <h3 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-cyan-400" />
              <span>Ephemeral Participant Lifecycles</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              All dynamic agent participants (<code className="text-cyan-300 font-mono">Worker</code>, <code className="text-cyan-300 font-mono">Reviewer</code>) must execute <code className="text-cyan-300 font-mono">await participant.leave()</code> in <code className="text-cyan-300 font-mono">finally</code> blocks to guarantee zero memory leaks.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Monorepo Setup */}
      <div className="mb-12 scroll-mt-24" id="local-setup">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-2">
          <Terminal className="text-cyan-400" size={22} />
          <span>Local Monorepo Setup</span>
        </h2>
        <p className="text-slate-300 mb-4 leading-relaxed text-sm">
          Metamorph is managed as an npm monorepo with Turborepo. Node.js <code className="text-cyan-300 font-mono">&gt;= 22.5.0</code> and <code className="text-cyan-300 font-mono">npm@10.8.2</code> are required.
        </p>

        <div className="space-y-4 mb-6">
          <div>
            <h3 className="text-xs font-mono uppercase text-slate-400 mb-2">1. Clone &amp; Install Dependencies</h3>
            <CodeBlock code={`git clone https://github.com/yohanvillarp/metamorph.git\ncd metamorph\nnpm install`} />
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase text-slate-400 mb-2">2. Compile &amp; Typecheck Workspace</h3>
            <CodeBlock code={`npm run build\nnpm run typecheck`} />
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase text-slate-400 mb-2">3. Execute the Full Automated Test Suite</h3>
            <CodeBlock code="npm run test" />
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase text-slate-400 mb-2">4. Run CLI Directly from Source</h3>
            <CodeBlock code="npm --prefix packages/@nikelyh/cli run dev -- run ../../scratch/playground --from react --to next" />
          </div>
        </div>
      </div>

      {/* 3. Adding Migration Target */}
      <div className="mb-12 scroll-mt-24" id="adding-migration-target">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-2">
          <Layers className="text-cyan-400" size={22} />
          <span>Contributing New Migration Pairs</span>
        </h2>
        <p className="text-slate-300 mb-4 leading-relaxed text-sm">
          To contribute support for a new framework pair (e.g., <code className="text-cyan-300 font-mono">vue</code> to <code className="text-cyan-300 font-mono">svelte</code>, or <code className="text-cyan-300 font-mono">express</code> to <code className="text-cyan-300 font-mono">hono</code>):
        </p>

        <div className="space-y-4 text-xs">
          <div className="p-4 rounded-xl bg-[#080d17] border border-slate-800">
            <h3 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/40 flex items-center justify-center font-mono text-xs">1</span>
              <span>Define the Rule Catalog in Domain</span>
            </h3>
            <p className="text-slate-400">
              Create the rule catalog under <code className="text-cyan-300 font-mono">packages/@nikelyh/domain/src/catalogs/pairs/</code>. Catalogs specify dependency substitutions, script changes, and structural expectations.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#080d17] border border-slate-800">
            <h3 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/40 flex items-center justify-center font-mono text-xs">2</span>
              <span>Implement the Target Validation Plugin</span>
            </h3>
            <p className="text-slate-400">
              Register a <code className="text-cyan-300 font-mono">TargetValidationPlugin</code> in <code className="text-cyan-300 font-mono">packages/@nikelyh/application/src/migration/plugins/</code> with hooks for file hinting and shadow build verification.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#080d17] border border-slate-800">
            <h3 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/40 flex items-center justify-center font-mono text-xs">3</span>
              <span>Verify with Automated Test Suite</span>
            </h3>
            <p className="text-slate-400 mb-2">
              Run monorepo validation to guarantee zero regressions:
            </p>
            <CodeBlock code="npm run typecheck && npm run test" />
          </div>
        </div>
      </div>

      {/* 4. PR Guidelines */}
      <div className="mb-12 scroll-mt-24" id="pull-requests">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-2">
          <GitPullRequest className="text-cyan-400" size={22} />
          <span>Pull Request Standards</span>
        </h2>
        <p className="text-slate-300 mb-4 leading-relaxed text-sm">
          All contributions go through automated CI matrix verification on Node 20 and Node 22. When preparing your PR:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-slate-400 mb-6 text-xs md:text-sm">
          <li><strong>Select the PR Template:</strong> Use one of the templates in <code className="text-cyan-300 font-mono">.github/PULL_REQUEST_TEMPLATE/</code> (feature, bugfix, migration_target, or architecture).</li>
          <li><strong>Strict Zero-I/O in Domain:</strong> Never import <code className="text-cyan-300 font-mono">fs</code>, <code className="text-cyan-300 font-mono">node:sqlite</code>, or HTTP modules inside <code className="text-cyan-300 font-mono">packages/@nikelyh/domain</code>.</li>
          <li><strong>Participant Disposal:</strong> Dynamic agents (<code className="text-cyan-300 font-mono">Worker</code>, <code className="text-cyan-300 font-mono">Reviewer</code>) must always execute <code className="text-cyan-300 font-mono">await participant.leave()</code> in finally blocks.</li>
          <li><strong>Conventional Commits:</strong> Format commit messages cleanly (<code className="text-cyan-300 font-mono">feat:</code>, <code className="text-cyan-300 font-mono">fix:</code>, <code className="text-cyan-300 font-mono">docs:</code>).</li>
        </ul>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={PROJECT_LINKS.issues}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-medium text-xs font-mono transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Issues on GitHub</span>
            <ExternalLink size={14} />
          </a>
          <Link
            to={ROUTES.DOCS.CLI_REFERENCE}
            className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-mono transition-all"
          >
            View CLI Reference
          </Link>
        </div>
      </div>
    </div>
  );
};
