import { motion } from 'framer-motion';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { projects } from '../constants/ProjectData';
import { ProjectCard } from './';

const ProjectsHome = () => {
  const navigate = useNavigate();

  return (
    <Row className="section section-container d-flex flex-column text-center">
      <Col>
        <h3 className="text-gradient py-3">Some of my recent projects</h3>
      </Col>

      <Col>
        <Row className="d-flex justify-content-center gap-5 row-cols-1 row-cols-md-3 row-cols-lg-5 my-3">
          {projects.slice(0, 8).map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </Row>
      </Col>

      <Col>
        <motion.button
          className="button rounded-pill mt-5"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('projects')}>
          View More Projects
        </motion.button>
      </Col>
    </Row>
  );
};

export default ProjectsHome;
