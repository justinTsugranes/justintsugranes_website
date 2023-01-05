import { about } from '../constants';

const Quote = () => (
  // Wrapping the quote card in a motion.div element to animate it with Framer Motion
  <div className="row d-flex justify-content-center my-5 py-5">
    {/* Creating a card with a quote and custom styles */}
    <div className="card quote-card w-75 bg-dark bg-gradient text-white rounded-3 border-0 m-5 shadow">
      <div className="mx-auto">
        <blockquote className="p-4">
          {/* Wrapping the quote in a motion.p element to animate it with Framer Motion */}
          <p className="text-shadow text-white text-center p-4 lh-lg fs-2">{about.quote}</p>
        </blockquote>
      </div>
    </div>
  </div>
);

export default Quote;
