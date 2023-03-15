import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { useFetchData } from '../hooks'

const Quote = () => {
  const { data, error } = useFetchData(`*[title == "Home Page Quote"]`)

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <motion.div
      className="row d-flex justify-content-center my-5 py-5"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={fadeIn('up', 'tween', 0.1, 1)}
    >
      <div className="card quote-card w-75 bg-dark bg-gradient text-white rounded-3 border-0 m-5 shadow">
        <div className="mx-auto">
          <blockquote className="p-4">
            <p className="text-shadow text-white text-center p-4 lh-lg fs-2">
              {data[0]?.subtitle}
            </p>
          </blockquote>
        </div>
      </div>
    </motion.div>
  )
}

export default Quote
