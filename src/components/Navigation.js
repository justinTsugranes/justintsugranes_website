import React from 'react';
import { Row, Nav, Navbar } from 'react-bootstrap';
import data from '../constants/data.js';
import ContactModal from './ContactModal';

export default function Navigation() {
  const { name, projects, about } = data;

  const contact = () => {
    return <ContactModal />;
  };

  return (
    <Row>
      <Navbar expand="lg" className="navbar-dark shadow px-4 px-md-5">
        <Navbar.Brand href="/" className="text-uppercase fs-3">
          {name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar"></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="ms-auto dropstart text-end text-uppercase">
            <Nav.Link href={projects.href}>{projects.title}</Nav.Link>
            <Nav.Link href={about.href}>{about.title}</Nav.Link>
            {/* <Nav.Link href="/cv">CV</Nav.Link> */}
            <Nav.Link id="contactLink">
              {/* <ContactModal /> */}
              {contact}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  );
}
