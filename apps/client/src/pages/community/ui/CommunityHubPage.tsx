import { Link } from 'react-router-dom';
import {
  Users,
  GitPullRequest,
  ExternalLink,
  Code2,
  Sparkles,
  ShieldCheck,
  MessageSquare,
  ArrowRight,
  Heart,
  Cpu,
  Layers,
  Terminal,
} from 'lucide-react';
import { SEOHead } from '@/shared/ui/SEOHead';
import { Footer } from '@/widgets/Footer';
import { useMetamorphContributors, ContributorCard } from '@/entities/contributor';
import { ROUTES, PROJECT_LINKS } from '@/shared/config';

const CONTRIBUTION_TRACKS = [
  {
    title: 'Migration Catalogs & AST Rules',
    desc: 'Add new framework pairs or expand AST transformations in @nikelyh/domain across React, Next.js, Vue, Svelte, Fastify, NestJS, and Hono.',
    icon: Code2,
    badge: 'Core Engine',
  },
  {
    title: 'Shadow Sandbox Testing',
    desc: 'Stress-test isolation, compilation heuristics, and polymorphic package manager routines on complex real-world repositories.',
    icon: ShieldCheck,
    badge: 'Reliability',
  },
  {
    title: 'Documentation & Real-World Recipes',
    desc: 'Expand migration playbooks, edge-case troubleshooting, architectural whitepapers, and translated community guides.',
    icon: Sparkles,
    badge: 'Docs & Guides',
  },
];

const ECOSYSTEM_METRICS = [
  { label: 'Swarm Agents', value: '8 Agents', sub: 'Orchestrated via Mozaik v4', icon: Cpu },
  { label: 'Supported Frameworks', value: '9 Targets', sub: 'Frontend & Backend Matrix', icon: Layers },
  { label: 'Sandbox Isolation', value: '100% Risk-Free', sub: '.metamorph/shadow/<runId>', icon: ShieldCheck },
  { label: 'Offline Execution', value: '$0.00 Tokens', sub: 'Deterministic Mock LLM', icon: Terminal },
];

export function CommunityHubPage() {
  const { humanContributors, totalContributions, isLoading, isLive } = useMetamorphContributors();

  return (
    <main className="min-h-screen bg-[#06090e] text-slate-100 overflow-x-hidden pt-16">
      <SEOHead
        title="Community Hub & Contributors | Metamorph"
        description="Join the official Metamorph developer community. Connect on Discord, explore contributor telemetry, and help build the autonomous framework migration swarm."
        keywords="metamorph community, open source contributors, framework migration, ai codemod, mozaik v4 discord, software migration swarm"
        canonicalPath="/community"
      />

      {/* Hero Section */}
      <section className="relative px-4 pt-16 sm:pt-20 pb-16 overflow-hidden border-b border-white/[0.06]">
        {/* Subtle Ambient Background Highlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/[0.04] blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-6">
            <Users size={14} className="text-cyan-400" />
            <span>Open Source Ecosystem</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
            Where Swarm Intelligence Meets <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
              the Open-Source Community.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Metamorph (<code className="text-cyan-300 font-mono">@nikelyh/metamorph</code>) is engineered in the open. Connect with framework engineers, propose AST migration rules, and help shape autonomous software evolution.
          </p>

          {/* Telemetry Status Indicator */}
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/60 border border-white/10 px-4 py-2 rounded-xl w-fit mx-auto mb-10 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isLive ? 'bg-emerald-400' : 'bg-cyan-400'}`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isLive ? 'bg-emerald-500' : 'bg-cyan-500'}`} />
            </span>
            <span>Live telemetry synchronized from <code className="text-slate-200">yohanvillarp/metamorph</code> ({totalContributions}+ commits)</span>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
            {ECOSYSTEM_METRICS.map((metric) => {
              const Icon = metric.icon;
              return (
                <div 
                  key={metric.label}
                  className="p-4 rounded-xl bg-[#090d18] border border-white/[0.08] hover:border-cyan-500/30 transition-colors"
                >
                  <Icon size={18} className="text-cyan-400 mb-2" />
                  <div className="text-lg font-bold text-white tracking-tight">{metric.value}</div>
                  <div className="text-xs font-medium text-slate-300">{metric.label}</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">{metric.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Discord Live Swarm Server Section */}
      <section className="py-16 px-4 border-b border-white/[0.06] bg-[#070b13]">
        <div className="max-w-5xl mx-auto">
          <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#0c1224] via-[#090e1c] to-[#070b14] border border-[#5865F2]/30 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#5865F2]/10 blur-[100px] rounded-full pointer-events-none -mr-20 -mt-20" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5865F2]/15 border border-[#5865F2]/30 text-[#a5b4fc] text-xs font-mono uppercase tracking-wider mb-4">
                  <MessageSquare size={13} className="text-[#818cf8]" />
                  <span>Real-Time Maintainer Chat</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                  Join the Metamorph Swarm on Discord
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Chat directly with core maintainers and framework migration engineers. Get real-time debugging help, debate AST transpilation RFCs, and share real-world migration benchmarks.
                </p>
                
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
                  <span className="px-3 py-1 rounded-lg bg-slate-900/90 border border-white/10 hover:border-cyan-500/40 transition-colors">#migration-help</span>
                  <span className="px-3 py-1 rounded-lg bg-slate-900/90 border border-white/10 hover:border-cyan-500/40 transition-colors">#agent-dev</span>
                  <span className="px-3 py-1 rounded-lg bg-slate-900/90 border border-white/10 hover:border-cyan-500/40 transition-colors">#ast-rules</span>
                  <span className="px-3 py-1 rounded-lg bg-slate-900/90 border border-white/10 hover:border-cyan-500/40 transition-colors">#showcase</span>
                </div>
              </div>

              <div className="flex-shrink-0 w-full md:w-auto">
                <a
                  href={PROJECT_LINKS.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#5865F2] hover:bg-[#4752c4] text-white font-semibold text-sm transition-all shadow-lg hover:shadow-[#5865F2]/25 cursor-pointer"
                >
                  <img src="/discord.svg" alt="Discord" className="w-5 h-5 object-contain" />
                  <span>Join Discord Community</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contributors Hall of Fame */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
              <Heart size={13} className="text-cyan-400" />
              <span>Contributors Hall of Fame</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Built by Open-Source Builders
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Every AST rule, bug fix, test case, and documentation page is made possible by our community contributors.
            </p>
          </div>

          {/* Contributors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {humanContributors.map((contributor) => (
              <ContributorCard key={contributor.login} contributor={contributor} />
            ))}
            {isLoading && humanContributors.length === 0 && (
              <div className="col-span-full py-12 text-center text-slate-500 font-mono text-sm">
                Synchronizing contributor records from GitHub API...
              </div>
            )}
          </div>

          {/* Contribution Tracks */}
          <div className="mb-14">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Active Contribution Tracks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CONTRIBUTION_TRACKS.map((track) => {
                const Icon = track.icon;
                return (
                  <div
                    key={track.title}
                    className="p-6 rounded-2xl bg-[#090d18] border border-white/[0.08] hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                          <Icon size={18} />
                        </div>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-slate-300">
                          {track.badge}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white mb-2">{track.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">{track.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Developer CTA to Technical Docs */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0a1224] via-[#090e1a] to-[#0a1224] border border-cyan-500/20 text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Ready to contribute code or AST catalogs?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Check out our comprehensive technical guide detailing local monorepo setup, test suites in shadow workspaces, and PR submission standards.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  to={ROUTES.DOCS.CONTRIBUTING}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-950 hover:bg-slate-200 text-xs font-mono font-semibold transition-all shadow-sm cursor-pointer"
                >
                  <span>Read Developer Contributing Guide</span>
                  <ArrowRight size={13} />
                </Link>
                <a
                  href={`${PROJECT_LINKS.github}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-xs font-mono font-medium transition-all cursor-pointer"
                >
                  <GitPullRequest size={14} />
                  <span>Browse Open Issues</span>
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
