import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Col, Row } from 'react-bootstrap'
import { useFetchData } from '../hooks'
import { ProjectCard } from './'

const ProjectsHome = () => {
  const navigate = useNavigate()

  const { data, error } = useFetchData(`*[_type == "project"]`)

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <motion.div className='row section-container d-flex flex-column text-center'>
      <Col>
        <h3 className='text-gradient py-3 mb-4'>Some of my recent projects</h3>
      </Col>

      <Col>
        <Row className='d-flex justify-content-center gap-5 row-cols-1 row-cols-md-3 row-cols-lg-5 my-3'>
          {data ? (
            data
              .slice(0, 8)
              .map((project) => <ProjectCard key={project._id} {...project} index={project._id} />)
          ) : error ? (
            <p>{error.message}</p>
          ) : (
            <p>Loading...</p>
          )}
        </Row>
      </Col>

      <motion.div className='col'>
        <motion.button
          className='button rounded-pill mt-5'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          onClick={() => navigate('projects')}
        >
          View More Projects
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default ProjectsHome
