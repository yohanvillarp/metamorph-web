import { motion } from 'framer-motion';
import {
  Users,
  GitPullRequest,
  Heart,
  ExternalLink,
  Code2,
  Sparkles,
  ShieldCheck,
  Bot,
  Flame,
  CheckCircle2,
} from 'lucide-react';
import { useMetamorphContributors } from '@/shared/lib/useMetamorphContributors';
import { CONTRIBUTOR_PROFILES } from '@/shared/config/contributors';

const CONTRIBUTION_AREAS = [
  {
    title: 'Migration Rules & Catalogs',
    desc: 'Add new framework pairs or expand existing AST transformations across React, Next.js, Fastify, and NestJS.',
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
  const { humanContributors, botContributors, totalContributions, isLoading, isLive } =
    useMetamorphContributors();

  return (
    <section id="community" className="scroll-mt-24 py-24 relative overflow-hidden bg-[#06090e] border-t border-cyan-500/10">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Users size={14} className="text-cyan-400" />
            Metamorph Core Ecosystem
          </div>
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
            {humanContributors.map((contributor) => {
              const profile = CONTRIBUTOR_PROFILES[contributor.login.toLowerCase()];
              const isCreator = contributor.login.toLowerCase() === 'yohanvillarp';
              const roleName = profile?.role || (isCreator ? 'Lead Architect' : 'Contributor');
              const badgeName = profile?.badge || (isCreator ? 'Creator' : 'Contributor');
              const displayName = profile?.name || `@${contributor.login}`;

              return (
                <motion.a
                  key={contributor.login}
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className={`p-4 rounded-xl border backdrop-blur-md transition-all flex items-center gap-3.5 group relative overflow-hidden ${
                    isCreator
                      ? 'bg-[#0a1224]/90 border-cyan-500/40 shadow-[0_0_20px_rgba(0,242,254,0.1)]'
                      : 'bg-[#080d18]/90 border-slate-800/80 hover:border-cyan-500/30 hover:bg-[#0b1324]/80'
                  }`}
                >
                  <img
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    className="w-12 h-12 rounded-full border border-cyan-400/40 p-0.5 object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
                    loading="lazy"
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
                      <span>{contributor.contributions} commits</span>
                    </p>
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-slate-600 group-hover:text-cyan-300 transition-colors flex-shrink-0 ml-1"
                  />
                </motion.a>
              );
            })}

            {isLoading && humanContributors.length === 0 && (
              <div className="col-span-full py-8 text-center text-xs font-mono text-slate-500">
                Loading telemetry from GitHub API...
              </div>
            )}
          </div>
        </div>

        {/* Automated Swarm & Bot Contributors */}
        {botContributors.length > 0 && (
          <div className="mb-12 p-4 rounded-xl bg-[#060a14] border border-slate-800/60 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <Bot size={16} className="text-cyan-400" />
              <span className="text-xs font-mono text-slate-300">
                Automated Dependencies &amp; Bot Partners:
              </span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {botContributors.map((bot) => (
                <a
                  key={bot.login}
                  href={bot.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  <img src={bot.avatar_url} alt={bot.login} className="w-3.5 h-3.5 rounded-full" />
                  <span>{bot.login}</span>
                  <span className="text-slate-500">({bot.contributions})</span>
                </a>
              ))}
            </div>
          </div>
        )}

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
                href="https://github.com/yohanvillarp/metamorph/graphs/contributors"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 transition-colors flex items-center gap-1 text-slate-400"
              >
                <span>GitHub Insights</span>
                <ExternalLink size={12} />
              </a>
              <a
                href="https://github.com/yohanvillarp/metamorph/issues"
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
