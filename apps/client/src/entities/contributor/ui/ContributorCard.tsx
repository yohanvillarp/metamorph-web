import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import type { GitHubContributor, ContributorProfile } from '../model/types';
import { CONTRIBUTOR_PROFILES } from '../config/contributors';

export interface ContributorCardProps {
  contributor: GitHubContributor;
  profile?: ContributorProfile;
  className?: string;
  metricLabel?: 'commits' | 'contributions';
}

export function ContributorCard({
  contributor,
  profile: explicitProfile,
  className = '',
  metricLabel = 'commits',
}: ContributorCardProps) {
  const profile = explicitProfile ?? CONTRIBUTOR_PROFILES[contributor.login.toLowerCase()];
  const isCreator = contributor.login.toLowerCase() === 'yohanvillarp';
  const badgeName = profile?.badge || (isCreator ? 'Creator' : 'Contributor');

  return (
    <motion.a
      href={contributor.html_url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      className={`p-4 rounded-xl border backdrop-blur-md transition-all flex items-start gap-3.5 group relative overflow-hidden ${
        isCreator
          ? 'bg-[#0a1224]/90 border-cyan-500/40 shadow-[0_0_20px_rgba(0,242,254,0.1)]'
          : 'bg-[#080d18]/90 border-slate-800/80 hover:border-cyan-500/30 hover:bg-[#0b1324]/80'
      } ${className}`}
    >
      <img
        src={contributor.avatar_url}
        alt={contributor.login}
        className="w-12 h-12 rounded-full border border-cyan-400/40 p-0.5 object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
        loading="lazy"
      />
      <div className="min-w-0 flex-1">
        {profile?.name ? (
          <>
            <span className="font-bold text-white text-sm block truncate group-hover:text-cyan-300 transition-colors">
              {profile.name}
            </span>
            <div className="flex items-center gap-2 mt-0.5 flex-wrap">
              <span className="text-xs text-cyan-400/80 font-mono">
                @{contributor.login}
              </span>
              {isCreator ? (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                  {badgeName}
                </span>
              ) : (
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                  {badgeName}
                </span>
              )}
            </div>
          </>
        ) : (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-white text-sm font-mono group-hover:text-cyan-300 transition-colors">
              @{contributor.login}
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
              {badgeName}
            </span>
          </div>
        )}

        {profile?.bio && (
          <p className="text-xs text-slate-400 mt-1.5 leading-relaxed line-clamp-2">
            {profile.bio}
          </p>
        )}
        <p className="text-xs font-mono text-cyan-400/80 mt-2 flex items-center gap-1">
          <CheckCircle2 size={11} className="text-cyan-400" />
          <span>
            {contributor.contributions} {metricLabel}
          </span>
        </p>
      </div>
      <ExternalLink
        size={14}
        className="text-slate-600 group-hover:text-cyan-300 transition-colors flex-shrink-0 ml-1"
      />
    </motion.a>
  );
}
