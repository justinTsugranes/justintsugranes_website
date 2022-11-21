import React from 'react';
import Row from 'react-bootstrap/Row';
import { data } from './Data';
import ProjectCard from './Project';

const ProjectsContainer = () => {
  return (
    <div className="row-wrapper">
      <Row>
        {data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Row>
    </div>
  );
};

export default ProjectsContainer;
