import { Routes, Route } from 'react-router-dom';
import { ContactSuccess, Footer, PreFooter, Navigation, ScrollToTop } from './components';
import { About, Home, CV, Projects } from './pages';

const App = () => (
  <>
    <ScrollToTop />
    <Navigation />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="projects" element={<Projects />} />
      <Route exact path="about" element={<About />} />
      <Route exact path="cv" element={<CV />} />
      <Route exact path="contact-success" element={<ContactSuccess />} />
    </Routes>
    <PreFooter />
    <Footer />
  </>
);

export default App;
