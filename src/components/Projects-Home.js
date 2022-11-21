import React from 'react';
import '../styles/ProjectCards.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ProjectCards from './Project-Cards';

export default function ProjectCardsHome() {
  const navigate = useNavigate();
  return (
    <Container fluid className="section-container text-center">
      <Row>
        <h2 className="light-blue">Some of my recent projects</h2>
      </Row>
      <Row className="my-4">
        <ProjectCards />
      </Row>
      <Row>
        <Col>
          <Button className="button rounded-pill" onClick={() => navigate('projects')}>
            View More Projects
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
