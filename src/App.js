import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/App.css';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ContactSuccess from './components/ContactSuccess';
import PreFooter from './components/PreFooter';

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
