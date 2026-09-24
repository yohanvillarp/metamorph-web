import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './shared/ui/Header';
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

function RouteLoadingFallback() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3">
      <div className="relative">
        <div className="w-10 h-10 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        </div>
      </div>
      <span className="text-xs font-mono text-cyan-400/80 tracking-wider uppercase">Loading Metamorph...</span>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<RouteLoadingFallback />}>
        <Routes>
          <Route path={ROUTES.HOME} element={<LandingPage />} />
          
          <Route path={ROUTES.DOCS.ROOT} element={<DocsLayout />}>
            <Route index element={<OverviewPage />} />
            <Route path="getting-started" element={<GettingStartedPage />} />
            <Route path="concepts" element={<ConceptsPage />} />
            <Route path="swarm" element={<SwarmPage />} />
            <Route path="cli-reference" element={<CliReferencePage />} />
            <Route path="migrations/backend" element={<BackendMigrationsPage />} />
            <Route path="migrations/frontend" element={<FrontendMigrationsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;


