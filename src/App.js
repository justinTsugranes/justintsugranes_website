import '../src/styles/App.css';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Cv from './components/cv/cv';
import Projects from './pages/Projects';
import ContactSuccess from './components/ContactSuccess';
import Footer from './components/Footer';
import PreFooter from './components/PreFooter';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';

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
