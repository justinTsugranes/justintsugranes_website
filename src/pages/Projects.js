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
        <Row>
          <Col className="section-container mt-sm-5">
            <Row>
              <h2 className="d-sm-none d-lg-block light-blue text-center">Coding Projects</h2>
            </Row>
            <Row>
              <ProjectCards />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
