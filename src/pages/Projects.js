import React from 'react';
import '../styles/App.css';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectsShowcase from '../components/ProjectsShowcase';
import ProjectCards from '../components/Project-Cards';

export default function Projects() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <ProjectsShowcase />
          </Col>
        </Row>
        <Col className="section-container">
          <Row>
            <h2 className="light-blue text-center">Coding Projects</h2>
          </Row>
          <Row>
            <ProjectCards />
          </Row>
        </Col>
      </Container>
    </>
  );
}
