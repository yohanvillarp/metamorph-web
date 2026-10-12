export interface ContributorProfile {
  login: string;
  name?: string;
  role: string;
  badge: string;
  bio?: string;
  avatarUrl?: string;
}

/**
 * Custom role & profile metadata for Metamorph core contributors.
 * Keys match GitHub login handles (case-insensitive).
 * Live GitHub telemetry (commits, avatars, html_url) merges seamlessly with this metadata.
 */
export const CONTRIBUTOR_PROFILES: Record<string, ContributorProfile> = {
  yohanvillarp: {
    login: 'yohanvillarp',
    name: 'Yohan Nikel Villar Presentación',
    role: 'Lead Architect & Creator',
    badge: 'Creator',
    bio: 'Creator of Metamorph, Mozaik v4 event blackboard, and Shadow Workspace architecture.',
  },
};
