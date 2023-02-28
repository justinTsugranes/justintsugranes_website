import React from 'react'
import { Row } from 'react-bootstrap'
import { useFetchData } from '../hooks'
import { ProjectCard } from './'

const AllProjects = () => {
  const { data, error } = useFetchData(`*[_type == "project"]`)

  return (
    <Row className="d-flex justify-content-evenly row-cols-1 row-cols-md-3 row-cols-lg-5 gap-5 mb-3">
      {data ? (
        data.map((project, index) => (
          <ProjectCard key={project._id} {...project} index={index} projectData={data} />
        ))
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <p>Loading...</p>
      )}
    </Row>
  )
}

export default AllProjects
