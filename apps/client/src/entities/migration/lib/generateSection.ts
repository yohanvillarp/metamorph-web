import type { GroupedMigrationSection } from '@/entities/migration/model/types';
import { SUPPORTED_MIGRATIONS, TECH_METADATA } from '@/entities/migration/config/supportedMigrations';

export function generateGroupedSections(isFrontend: boolean): GroupedMigrationSection[] {
  const groupedSections: GroupedMigrationSection[] = [];

  for (const [sourceId, targets] of Object.entries(SUPPORTED_MIGRATIONS)) {
    const sourceTech = TECH_METADATA[sourceId];
    // Only process if the source matches the requested category
    if (!sourceTech || sourceTech.isFrontend !== isFrontend) continue;

    const targetPlatforms = targets
      .map(targetId => TECH_METADATA[targetId])
      .filter(targetTech => targetTech !== undefined)
      .map(targetTech => ({
        id: targetTech.id,
        name: targetTech.name,
        icon: targetTech.icon,
        targetColorClass: targetTech.targetColorClass,
        description: targetTech.description,
        requirements: targetTech.requirements,
      }));

    if (targetPlatforms.length > 0) {
      groupedSections.push({
        sourceTech: {
          id: sourceTech.id,
          name: sourceTech.name,
          icon: sourceTech.icon,
          targetColorClass: sourceTech.targetColorClass,
          description: sourceTech.description,
          intro: sourceTech.intro,
          requirements: sourceTech.requirements,
          website: sourceTech.website,
        },
        targetPlatforms,
      });
    }
  }

  return groupedSections;
}
