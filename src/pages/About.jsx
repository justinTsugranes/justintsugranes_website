import {
  AboutSectionOne,
  AboutSectionTwo,
  AboutSectionThree,
  AboutSectionFour,
  // AboutSectionFive,
  AboutSectionSix,
  AboutSectionSeven
} from '../components/about';
import { motion } from 'framer-motion';

const About = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <AboutSectionOne />
    <AboutSectionTwo />
    <AboutSectionThree />
    <AboutSectionFour />
    {/* <AboutSectionFive /> */}
    <AboutSectionSix />
    <AboutSectionSeven />
  </motion.div>
);

export default About;
