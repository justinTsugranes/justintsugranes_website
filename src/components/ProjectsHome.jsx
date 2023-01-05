import { motion } from 'framer-motion';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { projects } from '../constants/ProjectData';
import { ProjectCard } from './';

const ProjectsHome = () => {
  const navigate = useNavigate();

  return (
    <motion.div className="row section-container d-flex flex-column text-center">
      <Col>
        <h3 className="text-gradient py-3 mb-4">Some of my recent projects</h3>
      </Col>

      <Col>
        {/* Row component used to create a row, with d-flex class for display: flex, justify-content-center for centering content, gap-5 class for gap between elements, row-cols-1 class for one column on small screens, row-cols-md-3 for three columns on medium screens, row-cols-lg-5 for five columns on large screens, and my-3 for margin */}
        <Row className="d-flex justify-content-center gap-5 row-cols-1 row-cols-md-3 row-cols-lg-5 my-3">
          {/* Mapping over the first 8 projects from the projects data and rendering a ProjectCard component for each project */}
          {projects.slice(0, 8).map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} projectData={projects} />
          ))}
        </Row>
      </Col>

      {/* motion.div element used to apply motion variants, with col class for grid column */}
      <motion.div className="col">
        {/* motion.button element used to apply motion variants to button, with rounded-pill class for round edges, mt-5 class for margin, and onClick event to navigate to the "projects" route */}
        <motion.button
          className="button rounded-pill mt-5"
          whileHover={{ scale: 1.2 }} //scale up by 20% on hover
          whileTap={{ scale: 0.9 }} //scale down by 10% on tap
          //spring transition with stiffness of 400 and damping of 10
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          onClick={() => navigate('projects')}>
          View More Projects
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsHome;
