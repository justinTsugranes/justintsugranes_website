/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../styles/ProjectCards.css'
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
// import { GithubIcon, DemoIcon } from '../../assets';
import { motion } from 'framer-motion'
import { projects } from '../../constants/ProjectData'
// import TechIcon from './TechIcon';

const ProjectCard = ({ index, imageUrl, title, descr, tech, repo, demo }) => {
  const [show, setShow] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [projectData, setProjectData] = useState([])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const toggleShowModal = () => {
    setShowModal((prevShowModal) => !prevShowModal)
  }

  // Load project data from data.js file on mount
  useEffect(() => {
    setProjectData(projects)
  }, [])

  const handlePrevious = ({ projectData }) => {
    const newIndex = currentIndex - 1
    // Check if the new index is within the range of the project data array
    if (newIndex >= 0 && newIndex < projectData.length) {
      // Update the currentIndex state with the new index
      setCurrentIndex(newIndex)
    }
  }

  const handleNext = ({ projectData }) => {
    const newIndex = currentIndex + 1
    // Check if the new index is within the range of the project data array
    if (newIndex >= 0 && newIndex < projectData.length) {
      // Update the currentIndex state with the new index
      setCurrentIndex(newIndex)
    }
  }

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
  )
}

export default ProjectCard
