import { HomeHero, Quote, ProjectsHome } from '../components'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
    >
      <HomeHero />

      <Quote />

      <ProjectsHome />
    </motion.div>
  )
}

export default Home
