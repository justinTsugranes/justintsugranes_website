import { Nav, Navbar } from 'react-bootstrap';
import { about as user, navLinks } from '../constants';
import { ContactModal } from './';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';

// Navigation component that displays a navbar at the top of the page
const Navigation = () => {
  // Destructuring the navLinks object to get the home, projects, and about links
  const { home, projects, about } = navLinks;

  return (
    // Wrapping the navbar in a motion.div element to apply motion variants
    <motion.div
      // Applying the navVariants motion object
      variants={navVariants}
      // Initial state is "hidden"
      initial="hidden"
      // When the component comes into view, the state changes to "show"
      whileInView="show"
      // When the component comes into view (when it takes up 20% of the viewport), the state change occurs
      viewport={{ once: true, amount: 0.2 }}>
      {/* Setting up the navbar with React Bootstrap */}
      <Navbar expand="lg" className="navbar-dark bg-none px-4 px-md-5">
        {/* Navbar brand, which is the user's name */}
        <Navbar.Brand href={home.id} className="text-uppercase fs-3">
          {user.name}
        </Navbar.Brand>
        {/* Toggler for the navbar, used for smaller screens */}
        <Navbar.Toggle aria-controls="navbar"></Navbar.Toggle>
        {/* Navbar links and contact modal */}
        <Navbar.Collapse>
          {/* Setting up the nav links using the Nav component from React Bootstrap */}
          <Nav className="ms-auto dropstart text-end text-uppercase">
            <Nav.Link href={projects.id}>{projects.title}</Nav.Link>
            <Nav.Link href={about.id}>{about.title}</Nav.Link>
            {/* Contact modal component */}
            <Nav.Link id="contactLink">
              <ContactModal />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </motion.div>
  );
};

export default Navigation;
