import { ProjectsAll, ProjectsShowcase } from '../components';

const Projects = () => (
  <div className="mb-5">
    <ProjectsShowcase />
    <h2 className="d-none d-lg-block text-gradient text-center m-0 my-5">Coding Projects</h2>
    <ProjectsAll />
  </div>
);

export default Projects;
