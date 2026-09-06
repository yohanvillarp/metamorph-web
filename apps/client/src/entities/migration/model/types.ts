export interface MigrationPlatform {
  id: string;
  name: string;
  icon: string;
  targetColorClass: string;
  description: string;
  requirements?: string;
  downloadUrl?: string;
  intro?: string;
  website?: string;
}

export interface GroupedMigrationSection {
  sourceTech: MigrationPlatform;
  targetPlatforms: MigrationPlatform[];
}
