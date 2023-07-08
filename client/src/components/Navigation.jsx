import { Nav, Navbar } from 'react-bootstrap'
import { NAV_LINKS } from '../constants'
import { ContactModal } from './'

const Navigation = () => {
  const { HOME, PROJECTS, ABOUT } = NAV_LINKS

  const navLinks = [HOME, PROJECTS, ABOUT].map((link) => (
    <Nav.Link key={link.id} href={link.id}>
      {link.title}
    </Nav.Link>
  ))

  return (
    <Navbar expand="lg" className="navbar-dark bg-none px-4 px-md-5">
      <Navbar.Brand href={HOME.id} className="text-uppercase fs-3">
        Justin Tsugranes
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="navbarResponsive"
        aria-label="Toggle navigation"
      />
      <Navbar.Collapse id="navbarResponsive">
        <Nav className="ms-auto dropstart text-end text-uppercase">
          {navLinks}
          <Nav.Link>
            <ContactModal triggerText="Contact" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
