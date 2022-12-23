import { Routes, Route } from 'react-router-dom';
import {
  About,
  Home,
  Cv,
  Projects,
  ContactSuccess,
  Footer,
  PreFooter,
  Navigation,
  ScrollToTop
} from './components/index.js';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="projects" element={<Projects />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="cv" element={<Cv />} />
        <Route exact path="contact-success" element={<ContactSuccess />} />
      </Routes>
      <PreFooter />
      <Footer />
    </>
  );
}

export default App;
