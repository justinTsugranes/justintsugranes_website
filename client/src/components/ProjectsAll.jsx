import { Row, Col } from 'react-bootstrap'
import { useFetchData } from '../hooks'
import { ProjectCard, Error } from './'

const ProjectsAll = () => {
  const { data, error } = useFetchData(`*[_type == "project"]`)

  if (error) {
    return <Error message={error.message} />
  }

  return (
    <Row className="d-flex justify-content-evenly row-cols-1 row-cols-md-3 row-cols-lg-5 gap-5 mb-3">
      {data ? (
        data.map((project, index) => (
          <Col key={project._id}>
            <ProjectCard {...project} index={index} projectData={data} />
          </Col>
        ))
      ) : (
        <p>No projects found.</p>
      )}
    </Row>
  )
}

export default ProjectsAll
