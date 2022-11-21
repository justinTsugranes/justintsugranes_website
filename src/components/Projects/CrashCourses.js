import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Modal, Image, Row, Col, CloseButton } from 'react-bootstrap';
import projectData from '../../constants/ProjectData';
import GithubIcon from '../icons/GithubIcon';
import DemoIcon from '../icons/DemoIcon';

export default function BreakfastRecipes() {
  const { title, descr, tech, demo, repo, imageUrl } = projectData.crashcourse;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container fluid className="m-0 p-0">
        <Card className="card-container border-0" onClick={handleShow}>
          <Image fluid variant="top" className="projCardImg hover-zoom" src={imageUrl} alt="" />
          {/* <Card.Body className="project-title d-flex flex-column justify-content-center align-content-center">
          <Card.Title>{title}</Card.Title>
          </Card.Body> */}
        </Card>
      </Container>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Container fluid className="border-0 m-0 p-0 bg-dark">
          <Modal.Header className="text-light border-0">
            <Modal.Title>{title}</Modal.Title>
            <CloseButton variant="white" aria-label="Close" onClick={handleClose} />
          </Modal.Header>

          <Modal.Body className="modal-lg text-light" id="modal-body">
            <Col>
              <Row>
                <a href={demo} target="_blank" rel="noreferrer">
                  <Image fluid src={imageUrl} alt="..." />
                </a>
              </Row>
              <Row>
                <p className="my-4">{descr}</p>
                <h5 className="key-tech-title text-warning">Key Tech</h5>
                <p className="mb-0">{tech}</p>
              </Row>
            </Col>
          </Modal.Body>

          <Modal.Footer className="border-0">
            <Row>
              <Col className="h2 mb-3">
                <a href={repo} target="_blank" rel="noreferrer" className="text-light">
                  <GithubIcon />
                </a>
              </Col>
              <Col className="h2 mb-3">
                <a href={demo} target="_blank" rel="noreferrer" className="text-light">
                  <DemoIcon />
                </a>
              </Col>
            </Row>
          </Modal.Footer>
        </Container>
      </Modal>
    </>
  );
}
