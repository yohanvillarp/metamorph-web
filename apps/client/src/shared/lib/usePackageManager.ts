import { useState, useEffect } from 'react';

export type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun';

const STORAGE_KEY = 'metamorph:package-manager';
const EVENT_NAME = 'metamorph:pm-change';

export function usePackageManager(): [PackageManager, (pm: PackageManager) => void] {
  const [pm, setPm] = useState<PackageManager>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'npm' || saved === 'pnpm' || saved === 'yarn' || saved === 'bun') {
        return saved;
      }
    } catch {
      // Ignore localStorage errors (e.g. private mode)
    }
    return 'npm';
  });

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<PackageManager>;
      if (customEvent.detail && customEvent.detail !== pm) {
        setPm(customEvent.detail);
      }
    };

    window.addEventListener(EVENT_NAME, handler);
    return () => window.removeEventListener(EVENT_NAME, handler);
  }, [pm]);

  const selectPm = (nextPm: PackageManager) => {
    setPm(nextPm);
    try {
      localStorage.setItem(STORAGE_KEY, nextPm);
    } catch {
      // Ignore localStorage errors
    }
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: nextPm }));
  };

  return [pm, selectPm];
}
