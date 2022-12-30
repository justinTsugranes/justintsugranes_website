import { Row } from 'react-bootstrap';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Section01: large title header
const AboutSectionOne = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Row className="section-container p-md-5" ref={ref}>
      <motion.h1
        className="text-light p-4"
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}>
        about<br></br>
        <span className="text-gradient px-5">Justin</span>
      </motion.h1>
    </Row>
  );
};

export default AboutSectionOne;
