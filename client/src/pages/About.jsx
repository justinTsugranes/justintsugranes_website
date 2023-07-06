import {
  AboutSectionOne,
  AboutSectionTwo,
  AboutSectionThree,
  AboutSectionFour,
  AboutSectionFive,
} from '../components/about'
import { motion } from 'framer-motion'

const About = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.05 } }}
  >
    <AboutSectionOne />
    <AboutSectionTwo />
    <AboutSectionThree />
    <AboutSectionFour />
    <AboutSectionFive />
  </motion.div>
)

export default About
