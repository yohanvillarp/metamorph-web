/**
 * Route preloading utility to eliminate navigation delays for lazy-loaded pages.
 * Preloads the docs layout and overview bundles into browser memory.
 */
let docsPreloaded = false;

export function preloadDocsRoutes() {
  if (docsPreloaded) return;
  docsPreloaded = true;

  // Preload docs layout and initial overview in parallel
  Promise.all([
    import('@/pages/docs-layout'),
    import('@/pages/overview'),
  ]).catch(() => {
    // Graceful fallback if offline
    docsPreloaded = false;
  });
}

/**
 * Warms up docs routes during browser idle periods after landing mount.
 */
export function scheduleIdleDocsPreload() {
  if (typeof window === 'undefined') return;

  if ('requestIdleCallback' in window) {
    (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(() => {
      preloadDocsRoutes();
    });
  } else {
    setTimeout(() => {
      preloadDocsRoutes();
    }, 1500);
  }
}
