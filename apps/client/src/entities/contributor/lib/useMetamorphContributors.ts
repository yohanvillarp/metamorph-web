import { useState, useEffect } from 'react';
import type { GitHubContributor } from '../model/types';

const CACHE_KEY = 'metamorph_contributors_cache_v2';
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes

const FALLBACK_CONTRIBUTORS: GitHubContributor[] = [
  {
    id: 154550852,
    login: 'yohanvillarp',
    avatar_url: 'https://avatars.githubusercontent.com/u/154550852?v=4',
    html_url: 'https://github.com/yohanvillarp',
    contributions: 207,
    type: 'User',
  },
  {
    id: 69676297,
    login: 'okarin1511',
    avatar_url: 'https://avatars.githubusercontent.com/u/69676297?v=4',
    html_url: 'https://github.com/okarin1511',
    contributions: 14,
    type: 'User',
  },
  {
    id: 49699333,
    login: 'dependabot[bot]',
    avatar_url: 'https://avatars.githubusercontent.com/in/29110?v=4',
    html_url: 'https://github.com/apps/dependabot',
    contributions: 28,
    type: 'Bot',
  },
  {
    id: 31427850,
    login: 'ImgBotApp',
    avatar_url: 'https://avatars.githubusercontent.com/u/31427850?v=4',
    html_url: 'https://github.com/ImgBotApp',
    contributions: 1,
    type: 'Bot',
  },
];

export function useMetamorphContributors() {
  const [contributors, setContributors] = useState<GitHubContributor[]>(() => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < CACHE_TTL_MS && Array.isArray(parsed.data)) {
          return parsed.data;
        }
      }
    } catch {
      // Ignore localStorage errors
    }
    return FALLBACK_CONTRIBUTORS;
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchContributors() {
      // Check if fresh cache exists
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < CACHE_TTL_MS && Array.isArray(parsed.data)) {
            if (isMounted) {
              setContributors(parsed.data);
              setIsLive(true);
            }
            return;
          }
        }
      } catch {
        // Fall through to fetch
      }

      setIsLoading(true);

      try {
        const response = await fetch('https://api.github.com/repos/yohanvillarp/metamorph/contributors', {
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        });

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data: GitHubContributor[] = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          if (isMounted) {
            setContributors(data);
            setIsLive(true);
          }
          try {
            localStorage.setItem(
              CACHE_KEY,
              JSON.stringify({
                timestamp: Date.now(),
                data,
              })
            );
          } catch {
            // Storage quota or private browsing
          }
        }
      } catch {
        if (isMounted) {
          setIsLive(false);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchContributors();

    return () => {
      isMounted = false;
    };
  }, []);

  const humanContributors = contributors.filter(
    (c) => c.type !== 'Bot' && !c.login.includes('[bot]') && c.login !== 'ImgBotApp'
  );

  const botContributors = contributors.filter(
    (c) => c.type === 'Bot' || c.login.includes('[bot]') || c.login === 'ImgBotApp'
  );

  const totalContributions = contributors.reduce((acc, c) => acc + (c.contributions || 0), 0);

  return {
    contributors,
    humanContributors,
    botContributors,
    totalContributions,
    isLoading,
    isLive,
  };
}
