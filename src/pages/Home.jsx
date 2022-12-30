import { HomeHero, Quote, ProjectsHome } from '../components';
import { motion } from 'framer-motion';

const Home = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <HomeHero />
    <Quote />
    <ProjectsHome />
  </motion.div>
);

export default Home;
