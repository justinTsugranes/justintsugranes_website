/* eslint-disable react/prop-types */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CloseButton, Modal, Container, Col, Row, Image } from 'react-bootstrap';
// import projectData from '../../constants/ProjectData';
import projectData from '../constants/ProjectData.json';
import DemoIcon from '../components/icons/DemoIcon';

import GithubIcon from '../components/icons/GithubIcon';

const ProjectModal = (props) => {
  const { title, descr, tech, demo, repo, imageUrl } = projectData.recipes;

  console.log('PROPS in MODAL', props);
  return (
    <>
      <Modal
        show={props.show}
        cancel={props.close}
        size="lg"
        centered
        aria-labelledby="contained-project-modal">
        <Container fluid className="border-0 m-0 p-0 bg-dark">
          <Modal.Header className="text-light border-0">
            <Modal.Title>{title}</Modal.Title>
            <CloseButton variant="white" aria-label="Close" onClick={props.close} />
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
};

export default ProjectModal;
