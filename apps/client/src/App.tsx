import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './widgets/header';
import { ScrollToTop } from './shared/ui/ScrollToTop';
import { NavigationProgressBar } from './shared/ui/NavigationProgressBar';
import { CyberLoader } from './shared/ui/CyberLoader';
import { scheduleIdleDocsPreload } from './shared/lib/routePreloader';
import { ROUTES } from './shared/config/routes';
import './index.css';

// Lazy-loaded route components for high-performance bundle splitting
const LandingPage = lazy(() => import('./pages/LandingPage').then((m) => ({ default: m.LandingPage })));
const DocsLayout = lazy(() => import('./pages/docs-layout').then((m) => ({ default: m.DocsLayout })));
const OverviewPage = lazy(() => import('./pages/overview').then((m) => ({ default: m.OverviewPage })));
const GettingStartedPage = lazy(() => import('./pages/getting-started').then((m) => ({ default: m.GettingStartedPage })));
const ConceptsPage = lazy(() => import('./pages/concepts').then((m) => ({ default: m.ConceptsPage })));
const SwarmPage = lazy(() => import('./pages/swarm').then((m) => ({ default: m.SwarmPage })));
const CliReferencePage = lazy(() => import('./pages/cli-reference').then((m) => ({ default: m.CliReferencePage })));
const BackendMigrationsPage = lazy(() => import('./pages/migrations').then((m) => ({ default: m.BackendMigrationsPage })));
const FrontendMigrationsPage = lazy(() => import('./pages/migrations').then((m) => ({ default: m.FrontendMigrationsPage })));
const CommunityPage = lazy(() => import('./pages/community').then((m) => ({ default: m.CommunityPage })));
const CommunityHubPage = lazy(() => import('./pages/community').then((m) => ({ default: m.CommunityHubPage })));
const NotFoundPage = lazy(() => import('./pages/not-found').then((m) => ({ default: m.NotFoundPage })));

function App() {
  useEffect(() => {
    scheduleIdleDocsPreload();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <NavigationProgressBar />
      <Header />
      <Suspense fallback={<CyberLoader fullScreen message="INITIALIZING METAMORPH..." />}>
        <Routes>
          <Route path={ROUTES.HOME} element={<LandingPage />} />
          <Route path={ROUTES.COMMUNITY} element={<CommunityHubPage />} />
          
          <Route path={ROUTES.DOCS.ROOT} element={<DocsLayout />}>
            <Route index element={<OverviewPage />} />
            <Route path="getting-started" element={<GettingStartedPage />} />
            <Route path="concepts" element={<ConceptsPage />} />
            <Route path="swarm" element={<SwarmPage />} />
            <Route path="cli-reference" element={<CliReferencePage />} />
            <Route path="migrations/backend" element={<BackendMigrationsPage />} />
            <Route path="migrations/frontend" element={<FrontendMigrationsPage />} />
            <Route path="contributing" element={<CommunityPage />} />
            <Route path="community" element={<CommunityPage />} />
          </Route>

          {/* Catch-all 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;


