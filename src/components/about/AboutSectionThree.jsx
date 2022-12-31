import { Row } from 'react-bootstrap';
import { about } from '../../constants';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

const AboutSectionThree = () => {
  return (
    <Row className="section p-3">
      <motion.div
        className="d-flex flex-column justify-content-center align-items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        variants={fadeIn('up', 'tween', 0.1, 1)}>
        <h3 className="mb-4 text-gradient">What I Do</h3>
        <p className="bioOne text-light fs-3">{about.bioOne}</p>
      </motion.div>
    </Row>
  );
};

export default AboutSectionThree;
