export interface ContributorProfile {
  login: string;
  name?: string;
  role: string;
  badge: string;
  bio?: string;
  avatarUrl?: string;
}

export interface GitHubContributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
  type: string;
}
