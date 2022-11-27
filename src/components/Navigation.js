import React from 'react';
import { Row, Nav, Navbar } from 'react-bootstrap';
import userData from '../constants/data.js';
import ContactModal from './ContactModal';

export default function Navigation() {
  const { name } = userData;
  return (
    <Row>
      <Navbar expand="lg" className="navbar-dark shadow px-4">
        <Navbar.Brand href="/" className="text-uppercase fs-3">
          {name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar"></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="ms-auto dropstart text-end text-uppercase">
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link id="contactLink">
              <ContactModal />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  );
}
