import PropTypes from 'prop-types'
import { useCallback, useState } from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  CloseButton,
  Row,
  Col,
} from 'react-bootstrap'
import { motion } from 'framer-motion'
import { GithubIcon, DemoIcon } from '../assets'
import { urlFor } from '../lib'
import '../styles/projects.css'

const ProjectCard = ({
  index,
  image,
  title,
  description,
  technologies,
  demoLink,
  repoLink,
}) => {
  const [show, setShow] = useState(false)

  const handleClose = useCallback(() => setShow(false), [])
  const handleShow = useCallback(() => setShow(true), [])

  return (
    <>
      <motion.div
        className="col"
        key={index}
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
      >
        <motion.div
          className="card proj-card-container border-0"
          onClick={handleShow}
        >
          <motion.div className="text-center" id="title">
            {title}
          </motion.div>
          <img
            className="image proj-card-img shadow"
            src={urlFor(image)}
            alt={title}
          />
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
        className="text-light"
      >
        <Container fluid className="bg-dark">
          <ModalHeader>
            <Modal.Title className="text-uppercase text-gradient">
              {title}
            </Modal.Title>
            <CloseButton
              variant="white"
              aria-label="Close"
              onClick={handleClose}
            />
          </ModalHeader>

          <ModalBody>
            <Col>
              <Row>
                <a href={demoLink} target="_blank" rel="noreferrer">
                  <img
                    src={urlFor(image)
                      .auto('format')
                      .fit('max')
                      .width(720)
                      .toString()}
                    alt={title}
                    className="proj-card-img-modal fluid rounded-4"
                  />
                </a>
              </Row>
              <Row>
                <p className="my-4">{description}</p>
                <h5 className="key-tech-title text-gradient mt-2">KEY TECH</h5>
                <p className="mb-0">{technologies.join(', ')}</p>
              </Row>
            </Col>
          </ModalBody>

          <ModalFooter className="border-0">
            <Row>
              <motion.div
                className="col h2 mb-3"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-light"
                >
                  <GithubIcon />
                </a>
              </motion.div>
              <motion.div
                className="col h2 mb-3"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-light"
                >
                  <DemoIcon />
                </a>
              </motion.div>
            </Row>
          </ModalFooter>
        </Container>
      </Modal>
    </>
  )
}

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  demoLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
}

export default ProjectCard
