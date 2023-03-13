import {
  AboutSectionOne,
  AboutSectionTwo,
  AboutSectionThree,
  // AboutSectionSix,
  AboutSectionSeven,
  AboutSectionFour,
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
    {/* <AboutSectionSix /> */}
    <AboutSectionSeven />
  </motion.div>
)

export default About
