// import { Row, Card } from 'react-bootstrap';
import { about } from '../constants';
import { motion } from 'framer-motion';

const Quote = () => (
  <motion.div className="row bg-dark d-flex justify-content-center pt-5">
    <div className="card quote-card w-75 bg-dark bg-gradient text-white rounded-3 border-0 border-danger m-5 shadow">
      <div className="d-flex align-items-center">
        <blockquote className="blockquote text-center p-4">
          <motion.p className="fs-3">{about.quote}</motion.p>
        </blockquote>
      </div>
    </div>
  </motion.div>
);

export default Quote;
