import { ProjectsAll, ProjectsShowcase } from '../components';
import { motion } from 'framer-motion';

const Projects = () => (
  <motion.div
    className="mb-5"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
    <ProjectsShowcase />
    <h2 className="d-none d-lg-block text-gradient text-center m-0 my-5">Coding Projects</h2>
    <ProjectsAll />
  </motion.div>
);

export default Projects;
