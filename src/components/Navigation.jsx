import { Row, Nav, Navbar } from 'react-bootstrap';
import navLinks from '../constants/data.js';
// import { navLinks } from '../constants/data.js';
import ContactModal from './ContactModal.jsx';

export default function Navigation() {
  const { name, projects, about } = navLinks;

  return (
    <Row>
      <Navbar expand="lg" className="navbar-dark shadow px-4 px-md-5">
        <Navbar.Brand href="/" className="text-uppercase fs-3">
          {name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar"></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="ms-auto dropstart text-end text-uppercase">
            {/* {navLinks.map((nav) => (
              <Nav.Link key={nav.id} href={`id`}>
                {nav.title}
              </Nav.Link>
            ))} */}
            <Nav.Link href={projects.id}>{projects.title}</Nav.Link>
            <Nav.Link href={about.id}>{about.title}</Nav.Link>
            {/* <Nav.Link href={cv.href}>{cv.title}</Nav.Link> */}
            <Nav.Link id="contactLink">
              <ContactModal />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  );
}
