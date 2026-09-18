import { generateGroupedSections, MigrationCard } from '@/entities/migration';
import { FrameworkLink } from '@/shared/ui/FrameworkLink';
import { Layers } from 'lucide-react';

export const FrontendMigrationsPage = () => {
  const frontendGroups = generateGroupedSections(true);

  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
          <Layers size={14} className="text-cyan-400" />
          Frontend Matrix
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
          Frontend Framework Migrations
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Explore the fully supported migration paths for your frontend architecture. Metamorph currently enables automated, isolated migrations across <strong className="text-white">React (Vite SPA)</strong>, <strong className="text-white">Next.js (App Router)</strong>, <strong className="text-white">Vue 3</strong>, <strong className="text-white">Svelte 5 (Runes)</strong>, and <strong className="text-white">Angular 18+ (Standalone)</strong>.
        </p>
      </div>

      {frontendGroups.map((group) => (
        <div key={group.sourceTech.id} id={group.sourceTech.name.toLowerCase().replace(/\./g, '')} className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#080d17] border border-cyan-500/30 flex items-center justify-center p-2.5 shadow-[0_0_15px_rgba(0,242,254,0.1)]">
              <img src={group.sourceTech.icon} alt={group.sourceTech.name} className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">{group.sourceTech.name}</h2>
              <span className="text-xs font-mono text-cyan-400">Source Architecture</span>
            </div>
          </div>
          {group.sourceTech.intro && (
            <div className="mb-8">
              <p className="text-slate-300 text-base leading-relaxed mb-2">{group.sourceTech.intro}</p>
              {group.sourceTech.website && (
                <FrameworkLink href={group.sourceTech.website} name={group.sourceTech.name} />
              )}
            </div>
          )}

          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 font-bold">
            Available Target Platforms
          </h3>
          <div className="bg-[#090e1a] border border-cyan-500/20 rounded-2xl overflow-hidden shadow-xl">
            {group.targetPlatforms.map((platform) => (
              <MigrationCard key={platform.id} platform={platform} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

