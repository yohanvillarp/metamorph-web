import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { DocsLayout } from './pages/docs-layout';
import { BackendMigrationsPage, FrontendMigrationsPage } from './pages/migrations';
import { GettingStartedPage } from './pages/getting-started';
import { OverviewPage } from './pages/overview';
import { Header } from './shared/ui/Header';
import { ROUTES } from './shared/config/routes';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<LandingPage />} />
        
        <Route path={ROUTES.DOCS.ROOT} element={<DocsLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="getting-started" element={<GettingStartedPage />} />
          <Route path="migrations/backend" element={<BackendMigrationsPage />} />
          <Route path="migrations/frontend" element={<FrontendMigrationsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
