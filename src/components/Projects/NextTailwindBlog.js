import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Modal, CloseButton } from 'react-bootstrap';
import projectData from '../../constants/ProjectData';
import GithubIcon from '../icons/GithubIcon';
import DemoIcon from '../icons/DemoIcon';

export default function NextTailwindBlog() {
  const { title, descr, tech, demo, repo, imageUrl } = projectData.nexttailwindblog;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="card-container border-0">
        <div className="" onClick={handleShow}>
          <div className="image-box">
            <Card.Img className="projCardImg" src={imageUrl} alt="" />
          </div>
          <Card.Body className="project-title text-box text-container d-flex flex-column justify-content-center">
            <h6>{title}</h6>
          </Card.Body>
        </div>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Container fluid className="border-0 m-0 p-0 bg-dark">
          <Modal.Header className="text-light border-0">
            <Modal.Title>{title}</Modal.Title>
            <CloseButton variant="white" aria-label="Close" onClick={handleClose} />
          </Modal.Header>

          <Modal.Body className="modal-lg text-light" id="modal-body">
            <a href={demo} target="_blank" rel="noreferrer">
              <img src={imageUrl} className="img-fluid" alt="..." />
            </a>
            <p className="mt-1">{descr}</p>
            <h5 className="key-tech-title text-warning">Key Tech</h5>
            <p>{tech}</p>
          </Modal.Body>

          <Modal.Footer className="border-0">
            <div className="h2 mb-3">
              <a href={repo} target="_blank" rel="noreferrer" className="text-light">
                <GithubIcon />
              </a>
            </div>
            <div className="h2 mb-3">
              <a href={demo} target="_blank" rel="noreferrer" className="text-light">
                <DemoIcon />
              </a>
            </div>
          </Modal.Footer>
        </Container>
      </Modal>
    </>
  );
}
