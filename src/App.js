import '../src/styles/App.css';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
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
        <Route path="/" element={<Home />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact-success" element={<ContactSuccess />}></Route>
      </Routes>
      <PreFooter />
      <Footer />
    </>
  );
}

export default App;
