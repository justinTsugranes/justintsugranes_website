import { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';
import { Footer, PreFooter, Navigation, ScrollToTop } from './components';
import { Home } from './pages';
// Lazy Loading
const LazyAbout = lazy(() => import('./pages/About'));
const LazyProjects = lazy(() => import('./pages/Projects'));

const App = () => (
  <>
    <ScrollToTop />
    <Navigation />
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* <Route exact path="projects" element={<Projects />} /> */}
      {/* <Route exact path="about" element={<About />} /> */}
      <Route
        exact
        path="projects"
        element={
          <Suspense fallback="Loading...">
            <LazyProjects />
          </Suspense>
        }
      />
      <Route
        exact
        path="about"
        element={
          <Suspense fallback="Loading...">
            <LazyAbout />
          </Suspense>
        }
      />
    </Routes>
    <PreFooter />
    <Footer />
  </>
);

export default App;
