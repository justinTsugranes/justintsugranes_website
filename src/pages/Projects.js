import React from 'react';
import { CardGroup, Container, Card, Image, Row, Col } from 'react-bootstrap';
import '../styles/App.css';
import projectData from '../constants/ProjectData.json';
import ProjectsShowcase from '../components/ProjectsShowcase';

export default function Projects() {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col>
          <ProjectsShowcase />
        </Col>
      </Row>
      <Row className="my-4">
        <Col className="section-container mt-sm-5">
          <Row>
            <h2 className="d-sm-none d-lg-block light-blue text-center">Coding Projects</h2>
          </Row>
          <Row>
            {/* <Container fluid className="p-0"> */}
            <CardGroup>
              <Row className="d-flex justify-content-evenly gap-3 m-3 row-cols-1 row-cols-md-3 row-cols-lg-5">
                {projectData.map(({ demo, imageUrl }, index) => {
                  return (
                    <Col key={index}>
                      <a
                        href={demo}
                        rel="noreferrer"
                        target="_blank"
                        className="text-decoration-none">
                        <Card className="proj-card-container border-0">
                          <Image
                            fluid
                            variant="top"
                            className="proj-card-img hover-zoom shadow"
                            src={imageUrl}
                            alt="..."
                          />
                          {/* <Card.Body className="light-blue text-uppercase fw-bold fs-4">
                      <Card.Title className="pt-3">{title}</Card.Title>
                    </Card.Body> */}
                        </Card>
                      </a>
                    </Col>
                  );
                })}
              </Row>
            </CardGroup>
            {/* </Container> */}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
