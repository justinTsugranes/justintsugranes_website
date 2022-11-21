import React from 'react';
import '../styles/Hero.css';
import { Row, Container, Col } from 'react-bootstrap';
import heroImage from '../img/heros/hero-index.png';

export default function Hero() {
  return (
    <Container fluid className="masthead" style={{ backgroundImage: `url(${heroImage})` }}>
      <Col>
        <Row className="color-overlay d-flex justify-content-center align-items-center h-100">
          <Col className="text-white text-center">
            <h1 className="mb-3">Web Developer, Digital Media Creator</h1>
            <h4 className="mb-3 light-blue">
              JavaScript - React.js - Bootstrap - Adobe Creative Cloud - Figma
            </h4>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}
