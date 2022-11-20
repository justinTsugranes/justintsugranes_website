import React from 'react';
import '../styles/ProjectCards.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ProjectCards from './Project-Cards';

export default function ProjectCardsHome() {
  const navigate = useNavigate();
  return (
    <Container fluid className="section-container">
      <Row className="text-center">
        <h2 className="light-blue">Some of my recent projects</h2>
      </Row>
      <Row>
        <ProjectCards />
      </Row>
      <Row className="text-center">
        <Col>
          <Button className="button rounded-pill" onClick={() => navigate('projects')}>
            View More Projects
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
