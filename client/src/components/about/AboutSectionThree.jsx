import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import { useFetchData } from '../../hooks';

const AboutSectionThree = () => {
  const { data, error } = useFetchData(`*[_type == "about"]`);

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Container className="section p-3">
      <motion.div
        className="d-flex flex-column justify-content-center align-items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        variants={fadeIn('up', 'tween', 0.1, 1)}>
        <h2 className="mb-4 text-gradient">What I Do</h2>
        <p className="text-light fs-3 text-shadow" style={{ maxWidth: '75ch' }}>
          {data[0]?.bioOne}
        </p>
      </motion.div>
    </Container>
  );
};

export default AboutSectionThree;
