/* eslint-disable react/prop-types */
import { useState } from 'react';
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
// import { projects } from '../constants/ProjectData';

const ProjectCard = ({ index, projects }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

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
        <motion.div className="card proj-card-container border-0" onClick={toggleShowModal}>
          <motion.div className="text-center">{projects.title}</motion.div>
          <img
            className="image proj-card-img shadow"
            src={projects.imageUrl}
            alt={projects.title}
          />
        </motion.div>
      </motion.div>

      <ProjectModal
        show={showModal}
        onHide={toggleShowModal}
        title={projects.title}
        imageUrl={projects.imageUrl}
        descr={projects.descr}
        tech={projects.tech}
        repo={projects.repo}
        demo={projects.demo}
      />
    </>
  );
};

const ProjectModal = ({ show, onHide, projects }) => (
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
        <Modal.Title className="text-uppercase text-gradient">{projects.title}</Modal.Title>
        <CloseButton variant="white" aria-label="Close" onClick={onHide} />
      </ModalHeader>

      <ModalBody>
        <Col>
          <Row>
            <a href={projects.demo} target="_blank" rel="noreferrer">
              <Image
                fluid
                src={projects.imageUrl}
                alt="..."
                className="proj-card-img-modal rounded-4"
              />
            </a>
          </Row>
          <Row>
            <p className="my-4">{projects.descr}</p>
            <h5 className="key-tech-title text-gradient mt-2">KEY TECH</h5>
            {/* showing tech titles */}
            <p className="mb-0">{projects.tech}</p>
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
            <a href={projects.repo} target="_blank" rel="noreferrer" className="text-light">
              <GithubIcon />
            </a>
          </motion.div>
          <motion.div
            className="col h2 mb-3"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
            <a href={projects.demo} target="_blank" rel="noreferrer" className="text-light">
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
