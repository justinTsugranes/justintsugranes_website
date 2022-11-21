// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardGroup, Container, Card, Row, Col, Image } from 'react-bootstrap';
import projectData from '../constants/ProjectData';

// const { title } = data;
// const [show, setShow] = useState(false);
// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);

export default function ProjectCard() {
  return (
    <Container fluid className="p-0 d-flex justify-content-evenly">
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
  );
}
