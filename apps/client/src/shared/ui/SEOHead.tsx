import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  type?: 'website' | 'article';
}

const BASE_URL = 'https://metamorph.nikelyh.tech';
const DEFAULT_DESCRIPTION =
  'Refactor and migrate your entire codebase with zero risk and zero downtime. Powered by Mozaik AI and an elite swarm of autonomous agents.';

export function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  canonicalPath,
  type = 'website',
}: SEOHeadProps) {
  const location = useLocation();
  const currentPath = canonicalPath || location.pathname;
  const canonicalUrl = `${BASE_URL}${currentPath === '/' ? '' : currentPath}`;
  const fullTitle = title.includes('Metamorph') ? title : `${title} | Metamorph`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = fullTitle;

    // Helper to safely set or update a meta tag
    const setMetaTag = (selector: string, attr: string, value: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        if (selector.startsWith('meta[name=')) {
          element.name = selector.match(/name="([^"]+)"/)?.[1] || '';
        } else if (selector.startsWith('meta[property=')) {
          element.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] || '');
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attr, value);
    };

    // Helper to update canonical link
    const setCanonicalLink = (url: string) => {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = url;
    };

    // 2. Standard Meta Tags
    setMetaTag('meta[name="description"]', 'content', description);
    if (keywords) {
      setMetaTag('meta[name="keywords"]', 'content', keywords);
    }

    // 3. Canonical Link
    setCanonicalLink(canonicalUrl);

    // 4. Open Graph Tags
    setMetaTag('meta[property="og:title"]', 'content', fullTitle);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:url"]', 'content', canonicalUrl);
    setMetaTag('meta[property="og:type"]', 'content', type);

    // 5. Twitter Card Tags
    setMetaTag('meta[property="twitter:title"]', 'content', fullTitle);
    setMetaTag('meta[property="twitter:description"]', 'content', description);
  }, [fullTitle, description, keywords, canonicalUrl, type]);

  return null;
}
