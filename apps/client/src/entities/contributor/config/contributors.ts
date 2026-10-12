import type { ContributorProfile } from '../model/types';

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
    bio: 'Creator and lead architect of Metamorph.',
  },
  okarin1511: {
    login: 'okarin1511',
    name: 'Aseem Khandekar',
    role: 'Contributor',
    badge: 'Contributor',
    bio: 'Open-source contributor to the Metamorph ecosystem.',
  },
};
