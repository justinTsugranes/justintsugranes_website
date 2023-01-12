import { ProjectsAll, ProjectsShowcase } from '../components';
import { motion } from 'framer-motion';

const Projects = () => (
  // Wrapping the component in a motion.div element to animate it with Framer Motion
  <motion.div
    className="mb-5"
    // Initial animation state of the component
    initial={{ opacity: 0 }}
    // Animate the component to full opacity when it enters the viewport
    animate={{ opacity: 1 }}
    // Animate the component to 0 opacity and reduce its transition duration when it exits the viewport
    exit={{ opacity: 0, transition: { duration: 0.05 } }}>
    <ProjectsShowcase />
    {/* Show this heading only on large screens */}
    <h2 className="d-none d-lg-block text-gradient text-center m-0 my-5">Coding Projects</h2>
    <ProjectsAll />
  </motion.div>
);

export default Projects;
