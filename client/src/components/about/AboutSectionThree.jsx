import { Container } from 'react-bootstrap';
import { about } from '../../constants';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

// AboutSectionThree: displays a brief description of what the user does
const AboutSectionThree = () => {
  return (
    // Container element from react-bootstrap
    <Container className="section p-3">
      {/* Wrapping the content in a motion.div element to apply motion variants */}
      <motion.div
        // Setting up the layout of the content with flexbox
        className="d-flex flex-column justify-content-center align-items-center"
        // Initial state is "hidden"
        initial="hidden"
        // When the component comes into view, the state changes to "show"
        whileInView="show"
        // When the component comes into view (when it takes up 25% of the viewport), the state change occurs
        viewport={{ once: false, amount: 0.25 }}
        // Applying the fadeIn motion object
        variants={fadeIn('up', 'tween', 0.1, 1)}>
        {/* Title element */}
        <h2 className="mb-4 text-gradient">What I Do</h2>
        {/* Description element */}
        <p className="text-light fs-3 text-shadow" style={{ maxWidth: '75ch' }}>
          {about.bioOne}
        </p>
      </motion.div>
    </Container>
  );
};

export default AboutSectionThree;
