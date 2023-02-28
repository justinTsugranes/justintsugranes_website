import { useRef } from 'react';
import { Row } from 'react-bootstrap';
import { staggerContainer, textVariant } from '../../utils/motion';
import { motion } from 'framer-motion';

const AboutSectionOne = () => {
  const ref = useRef(null);

  return (
    <Row className="section-container p-md-5" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        ref={ref}>
        <div className="justify-center relative z-10">
          <motion.h1 variants={textVariant(1.1)}>about</motion.h1>
          <motion.div variants={textVariant(1.2)} className="px-5">
            <h1 className="text-gradient">Justin</h1>
          </motion.div>
        </div>
      </motion.div>
    </Row>
  );
};

export default AboutSectionOne;
