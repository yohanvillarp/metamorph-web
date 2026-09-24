import { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/shared/ui/GlassCard';
import { ArrowRight, ArrowRightLeft, Layers } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { SUPPORTED_MIGRATIONS, TECH_METADATA } from '@/entities/migration';

type MigrationData = {
  from: { id: string; name: string; icon: string };
  to: { id: string; name: string; icon: string };
  isBidirectional: boolean;
  isFrontend: boolean;
  targetColorClass: string;
};

function generateAllMigrations(): MigrationData[] {
  const migrations: MigrationData[] = [];
  const processedPairs = new Set<string>();

  for (const [sourceId, targets] of Object.entries(SUPPORTED_MIGRATIONS)) {
    const sourceTech = TECH_METADATA[sourceId];
    if (!sourceTech) continue;

    for (const targetId of targets) {
      const targetTech = TECH_METADATA[targetId];
      if (!targetTech) continue;

      const pairKey1 = `${sourceId}-${targetId}`;
      const pairKey2 = `${targetId}-${sourceId}`;

      if (processedPairs.has(pairKey1) || processedPairs.has(pairKey2)) {
        continue;
      }

      const isBidirectional = SUPPORTED_MIGRATIONS[targetId]?.includes(sourceId) || false;
      
      migrations.push({
        from: { id: sourceTech.id, name: sourceTech.name, icon: sourceTech.icon },
        to: { id: targetTech.id, name: targetTech.name, icon: targetTech.icon },
        isBidirectional,
        isFrontend: sourceTech.isFrontend,
        targetColorClass: targetTech.targetColorClass,
      });

      processedPairs.add(pairKey1);
      processedPairs.add(pairKey2);
    }
  }

  return migrations;
}

const allMigrations = generateAllMigrations();

function MigrationCard({ mig, index }: { mig: MigrationData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 6) * 0.06, duration: 0.35 }}
    >
      <GlassCard 
        hoverEffect={false}
        initial="initial"
        whileHover="hover"
        className={cn(
          "flex flex-col items-center justify-between p-5 text-center group h-full transition-all duration-300 hover:-translate-y-1.5 border border-slate-800/80 bg-[#0a101d]/90 rounded-2xl hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(0,242,254,0.15)]",
          mig.targetColorClass
        )}
      >
        <div className="flex items-center justify-between w-full mb-4 px-2">
          {/* From Tech */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-12 h-12 rounded-xl bg-[#06090e] border border-white/10 flex items-center justify-center p-2.5 shadow-inner group-hover:scale-105 transition-transform duration-300">
              <img src={mig.from.icon} alt={mig.from.name} className="w-full h-full object-contain" />
            </div>
            <span className="text-[11px] font-mono text-slate-400 group-hover:text-slate-200 truncate max-w-[70px]">
              {mig.from.name}
            </span>
          </div>

          {/* Animated Glowing Arrow */}
          <div className="relative flex flex-col items-center justify-center mx-2">
            <motion.div
              animate={{ 
                opacity: [0.6, 1, 0.6],
                filter: [
                  'drop-shadow(0 0 2px rgba(0,242,254,0.3))', 
                  'drop-shadow(0 0 10px rgba(0,242,254,0.8))', 
                  'drop-shadow(0 0 2px rgba(0,242,254,0.3))'
                ]
              }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              className="text-cyan-400 relative z-10"
            >
              {mig.isBidirectional ? (
                <ArrowRightLeft size={24} strokeWidth={2.2} />
              ) : (
                <ArrowRight size={24} strokeWidth={2.2} />
              )}
            </motion.div>
            <span className="text-[9px] font-mono text-cyan-400/80 mt-1">
              {mig.isBidirectional ? 'Bidirectional' : 'Direct'}
            </span>
          </div>

          {/* To Tech */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-12 h-12 rounded-xl bg-[#06090e] border border-white/10 flex items-center justify-center p-2.5 shadow-inner group-hover:scale-105 transition-transform duration-300">
              <img src={mig.to.icon} alt={mig.to.name} className="w-full h-full object-contain" />
            </div>
            <span className="text-[11px] font-mono text-slate-200 font-bold truncate max-w-[70px]">
              {mig.to.name}
            </span>
          </div>
        </div>

        <div className="w-full pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
          <span className="text-slate-500">{mig.isFrontend ? 'Frontend' : 'Backend'}</span>
          <span className="text-cyan-400 group-hover:underline">Catalog Ready</span>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export function SupportedTech() {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend'>('all');

  const filteredMigrations = allMigrations.filter((m) => {
    if (filter === 'frontend') return m.isFrontend;
    if (filter === 'backend') return !m.isFrontend;
    return true;
  });

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-[#06090e]">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Layers size={14} className="text-cyan-400" />
            Layered Architecture Matrix
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Full Cross-Framework Compatibility
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
            Every migration path is backed by domain-tested catalog rules, runtime invariants, and dependency scaffolds.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Migrations', count: allMigrations.length },
              { id: 'frontend', label: 'Frontend (React, Next, Vue, Svelte, Angular)', count: allMigrations.filter(m => m.isFrontend).length },
              { id: 'backend', label: 'Backend (Express, Fastify, NestJS)', count: allMigrations.filter(m => !m.isFrontend).length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as 'all' | 'frontend' | 'backend')}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-mono font-medium transition-all cursor-pointer flex items-center gap-2 ${
                  filter === tab.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,242,254,0.4)]'
                    : 'bg-[#0d1424] text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  filter === tab.id ? 'bg-slate-900 text-cyan-300' : 'bg-slate-800 text-slate-300'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Migrations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
          {filteredMigrations.map((mig, idx) => (
            <MigrationCard key={`${mig.from.id}-${mig.to.id}-${idx}`} mig={mig} index={idx} />
          ))}
        </div>

        {/* Polymorphic Package Managers & Monorepo Topologies Strip */}
        <div className="pt-12 border-t border-cyan-500/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Package Managers Card */}
            <div className="p-6 rounded-2xl bg-[#080d17]/80 border border-slate-800/80 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <span className="font-mono text-xs font-bold">PM</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-mono">Polymorphic Package Managers (PPME)</h3>
                    <p className="text-xs text-slate-400">Lockfile-preserving execution with zero host subprocess leakage</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
                  Universal
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                {[
                  { name: 'npm', desc: 'package-lock.json', tag: 'Standard' },
                  { name: 'pnpm', desc: 'pnpm-lock.yaml', tag: 'Symlink-Safe' },
                  { name: 'yarn', desc: 'yarn.lock', tag: 'v1 & Berry' },
                  { name: 'bun', desc: 'bun.lockb', tag: 'Fast Native' },
                ].map((pm) => (
                  <div key={pm.name} className="p-3 rounded-xl bg-[#050811] border border-slate-800/80 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs font-bold text-white">{pm.name}</span>
                      <span className="text-[9px] font-mono text-cyan-400/80">{pm.tag}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 truncate">{pm.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Monorepo Topologies Card */}
            <div className="p-6 rounded-2xl bg-[#080d17]/80 border border-slate-800/80 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <span className="font-mono text-xs font-bold">MR</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-mono">Monorepo Workspace Intelligence (PIE)</h3>
                    <p className="text-xs text-slate-400">Upward boundary traversal and per-package framework detection</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
                  Subpackages
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                {[
                  { name: 'Turborepo', desc: 'turbo.json', tag: 'Monorepo' },
                  { name: 'pnpm Workspaces', desc: 'pnpm-workspace.yaml', tag: 'Workspaces' },
                  { name: 'npm/yarn Workspaces', desc: 'package.json', tag: 'Hoisted' },
                  { name: 'Lerna', desc: 'lerna.json', tag: 'Multi-Package' },
                ].map((mr) => (
                  <div key={mr.name} className="p-3 rounded-xl bg-[#050811] border border-slate-800/80 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs font-bold text-white truncate max-w-[80px]">{mr.name}</span>
                      <span className="text-[9px] font-mono text-cyan-400/80">{mr.tag}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 truncate">{mr.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

