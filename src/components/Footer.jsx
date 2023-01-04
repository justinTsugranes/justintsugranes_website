import { Row, Col } from 'react-bootstrap';
import { socialMedia, user } from '../constants';
import { motion } from 'framer-motion';

// Footer component that displays social media links and copyright information
const Footer = () => (
  <Row>
    <Col className="p-5 text-center position-relative text-light ">
      {/* Display user name */}
      <h2 className="text-uppercase mb-3 h3 text-gradient">{user.name}</h2>
      {/* Display user title */}
      <p className="mb-5">{user.title}</p>
      {/* Display heading for social media section */}
      <h3 className="text-uppercase h4 text-gradient">Get In Touch</h3>
      {/* Grid container */}
      <Row className="p-4 pb-0">
        {/* Section: Social media */}
        <div className="mb-4">
          {/* Map through social media links and display them as buttons */}
          {socialMedia.map((social) => (
            <motion.div
              key={social.id}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="btn btn-link btn-floating btn-lg m-1 icon">
              {/* Link to social media page */}
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer"
                role="button"
                className="text-light">
                {/* Display social media icon */}
                {social.icon}
              </a>
            </motion.div>
          ))}
        </div>
      </Row>
      {/* Display copyright information */}
      <Row>
        <p className="text-secondary fs-6">Copyright © 2021 misfitDodo Media</p>
      </Row>
    </Col>
  </Row>
);

export default Footer;
