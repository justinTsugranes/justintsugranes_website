import { HomeHero, Quote, ProjectsHome } from '../components'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
    >
      <HomeHero />
      {/* TODO: slide from the left, text fade in from bottom*/}
      <Quote />
      {/* TODO: title fade in from bottom */}
      {/* TODO: view more projects button fade in from bottom */}
      <ProjectsHome />
    </motion.div>
  )
}

export default Home
