import {
  GitPullRequest,
  Heart,
  ExternalLink,
  Code2,
  Sparkles,
  ShieldCheck,
  Flame,
  MessageSquare,
} from 'lucide-react';
import { useMetamorphContributors, ContributorCard } from '@/entities/contributor';
import { PROJECT_LINKS } from '@/shared/config';

const CONTRIBUTION_AREAS = [
  {
    title: 'Migration Rules & Catalogs',
    desc: 'Add new framework pairs or expand existing AST transformations across React, Next.js, Fastify, NestJS, and Hono.',
    icon: Code2,
  },
  {
    title: 'Shadow Sandbox Testing',
    desc: 'Stress-test isolation, compilation heuristics, and polymorphic package manager routines on complex repos.',
    icon: ShieldCheck,
  },
  {
    title: 'Documentation & Guides',
    desc: 'Help expand real-world migration recipes, edge-case troubleshooting, and translated community guides.',
    icon: Sparkles,
  },
];

export function CommunitySection() {
  const { humanContributors, totalContributions, isLoading, isLive } =
    useMetamorphContributors();

  return (
    <section id="community" className="scroll-mt-24 py-24 relative overflow-hidden bg-[#06090e] border-t border-cyan-500/10">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-sans">
            Powered by{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200 bg-clip-text text-transparent">
              the open-source community
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Metamorph (<code className="text-cyan-300 font-mono">@nikelyh/metamorph</code>) is an open-source initiative built and maintained in the open. Meet the contributors behind the autonomous framework migration swarm.
          </p>

          {/* Live Sync Status */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isLive ? 'bg-emerald-400' : 'bg-cyan-400'}`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isLive ? 'bg-emerald-500' : 'bg-cyan-500'}`} />
            </span>
            <span>
              Live repository telemetry from{' '}
              <a
                href="https://github.com/yohanvillarp/metamorph"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline font-semibold"
              >
                yohanvillarp/metamorph
              </a>
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">{totalContributions}+ total commits</span>
          </div>
        </div>

        {/* Dynamic Contributors Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-2">
              <Flame size={14} className="text-amber-400" />
              <span>Core Contributors &amp; Maintainers</span>
            </h3>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
              {humanContributors.length} Developers
            </span>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {humanContributors.map((contributor) => (
              <ContributorCard
                key={contributor.login}
                contributor={contributor}
                metricLabel="commits"
              />
            ))}

            {isLoading && humanContributors.length === 0 && (
              <div className="col-span-full py-8 text-center text-xs font-mono text-slate-500">
                Loading telemetry from GitHub API...
              </div>
            )}
          </div>
        </div>

        {/* Discord Community Callout Card */}
        <div className="mb-12 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#0c0f1a] via-[#090b14] to-[#07080c] border border-white/10 hover:border-[#5865F2]/40 shadow-xl relative overflow-hidden group transition-all duration-300">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#5865F2]/5 blur-[80px] rounded-full pointer-events-none -mr-16 -mt-16 group-hover:bg-[#5865F2]/10 transition-all duration-700" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#5865F2]/10 border border-[#5865F2]/25 text-[#a5b4fc] text-[11px] font-mono uppercase tracking-wider mb-3">
                <MessageSquare size={13} className="text-[#818cf8]" />
                Official Community Server
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">
                Join the Metamorph Swarm on Discord
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                Connect directly with core maintainers and framework engineers. Get real-time help with migrations, propose new AST catalogs, and share migration benchmarks.
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded-md bg-[#080a11] border border-white/10 text-slate-300 hover:text-white transition-colors">#migration-help</span>
                <span className="px-2.5 py-1 rounded-md bg-[#080a11] border border-white/10 text-slate-300 hover:text-white transition-colors">#agent-dev</span>
                <span className="px-2.5 py-1 rounded-md bg-[#080a11] border border-white/10 text-slate-300 hover:text-white transition-colors">#showcase</span>
                <span className="px-2.5 py-1 rounded-md bg-[#080a11] border border-white/10 text-slate-300 hover:text-white transition-colors">#feedback</span>
              </div>
            </div>

            <div className="flex-shrink-0 w-full md:w-auto">
              <a
                href={PROJECT_LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-5 py-3 rounded-xl bg-[#5865F2] hover:bg-[#4752c4] text-white font-semibold text-sm transition-all shadow-md hover:shadow-[0_0_20px_rgba(88,101,242,0.35)] flex items-center justify-center gap-2.5 group/btn cursor-pointer"
              >
                <img src="/discord.svg" alt="Discord" className="w-4 h-4 object-contain brightness-200 transition-transform group-hover/btn:scale-105" />
                <span>Join Discord Community</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* How to Contribute & Areas */}
        <div className="p-6 md:p-8 rounded-2xl bg-[#080d18]/90 border border-slate-800/80 backdrop-blur-md">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <GitPullRequest size={18} className="text-cyan-400" />
              <span>How You Can Contribute to Metamorph</span>
            </div>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
              GNU GPL v3 • Open Source
            </span>
          </div>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed mb-6">
            Metamorph is designed with modular hexagonal architecture. Every migration pair is a pure rule catalog in <code className="text-cyan-300 font-mono">packages/@nikelyh/domain</code>, making it simple to contribute new frameworks.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {CONTRIBUTION_AREAS.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="p-4 rounded-xl bg-[#050811] border border-slate-800/80 text-left"
                >
                  <Icon size={16} className="text-cyan-400 mb-2" />
                  <h4 className="text-xs font-bold text-white mb-1">{area.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{area.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-400">
              <Heart size={14} className="text-rose-400" />
              <span>Every PR, issue, and discussion helps make migrations fearless</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`${PROJECT_LINKS.github}/graphs/contributors`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 transition-colors flex items-center gap-1 text-slate-400"
              >
                <span>GitHub Insights</span>
                <ExternalLink size={12} />
              </a>
              <a
                href={PROJECT_LINKS.issues}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-medium transition-all flex items-center gap-1.5"
              >
                <span>Browse Issues on GitHub</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
