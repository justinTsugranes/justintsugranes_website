import React from 'react';
import '../styles/App.css';
import { CardGroup, Container, Card, Image, Row, Col } from 'react-bootstrap';
import ProjectsShowcase from '../components/ProjectsShowcase';
// import ProjectCards from '../components/ProjectCards';
import projectData from '../constants/ProjectData.json';

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
            <Container fluid className="d-flex justify-content-evenly">
              <CardGroup>
                <Row
                  sm={1}
                  md={3}
                  lg={5}
                  className="d-flex justify-content-evenly text-center gap-3 gy-2 my-5">
                  {projectData.map(({ title, imageUrl }, index) => {
                    return (
                      <Col className="col-sm p-0" key={index}>
                        <Container className="mt-sm-1" fluid>
                          <Container fluid className="m-0 p-0">
                            <Card className="proj-card-container border-0">
                              <Image
                                fluid
                                variant="top"
                                className="proj-card-img hover-zoom"
                                src={imageUrl}
                                alt=""
                              />
                              <Card.Body className="d-flex flex-column justify-content-center align-content-center light-blue text-uppercase fw-bold">
                                <Card.Title>{title}</Card.Title>
                              </Card.Body>
                            </Card>
                          </Container>
                        </Container>
                      </Col>
                    );
                  })}
                </Row>
              </CardGroup>
            </Container>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
