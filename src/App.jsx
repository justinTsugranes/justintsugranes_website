import { Routes, Route } from 'react-router-dom';
import { Footer, PreFooter, Navigation, ScrollToTop } from './components';
import { About, Home, CV, Projects } from './pages';
import './styles/app.css';

const App = () => (
  <>
    <ScrollToTop />
    <Navigation />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="projects" element={<Projects />} />
      <Route exact path="about" element={<About />} />
      <Route exact path="cv" element={<CV />} />
    </Routes>
    <PreFooter />
    <Footer />
  </>
);

export default App;
