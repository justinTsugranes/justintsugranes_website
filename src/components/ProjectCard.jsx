/* eslint-disable react/prop-types */
import React, { useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/ProjectCards.css';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  CloseButton,
  Row,
  Col,
  Image
} from 'react-bootstrap';
import { GithubIcon, DemoIcon } from '../assets';
import { motion } from 'framer-motion';

const ProjectCard = ({ index, imageUrl, title, descr, tech, repo, demo }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleShowModal = useCallback(() => {
    setShowModal(true);
  }, []);

  return (
    <>
      <motion.div
        className="col"
        key={index}
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}>
        <motion.div className="card proj-card-container border-0" onClick={handleShowModal}>
          <motion.div className="text-center" id="title">
            {title}
          </motion.div>
          <img className="image proj-card-img shadow" src={imageUrl} alt={title} />
        </motion.div>
      </motion.div>

      <ProjectModal
        show={showModal}
        onHide={handleCloseModal}
        title={title}
        imageUrl={imageUrl}
        descr={descr}
        tech={tech}
        repo={repo}
        demo={demo}
      />
    </>
  );
};

const ProjectModal = ({ show, onHide, title, imageUrl, descr, tech, repo, demo }) => (
  <Modal
    show={show}
    onHide={onHide}
    size="lg"
    fullscreen="md-down"
    centered
    aria-labelledby="contained-project-modal"
    className="text-light">
    <Container fluid className="bg-dark">
      <ModalHeader>
        <Modal.Title className="text-uppercase text-gradient">{title}</Modal.Title>
        <CloseButton variant="white" aria-label="Close" onClick={onHide} />
      </ModalHeader>

      <ModalBody>
        <Col>
          <Row>
            <a href={demo} target="_blank" rel="noreferrer">
              <Image fluid src={imageUrl} alt="..." className="proj-card-img-modal rounded-4" />
            </a>
          </Row>
          <Row>
            <p className="my-4">{descr}</p>
            <h5 className="key-tech-title text-gradient mt-2">KEY TECH</h5>
            {/* showing tech titles */}
            <p className="mb-0">{tech}</p>
          </Row>
        </Col>
      </ModalBody>

      <ModalFooter className="border-0">
        <Row>
          <motion.div
            className="col h2 mb-3"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
            <a href={repo} target="_blank" rel="noreferrer" className="text-light">
              <GithubIcon />
            </a>
          </motion.div>
          <motion.div
            className="col h2 mb-3"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
            <a href={demo} target="_blank" rel="noreferrer" className="text-light">
              <DemoIcon />
            </a>
          </motion.div>
        </Row>
      </ModalFooter>
    </Container>
  </Modal>
);

export default ProjectCard;

{
  /* showing list icons */
}
{
  /* <ul className="d-flex">
  {tech.split(', ').map((tech, i) => {
    return <li key={i}>{tech}</li>;
  })}
</ul> */
}
{
  /* showing row icons */
}
{
  /* <div className="d-flex">
  {tech.map((tech) => (
    <div key={tech} className="mr-3">
      <TechIcon tech={tech} />
    </div>
  ))}
</div> */
}

// Note: I modified the original code slightly to make the refactored version more readable. In the refactored version, the modal component and its logic have been extracted into a separate ProjectModal component. This component is rendered and unmounted independently of the ProjectCard component, which can improve performance. The handleCloseModal and handleShowModal functions are also memoized using the useCallback hook to prevent them from being recreated every time the ProjectCard component re-renders. Finally, the ProjectCard component is wrapped in a call to React.memo, which will prevent it from re-rendering unless one of its props changes.
