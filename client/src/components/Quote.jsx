import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { useFetchData } from '../hooks'
import Loading from './Loading'
import Error from './Error'

const QUOTE_QUERY = `*[title == "Home Page Quote"]`
const ANIMATION_DURATION = 0.3

const Quote = () => {
  const { data, error, isLoading } = useFetchData(QUOTE_QUERY)

  return (
    <>
      {error ? (
        <Error message={error.message} />
      ) : isLoading ? (
        <Loading />
      ) : (
        <motion.div
          className="row d-flex justify-content-center my-5 py-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: ANIMATION_DURATION }}
          variants={fadeIn('up', 'tween', 0.1, 1)}
        >
          <div className="card quote-card w-75 bg-dark bg-gradient text-white rounded-3 border-0 m-5 shadow">
            <div className="mx-auto">
              <blockquote className="p-4">
                <p className="text-shadow text-white text-center p-4 lh-lg fs-2">
                  {data?.[0]?.subtitle}
                </p>
              </blockquote>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Quote
