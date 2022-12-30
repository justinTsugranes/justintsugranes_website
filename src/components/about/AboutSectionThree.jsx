import { Row } from 'react-bootstrap';
import { about } from '../../constants';
import { motion } from 'framer-motion';

const AboutSectionThree = () => (
  <Row className="section p-3">
    <motion.div
      className="d-flex flex-column justify-content-center align-items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}>
      <h3 className="mb-4 text-gradient">What I Do</h3>
      <p className="bioOne text-light fs-3">{about.bioOne}</p>
    </motion.div>
  </Row>
);

export default AboutSectionThree;
