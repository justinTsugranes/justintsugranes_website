/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
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
import { projects } from '../constants/ProjectData';
// import TechIcon from './TechIcon';

const ProjectCard = ({ index, imageUrl, title, descr, tech, repo, demo }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectData, setProjectData] = useState([]);

  // Load project data from data.js file on mount
  useEffect(() => {
    setProjectData(projects);
  }, []);

  const handlePrevious = ({ projectData }) => {
    const newIndex = currentIndex - 1;
    // Check if the new index is within the range of the project data array
    if (newIndex >= 0 && newIndex < projectData.length) {
      // Update the currentIndex state with the new index
      setCurrentIndex(newIndex);
    }
  };

  const handleNext = ({ projectData }) => {
    const newIndex = currentIndex + 1;
    // Check if the new index is within the range of the project data array
    if (newIndex >= 0 && newIndex < projectData.length) {
      // Update the currentIndex state with the new index
      setCurrentIndex(newIndex);
    }
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
        <motion.div className="card proj-card-container border-0" onClick={handleShow}>
          <motion.div className="text-center" id="title">
            {title}
          </motion.div>
          <img className="image proj-card-img shadow" src={imageUrl} alt={title} />
        </motion.div>
      </motion.div>

      {/* MODAL */}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        fullscreen="md-down"
        centered
        aria-labelledby="contained-project-modal"
        className="text-light">
        <Container fluid className="bg-dark">
          <ModalHeader>
            <Modal.Title className="text-uppercase text-gradient">{title}</Modal.Title>
            <CloseButton variant="white" aria-label="Close" onClick={handleClose} />
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
                {/* showing list icons */}
                {/* <ul className="d-flex">
                  {tech.split(', ').map((tech, i) => {
                    return <li key={i}>{tech}</li>;
                  })}
                </ul> */}
                {/* showing row icons */}
                {/* <div className="d-flex">
                  {tech.map((tech) => (
                    <div key={tech} className="mr-3">
                      <TechIcon tech={tech} />
                    </div>
                  ))}
                </div> */}
              </Row>
            </Col>
          </ModalBody>

          <ModalFooter className="border-0">
            <Row>
              {index > 0 && (
                <motion.div
                  className="col h2 mb-3"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                  <button onClick={handlePrevious} className="bg-transparent">
                    <i className="fas fa-angle-left text-gradient" />
                  </button>
                </motion.div>
              )}

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

              {index < projectData.length - 1 && (
                <motion.div
                  className="col h2 mb-3"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                  <button onClick={handleNext} className="bg-transparent">
                    <i className="fas fa-angle-right text-gradient" />
                  </button>
                </motion.div>
              )}
            </Row>
          </ModalFooter>
        </Container>
      </Modal>
    </>
  );
};

export default ProjectCard;
