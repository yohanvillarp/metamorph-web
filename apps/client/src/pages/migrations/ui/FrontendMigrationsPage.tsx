import { generateGroupedSections, MigrationCard } from '@/entities/migration';
import { FrameworkLink } from '@/shared/ui/FrameworkLink';

export const FrontendMigrationsPage = () => {
  const frontendGroups = generateGroupedSections(true);

  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-neo-text mb-4 tracking-tight">
          Frontend Frameworks
        </h1>
        <p className="text-lg text-neo-text-muted">
          Explore the fully supported migration paths for your frontend architecture. Metamorph currently allows automated, secure migrations between <strong className="text-white">React</strong>, <strong className="text-white">Next.js</strong>, and <strong className="text-white">Vue</strong>. Select your current technology stack below to view available target frameworks.
        </p>
      </div>

      {frontendGroups.map((group) => (
        <div key={group.sourceTech.id} id={group.sourceTech.name.toLowerCase().replace(/\./g, '')} className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#0f172a] border border-white/10 flex items-center justify-center p-2">
              <img src={group.sourceTech.icon} alt={group.sourceTech.name} className="w-full h-full object-contain" />
            </div>
            <h2 className="text-3xl font-bold text-neo-text">{group.sourceTech.name}</h2>
          </div>
          {group.sourceTech.intro && (
            <div className="mb-8">
              <p className="text-neo-text-muted text-lg leading-relaxed">{group.sourceTech.intro}</p>
              {group.sourceTech.website && (
                <FrameworkLink href={group.sourceTech.website} name={group.sourceTech.name} />
              )}
            </div>
          )}

          <h3 className="text-lg font-semibold text-neo-text mb-4 uppercase tracking-wide">Migration Paths</h3>
          <div className="bg-neo-surface border border-neo-border rounded-xl overflow-hidden">
            {group.targetPlatforms.map((platform) => (
              <MigrationCard key={platform.id} platform={platform} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
