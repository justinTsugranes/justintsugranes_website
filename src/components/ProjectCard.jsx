/* eslint-disable react/prop-types */
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Container, CloseButton, Row, Card, Col, Image } from 'react-bootstrap';
import { GithubIcon, DemoIcon } from './icons/index';

export default function ProjectCard({ index, imageUrl, title, descr, tech, repo, demo, close }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col key={index}>
        <Card className="proj-card-container border-0" onClick={handleShow}>
          <Image
            fluid
            variant="top"
            className="proj-card-img hover-zoom shadow"
            src={imageUrl}
            alt={title}
          />
        </Card>
      </Col>

      {/* MODAL */}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        centered
        aria-labelledby="contained-project-modal">
        <Container fluid className="border-0 m-0 bg-dark">
          <Modal.Header className="text-light border-0">
            <Modal.Title>{title}</Modal.Title>
            <CloseButton variant="white" aria-label="Close" onClick={close} />
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
                <h5 className="key-tech-title text-warning mt-2">Key Tech</h5>
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
