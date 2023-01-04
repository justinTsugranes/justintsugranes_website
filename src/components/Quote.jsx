import { about } from '../constants';
import { motion } from 'framer-motion';

const Quote = () => (
  // Wrapping the quote card in a motion.div element to animate it with Framer Motion
  <motion.div className="row bg-dark d-flex justify-content-center pt-5">
    {/* Creating a card with a quote and custom styles */}
    <div className="card quote-card w-75 bg-dark bg-gradient text-white rounded-3 border-0 border-danger m-5 shadow">
      <div className="d-flex align-items-center">
        <blockquote className="blockquote text-center p-4">
          {/* Wrapping the quote in a motion.p element to animate it with Framer Motion */}
          <motion.p className="fs-3">{about.quote}</motion.p>
        </blockquote>
      </div>
    </div>
  </motion.div>
);

export default Quote;
