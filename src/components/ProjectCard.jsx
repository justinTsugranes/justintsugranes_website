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

const ProjectCard = ({ index, imageUrl, title, descr, tech, repo, demo }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        centered
        fullscreen="xl-"
        aria-labelledby="contained-project-modal">
        <Container fluid className="bg-dark">
          <ModalHeader className="text-light">
            <Modal.Title>{title}</Modal.Title>
            <CloseButton variant="white" aria-label="Close" onClick={handleClose} />
          </ModalHeader>

          <ModalBody className="modal-lg text-light" id="modal-body">
            <Col>
              <Row>
                <a href={demo} target="_blank" rel="noreferrer">
                  <Image fluid src={imageUrl} alt="..." className="proj-card-img-modal" />
                </a>
              </Row>
              <Row>
                <p className="my-4">{descr}</p>
                <h5 className="key-tech-title orange-gradient mt-2">Key Tech</h5>
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
    </>
  );
};

export default ProjectCard;
