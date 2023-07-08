import {
  AboutIntroSection,
  AboutHeroSection,
  AboutSkillsSection,
  AboutBackgroundSection,
  AboutProjectsSection,
} from '../components/about'
import { motion } from 'framer-motion'

const About = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.05 } }}
  >
    <AboutIntroSection />
    <AboutHeroSection />
    <AboutSkillsSection />
    <AboutBackgroundSection />
    <AboutProjectsSection />
  </motion.div>
)

export default About
