import React from 'react'
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
} from 'react-bootstrap'
import { motion } from 'framer-motion'

import { GithubIcon, DemoIcon } from '../assets'
import './../styles/ProjectCards.css'

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
            <p className="mb-0">{projects.tech}</p>
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
)

export default ProjectModal
