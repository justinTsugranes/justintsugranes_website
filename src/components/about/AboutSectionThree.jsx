import { useRef } from 'react';
import { Row } from 'react-bootstrap';
import { about } from '../../constants';
import { motion, useInView } from 'framer-motion';

const AboutSectionThree = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Row className="section p-3" ref={ref}>
      <motion.div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}>
        <h3 className="mb-4 text-gradient">What I Do</h3>
        <p className="bioOne text-light fs-3">{about.bioOne}</p>
      </motion.div>
    </Row>
  );
};

export default AboutSectionThree;
