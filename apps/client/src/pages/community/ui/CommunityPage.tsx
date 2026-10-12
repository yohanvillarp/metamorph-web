import { Link } from 'react-router-dom';
import {
  Users,
  GitPullRequest,
  ExternalLink,
  Terminal,
  CheckCircle2,
  Layers,
  Sparkles,
} from 'lucide-react';
import { SEOHead } from '@/shared/ui/SEOHead';
import { CodeBlock } from '@/shared/ui/CodeBlock';
import { useMetamorphContributors } from '@/shared/lib/useMetamorphContributors';
import { CONTRIBUTOR_PROFILES } from '@/shared/config/contributors';
import { ROUTES } from '@/shared/config/routes';

export const CommunityPage = () => {
  const { humanContributors, botContributors, totalContributions, isLive } =
    useMetamorphContributors();

  return (
    <div className="max-w-4xl">
      <SEOHead
        title="Community & Contributing Guide | Metamorph Docs"
        description="Comprehensive developer guide to contributing to @nikelyh/metamorph: local monorepo setup, adding migration target catalogs, testing in shadow workspaces, and the Contributors Hall of Fame."
        keywords="contribute to metamorph, metamorph community, open source migration, framework codemod contribution, mozaik v4 development"
        canonicalPath="/docs/community"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: 'Metamorph Community & Contributing Guide',
          description:
            'How to contribute new framework targets, tests, and documentation to @nikelyh/metamorph.',
          author: {
            '@type': 'Person',
            name: 'Yohan Nikel Villar Presentación',
            alternateName: ['Yohan Villar', 'Yohan Nikel Villar', 'nikelyh', 'yohanvillarp'],
            url: 'https://github.com/yohanvillarp',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Metamorph',
            url: 'https://metamorph.nikelyh.tech',
          },
        }}
      />

      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
          <Users size={14} className="text-cyan-400" />
          Community &amp; Open Source
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
          Community &amp; Contributing
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed mb-4">
          Metamorph is built entirely in the open. We welcome bug reports, feature requests, documentation improvements, and pull requests to expand framework migration catalogs.
        </p>
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1.5 rounded-lg w-fit">
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isLive ? 'bg-emerald-400' : 'bg-cyan-400'}`} />
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isLive ? 'bg-emerald-500' : 'bg-cyan-500'}`} />
          </span>
          <span>Core telemetry synchronized from yohanvillarp/metamorph ({totalContributions}+ commits)</span>
        </div>
      </div>

      {/* 1. Contributors Hall of Fame */}
      <div className="mb-12 scroll-mt-24" id="hall-of-fame">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-2">
          <Sparkles className="text-cyan-400" size={22} />
          <span>Contributors Hall of Fame</span>
        </h2>
        <p className="text-slate-300 mb-6 leading-relaxed">
          The developers who have written code, designed architecture, and contributed to the <code className="text-cyan-300 font-mono">@nikelyh/metamorph</code> core engine:
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {humanContributors.map((contributor) => {
            const profile = CONTRIBUTOR_PROFILES[contributor.login.toLowerCase()];
            const isCreator = contributor.login.toLowerCase() === 'yohanvillarp';
            const roleName = profile?.role || (isCreator ? 'Lead Architect' : 'Contributor');
            const badgeName = profile?.badge || (isCreator ? 'Creator' : 'Contributor');
            const displayName = profile?.name || `@${contributor.login}`;

            return (
              <a
                key={contributor.login}
                href={contributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-xl border backdrop-blur-md transition-all flex items-center gap-3.5 group ${
                  isCreator
                    ? 'bg-[#0a1224]/90 border-cyan-500/40 shadow-[0_0_20px_rgba(0,242,254,0.1)]'
                    : 'bg-[#080d18]/90 border-slate-800/80 hover:border-cyan-500/30'
                }`}
              >
                <img
                  src={contributor.avatar_url}
                  alt={contributor.login}
                  className="w-12 h-12 rounded-full border border-cyan-400/40 p-0.5 object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-bold text-white text-sm truncate group-hover:text-cyan-300 transition-colors">
                      {displayName}
                    </span>
                    {isCreator ? (
                      <span className="text-[10px] font-mono px-2 py-0.2 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                        {badgeName}
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                        {badgeName}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 font-mono truncate">{roleName}</p>
                  <p className="text-xs font-mono text-cyan-400/80 mt-0.5 flex items-center gap-1">
                    <CheckCircle2 size={11} className="text-cyan-400" />
                    <span>{contributor.contributions} contributions</span>
                  </p>
                </div>
                <ExternalLink
                  size={14}
                  className="text-slate-600 group-hover:text-cyan-300 transition-colors flex-shrink-0"
                />
              </a>
            );
          })}
        </div>

        {botContributors.length > 0 && (
          <div className="p-3.5 rounded-xl bg-[#060a14] border border-slate-800/60 flex items-center justify-between flex-wrap gap-2 text-xs font-mono text-slate-400">
            <span>Automated Bot Partners:</span>
            <div className="flex items-center gap-2 flex-wrap">
              {botContributors.map((b) => (
                <a
                  key={b.login}
                  href={b.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  @{b.login} ({b.contributions})
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 2. Development Setup */}
      <div className="mb-12 scroll-mt-24" id="development-setup">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-2">
          <Terminal className="text-cyan-400" size={22} />
          <span>Local Development Setup</span>
        </h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          The core repository uses <strong>Turborepo</strong> with npm workspaces. Clone the repository and initialize dependencies:
        </p>

        <CodeBlock
          code={`# Clone the core engine repository
git clone https://github.com/yohanvillarp/metamorph.git
cd metamorph

# Install monorepo dependencies
npm install

# Build all packages (@nikelyh/domain, application, infrastructure, cli, dashboard)
npm run build`}
        />

        <div className="mt-4 p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 text-xs text-slate-300 leading-relaxed">
          <strong className="text-cyan-300">Monorepo Structure:</strong>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-400">
            <li><code className="text-cyan-300 font-mono">packages/@nikelyh/domain</code>: Pure entities and rules (Zero I/O, zero external dependencies).</li>
            <li><code className="text-cyan-300 font-mono">packages/@nikelyh/application</code>: Mozaik v4 agent handlers and ConcurrencyQueue.</li>
            <li><code className="text-cyan-300 font-mono">packages/@nikelyh/infrastructure</code>: SQLite persistence, ShadowWorkspace, and ts-morph AST adapters.</li>
            <li><code className="text-cyan-300 font-mono">packages/@nikelyh/cli</code>: Commander CLI entry points and Ora terminal presenters.</li>
          </ul>
        </div>
      </div>

      {/* 3. Adding Migration Target */}
      <div className="mb-12 scroll-mt-24" id="adding-migration-target">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-2">
          <Layers className="text-cyan-400" size={22} />
          <span>Contributing New Migration Pairs</span>
        </h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          To contribute support for a new framework pair (e.g., <code className="text-cyan-300 font-mono">vue</code> to <code className="text-cyan-300 font-mono">react</code>, or <code className="text-cyan-300 font-mono">koa</code> to <code className="text-cyan-300 font-mono">fastify</code>):
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
        <p className="text-slate-300 mb-4 leading-relaxed">
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
            href="https://github.com/yohanvillarp/metamorph/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-medium text-xs font-mono transition-all flex items-center gap-2"
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
