import { Row, Nav, Navbar } from 'react-bootstrap';
import { user, navLinks } from '../constants';
import { ContactModal } from './';

const Navigation = () => {
  const { home, projects, about } = navLinks;

  return (
    <Row>
      <Navbar expand="lg" className="navbar-dark shadow px-4 px-md-5">
        <Navbar.Brand href={home.id} className="text-uppercase fs-3">
          {user.name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar"></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="ms-auto dropstart text-end text-uppercase">
            <Nav.Link href={projects.id}>{projects.title}</Nav.Link>
            <Nav.Link href={about.id}>{about.title}</Nav.Link>
            <Nav.Link id="contactLink">
              <ContactModal />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  );
};

export default Navigation;
