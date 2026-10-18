import { Link } from 'react-router-dom';
import {
  GitPullRequest,
  ExternalLink,
  Code2,
  Sparkles,
  ArrowRight,
  Heart,
  Bug,
  BookOpen,
} from 'lucide-react';
import { SEOHead } from '@/shared/ui/SEOHead';
import { Footer } from '@/widgets/Footer';
import { useMetamorphContributors, ContributorCard } from '@/entities/contributor';
import { ROUTES, PROJECT_LINKS } from '@/shared/config';

const GET_INVOLVED_WAYS = [
  {
    title: 'Report Bugs & Share Feedback',
    desc: 'If a migration fails on your codebase or an edge case isn’t handled, opening a detailed issue helps make Metamorph better for everyone.',
    icon: Bug,
    actionText: 'Open an Issue',
    actionHref: `${PROJECT_LINKS.github}/issues`,
    external: true,
  },
  {
    title: 'Test on Real Codebases',
    desc: 'Run metamorph with --dry-run or --mock on your existing projects. Testing diverse repository setups helps find blind spots early.',
    icon: Sparkles,
    actionText: 'View CLI Reference',
    actionHref: ROUTES.DOCS.CLI_REFERENCE,
    external: false,
  },
  {
    title: 'Improve Documentation & Guides',
    desc: 'Help clarify installation steps, add real-world migration recipes, or fix typos and explanations across the docs.',
    icon: BookOpen,
    actionText: 'View Docs',
    actionHref: ROUTES.DOCS.ROOT,
    external: false,
  },
  {
    title: 'Contribute Code & AST Rules',
    desc: 'Add support for new framework pairs, expand transformation rules, or improve tooling inside packages/@nikelyh.',
    icon: Code2,
    actionText: 'Read Developer Guide',
    actionHref: ROUTES.DOCS.CONTRIBUTING,
    external: false,
  },
];

export function CommunityHubPage() {
  const { humanContributors, totalContributions, isLoading, isLive } = useMetamorphContributors();

  return (
    <main className="min-h-screen bg-[#06090e] text-slate-100 overflow-x-hidden pt-16">
      <SEOHead
        title="Community & Contributors | Metamorph"
        description="Join the Metamorph open-source community. Connect on Discord, share migration feedback, and collaborate with other developers."
        keywords="metamorph community, open source, framework migration, software development, discord, contributors"
        canonicalPath="/community"
      />

      {/* Hero Section */}
      <section className="relative px-4 pt-16 sm:pt-20 pb-16 overflow-hidden border-b border-white/[0.06]">
        {/* Subtle Ambient Background Highlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/[0.03] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-5 leading-[1.12]">
            The Metamorph Community
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Metamorph is an open-source project built in the open. Whether you are running your first migration, reporting an issue, testing edge cases, or writing your first AST rule, everyone is welcome here.
          </p>

          {/* Sincere Telemetry Status Indicator */}
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/60 border border-white/10 px-4 py-2 rounded-xl w-fit mx-auto shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isLive ? 'bg-emerald-400' : 'bg-cyan-400'}`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isLive ? 'bg-emerald-500' : 'bg-cyan-500'}`} />
            </span>
            <span>Project activity synchronized from <code className="text-slate-200">yohanvillarp/metamorph</code> ({totalContributions}+ commits)</span>
          </div>
        </div>
      </section>

      {/* Discord Community Card */}
      <section className="py-16 px-4 border-b border-white/[0.06] bg-[#070b13]">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0a0f1d] border border-[#5865F2]/30 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#5865F2]/5 blur-[80px] rounded-full pointer-events-none -mr-16 -mt-16" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                  Connect on Discord
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  A place to ask questions, troubleshoot migrations together, share what you’re building, and talk about code and new ideas.
                </p>
              </div>

              <div className="flex-shrink-0 w-full md:w-auto">
                <a
                  href={PROJECT_LINKS.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#5865F2] hover:bg-[#4752c4] text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
                >
                  <img src="/discord.svg" alt="Discord" className="w-5 h-5 object-contain" />
                  <span>Join Discord</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              Contributors
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Huge thanks to everyone who has contributed code, reported bugs, tested features, or helped improve documentation:
            </p>
          </div>

          {/* Contributors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {humanContributors.map((contributor) => (
              <ContributorCard key={contributor.login} contributor={contributor} />
            ))}
            {isLoading && humanContributors.length === 0 && (
              <div className="col-span-full py-12 text-center text-slate-500 font-mono text-sm">
                Loading contributor list from GitHub...
              </div>
            )}
          </div>

          {/* Practical Ways to Get Involved */}
          <div className="mb-14">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Ways to Get Involved
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {GET_INVOLVED_WAYS.map((way) => {
                const Icon = way.icon;
                return (
                  <div
                    key={way.title}
                    className="p-6 rounded-2xl bg-[#090d18] border border-white/[0.08] hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-cyan-400 w-fit mb-4">
                        <Icon size={18} />
                      </div>
                      <h4 className="text-base font-bold text-white mb-2">{way.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed mb-5">{way.desc}</p>
                    </div>

                    <div>
                      {way.external ? (
                        <a
                          href={way.actionHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-300 hover:text-white transition-colors"
                        >
                          <span>{way.actionText}</span>
                          <ExternalLink size={12} />
                        </a>
                      ) : (
                        <Link
                          to={way.actionHref}
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-300 hover:text-white transition-colors"
                        >
                          <span>{way.actionText}</span>
                          <ArrowRight size={12} />
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Simple Link to Technical Docs */}
          <div className="p-8 rounded-2xl bg-[#090d18] border border-white/10 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                <Heart size={18} className="text-rose-400" />
                <span>Want to contribute code to the repository?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                We have a detailed step-by-step developer guide explaining how to clone the monorepo, run tests locally, and submit pull requests.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  to={ROUTES.DOCS.CONTRIBUTING}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-950 hover:bg-slate-200 text-xs font-mono font-semibold transition-all shadow-sm"
                >
                  <span>Open Developer Guide</span>
                  <ArrowRight size={13} />
                </Link>
                <a
                  href={PROJECT_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-xs font-mono font-medium transition-all"
                >
                  <GitPullRequest size={14} />
                  <span>GitHub Repository</span>
                  <ExternalLink size={12} className="text-slate-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
