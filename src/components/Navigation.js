import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import userData from '../constants/data.js';
import ContactModal from './ContactModal';

export default function Navigation() {
  return (
    <Navbar bg="dark" expand="lg" className="navbar-dark shadow fixed-top">
      <Container>
        <Navbar.Brand href="/" className="text-uppercase">
          {userData.name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar"></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="ms-auto dropstart text-end text-uppercase py-2">
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link id="contactLink">
              <ContactModal />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
