import { useRef } from 'react';
import { Row } from 'react-bootstrap';
import { staggerContainer, textVariant } from '../../utils/motion';
import { motion } from 'framer-motion';

// Section01: large title header
const AboutSectionOne = () => {
  // Use ref hook to reference the Row element
  const ref = useRef(null);

  return (
    // Row element with ref prop set to ref hook
    <Row className="section-container p-md-5" ref={ref}>
      {/* Wrapping the content in a motion.div element to apply motion variants */}
      <motion.div
        // Applying the staggerContainer motion object
        variants={staggerContainer}
        // Initial state is "hidden"
        initial="hidden"
        // When the component comes into view, the state changes to "show"
        whileInView="show"
        // When the component comes into view (when it takes up 25% of the viewport), the state change occurs
        viewport={{ once: true, amount: 0.25 }}
        // Ref prop set to ref hook
        ref={ref}>
        <div className="justify-center relative z-10">
          {/* Applying the textVariant motion object to the h1 element */}
          <motion.h1 variants={textVariant(1.1)}>about</motion.h1>
          {/* Applying the textVariant motion object to the div element */}
          <motion.div variants={textVariant(1.2)} className="px-5">
            <h1 className="text-gradient">Justin</h1>
          </motion.div>
        </div>
      </motion.div>
    </Row>
  );
};

export default AboutSectionOne;
