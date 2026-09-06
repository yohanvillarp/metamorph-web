import type { MigrationPlatform } from '@/entities/migration/model/types';
import { cn } from '@/shared/lib/utils';

interface MigrationCardProps {
  platform: MigrationPlatform;
}

export const MigrationCard = ({ platform }: MigrationCardProps) => {
  return (
    <div className={cn("flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 border-b border-neo-border last:border-b-0 hover:bg-white/5 transition-all duration-300 group", platform.targetColorClass)}>
      <div className="flex items-start gap-5 mb-4 sm:mb-0">
        {/* Render Icon */}
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0f172a] border border-white/10 flex items-center justify-center p-2 shadow-inner group-hover:scale-110 transition-transform duration-300">
          <img src={platform.icon} alt={platform.name} className="w-full h-full object-contain" />
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-neo-text mb-2 flex items-center gap-2 group-hover:text-white transition-colors">
            {platform.name}
          </h3>
          {platform.requirements && (
            <p className="text-sm text-neo-text-muted mb-1">
              <span className="font-semibold text-neo-text group-hover:text-white transition-colors">Requirements:</span> {platform.requirements}
            </p>
          )}
          <p className="text-sm text-neo-text-muted leading-relaxed group-hover:text-gray-300 transition-colors">{platform.description}</p>
        </div>
      </div>
      
      {platform.downloadUrl && (
        <div className="flex gap-4">
          <button className="neo-btn px-6 py-2 rounded-full border border-neo-border bg-neo-surface hover:bg-neo-bg hover:border-neo-accent transition-all text-sm font-medium whitespace-nowrap">
            Migration Tool
          </button>
        </div>
      )}
    </div>
  );
};
