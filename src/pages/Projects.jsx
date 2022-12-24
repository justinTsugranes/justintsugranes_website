import ProjectsShowcase from '../components/ProjectsShowcase';
import AllProjects from '../components/ProjectsAll';

const Projects = () => (
  <>
    <ProjectsShowcase />
    <h2 className="d-none d-lg-block light-blue text-center m-0">Coding Projects</h2>
    <AllProjects />
  </>
);

export default Projects;
