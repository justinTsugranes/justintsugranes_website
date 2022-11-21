// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardGroup, Container, Card, Row, Image } from 'react-bootstrap';
import data from './Data';
// import GithubIcon from '../icons/GithubIcon';
// import DemoIcon from '../icons/DemoIcon';

// const { title } = data;
// const [show, setShow] = useState(false);
// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);

export default function ProjectCard() {
  return (
    <Container fluid className="p-0 d-flex justify-content-evenly">
      <CardGroup xs={12} md={6} lg={4}>
        <Row
          sm={1}
          md={3}
          lg={5}
          className="d-flex justify-content-evenly text-center gap-3 gy-2 my-5">
          {data.map(({ title, imageUrl }, index) => {
            return (
              <Container className="mt-sm-1" fluid key={index}>
                <Container fluid className="m-0 p-0">
                  <Card className="card-container border-0">
                    <Image
                      fluid
                      variant="top"
                      className="projCardImg hover-zoom"
                      src={imageUrl}
                      alt=""
                    />
                    <Card.Body className="project-title d-flex flex-column justify-content-center align-content-center">
                      <Card.Title>{title}</Card.Title>
                    </Card.Body>
                  </Card>
                </Container>
              </Container>
            );
          })}
        </Row>
      </CardGroup>
    </Container>
  );
}
