import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { client } from '../lib/client';
import { ProjectCard } from '.';

const AllProjects = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == "project"]`);
        setProjectData(result);
      } catch (err) {
        console.error(err);
        setProjectData(null);
      }
    };
    fetchData();
  }, []);

  return (
    <Row className="d-flex justify-content-evenly row-cols-1 row-cols-md-3 row-cols-lg-5 gap-5 mb-3">
      {projectData ? (
        projectData.map((project, index) => (
          <ProjectCard key={project._id} {...project} index={index} projectData={projectData} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </Row>
  );
};

export default AllProjects;
