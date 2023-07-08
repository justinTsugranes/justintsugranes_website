import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion'
import { useFetchData } from '../../hooks'
import { Error } from '..'

const AboutSectionThree = () => {
  const { data, error } = useFetchData(`*[title == "What I Do"]`)

  return (
    <Container className="section p-3">
      {error ? (
        <Error message={error.message} />
      ) : (
        <motion.div
          className="d-flex flex-column justify-content-center align-items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          variants={fadeIn('up', 'tween', 0.1, 1)}
        >
          <h2 className="mb-4 text-gradient">{data?.[0]?.title}</h2>
          <p
            className="text-light fs-3 text-shadow"
            style={{ maxWidth: '75ch' }}
          >
            {data?.[0]?.subtitle}
          </p>
        </motion.div>
      )}
    </Container>
  )
}

export default AboutSectionThree
