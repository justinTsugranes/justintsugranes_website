import { ProjectsAll, ProjectsShowcase } from '../components';

const Projects = () => (
  <>
    <ProjectsShowcase />
    <h2 className="d-none d-lg-block light-blue text-center m-0">Coding Projects</h2>
    <ProjectsAll />
  </>
);

export default Projects;
