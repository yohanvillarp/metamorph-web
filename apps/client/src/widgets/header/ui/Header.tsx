import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LandingHeader } from './LandingHeader';
import { DocsHeader } from './DocsHeader';
import { SearchModal } from '@/shared/ui/SearchModal';

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  // Global Ctrl+K / Cmd+K listener & custom event trigger
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    const handleCustomOpen = () => setIsSearchOpen(true);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('metamorph:open-search', handleCustomOpen);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('metamorph:open-search', handleCustomOpen);
    };
  }, []);

  const isDocs = location.pathname.startsWith('/docs');

  return (
    <>
      {isDocs ? (
        <DocsHeader onOpenSearch={() => setIsSearchOpen(true)} />
      ) : (
        <LandingHeader onOpenSearch={() => setIsSearchOpen(true)} />
      )}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
