import { Routes, Route } from 'react-router-dom';
import { Footer, PreFooter, Navigation, ScrollToTop } from './components';
import { Home, Projects, About, CV } from './pages';
// Lazy Loading
// const LazyProjects = React.lazy(() => import('./pages/Projects'));
// const LazyAbout = React.lazy(() => import('./pages/About'));
import './styles/app.css';

const App = () => (
  <>
    <ScrollToTop />
    <Navigation />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="projects" element={<Projects />} />
      <Route exact path="about" element={<About />} />
      {/* <Route
        exact
        path="projects"
        element={
          <React.Suspense fallback="Loading...">
            <LazyProjects />
          </React.Suspense>
        }
      />
      <Route
        exact
        path="about"
        element={
          <React.Suspense fallback="Loading...">
            <LazyAbout />
          </React.Suspense>
        }
      /> */}
      <Route exact path="cv" element={<CV />} />
    </Routes>
    <PreFooter />
    <Footer />
  </>
);

export default App;
