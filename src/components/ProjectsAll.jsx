// import '../styles/App.css';
import { Row } from 'react-bootstrap';
import projects from '../constants/ProjectData';
import ProjectCard from './ProjectCard';

export default function AllProjects() {
  return (
    <>
      <Row className="d-flex justify-content-evenly row-cols-1 row-cols-md-3 row-cols-lg-5 gap-5 mb-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} {...project} index={index} />
        ))}
      </Row>
    </>
  );
}
