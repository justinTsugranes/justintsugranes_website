import { useRef } from 'react';
import { Row } from 'react-bootstrap';
// import styles from '../../styles';
import { staggerContainer, textVariant } from '../../utils/motion';
import { motion } from 'framer-motion';

// Section01: large title header
const AboutSectionOne = () => {
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  return (
    <Row className="section-container p-md-5" ref={ref}>
      {/* <motion.h1
        className="text-light p-4"
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}>
        about<br></br>
        <span className="text-gradient px-5">Justin</span>
      </motion.h1> */}
      {/*  */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        ref={ref}>
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)}>about</motion.h1>
          <motion.div variants={textVariant(1.2)} className="text-gradient px-5">
            <h1>Justin</h1>
          </motion.div>
        </div>
      </motion.div>
    </Row>
  );
};

export default AboutSectionOne;
