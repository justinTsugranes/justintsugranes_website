import { Row } from 'react-bootstrap';
import { projects } from '../constants/ProjectData';
import { ProjectCard } from './';

// component to display all project cards in the projects section
const AllProjects = () => (
  // use flexbox to evenly distribute project cards in rows
  <Row className="d-flex justify-content-evenly row-cols-1 row-cols-md-3 row-cols-lg-5 gap-5 mb-3">
    {/* map through project data to create a project card component for each project */}
    {projects.map((project, index) => (
      <ProjectCard key={project.id} {...project} index={index} />
    ))}
  </Row>
);

export default AllProjects;
