import { motion } from 'framer-motion';
import { Users, GitPullRequest, Heart, ExternalLink, Code2, Sparkles, ShieldCheck } from 'lucide-react';

interface Contributor {
  name: string;
  role: string;
  handle: string;
  avatarUrl: string;
  githubUrl: string;
  badge: string;
}

const FEATURED_CONTRIBUTORS: Contributor[] = [
  {
    name: 'Yohan Villar',
    role: 'Lead Architect & Creator',
    handle: '@yohanvillarp',
    avatarUrl: 'https://github.com/yohanvillarp.png',
    githubUrl: 'https://github.com/yohanvillarp',
    badge: 'Creator',
  },
];

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
  return (
    <section className="py-24 relative overflow-hidden bg-[#06090e] border-t border-cyan-500/10">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Users size={14} className="text-cyan-400" />
            Open Source & Community
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-sans">
            Built by engineers &amp;{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200 bg-clip-text text-transparent">
              autonomous agents
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Metamorph is a transparent, community-driven initiative. Join the developers and system architects shaping the next generation of automated software migration.
          </p>
        </div>

        {/* Featured Contributors Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Main Creator Card */}
          {FEATURED_CONTRIBUTORS.map((contributor) => (
            <motion.div
              key={contributor.handle}
              whileHover={{ y: -4 }}
              className="md:col-span-1 p-6 rounded-2xl bg-[#080d18]/90 border border-cyan-500/20 backdrop-blur-md relative overflow-hidden shadow-[0_0_30px_rgba(0,242,254,0.06)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={contributor.avatarUrl}
                  alt={contributor.name}
                  className="w-14 h-14 rounded-full border-2 border-cyan-400/40 p-0.5 object-cover"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-white text-base">{contributor.name}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                      {contributor.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono">{contributor.handle}</p>
                  <p className="text-xs text-cyan-400/90 mt-0.5">{contributor.role}</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Systems architect driving the Mozaik v4 blackboard orchestrator, Project Intelligence Engine (PIE), and polymorphic package manager engine.
              </p>
              <a
                href={contributor.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                <span>View GitHub Profile</span>
                <ExternalLink size={12} />
              </a>
            </motion.div>
          ))}

          {/* Open Collaboration Card */}
          <div className="md:col-span-2 p-6 rounded-2xl bg-[#080d18]/90 border border-slate-800/80 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-slate-200 font-semibold text-sm">
                  <GitPullRequest size={16} className="text-cyan-400" />
                  <span>Join the Open-Source Swarm</span>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                  MIT Licensed
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-5">
                Whether you want to add support for a new framework target, optimize AST transformations with ts-morph, or improve documentation, every contribution accelerates automated modernization for everyone.
              </p>

              {/* Contribution Areas Pills */}
              <div className="grid sm:grid-cols-3 gap-3 mb-4">
                {CONTRIBUTION_AREAS.map((area) => {
                  const Icon = area.icon;
                  return (
                    <div
                      key={area.title}
                      className="p-3 rounded-xl bg-[#050811] border border-slate-800/80 text-left"
                    >
                      <Icon size={14} className="text-cyan-400 mb-1.5" />
                      <h4 className="text-xs font-bold text-white mb-1">{area.title}</h4>
                      <p className="text-[11px] text-slate-400 leading-tight">{area.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-400">
                <Heart size={14} className="text-rose-400" />
                <span>Contributions of all sizes are welcome</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/yohanvillarp/metamorph/graphs/contributors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1"
                >
                  <span>All Contributors</span>
                  <ExternalLink size={12} />
                </a>
                <a
                  href="https://github.com/yohanvillarp/metamorph/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-medium transition-all flex items-center gap-1.5"
                >
                  <span>Contribute on GitHub</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
