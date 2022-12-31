import { Row, Col } from 'react-bootstrap';
import { socialMedia, user } from '../constants';
import { motion } from 'framer-motion';

const Footer = () => (
  <Row>
    <Col className="p-5 text-center position-relative text-light ">
      <h2 className="text-uppercase mb-3 h3 text-gradient">{user.name}</h2>
      <p className="mb-5">{user.title}</p>
      <h3 className="text-uppercase h4 text-gradient">Get In Touch</h3>
      {/* Grid container */}
      <Row className="p-4 pb-0">
        {/* Section: Social media */}
        <div className="mb-4">
          {socialMedia.map((social) => (
            <motion.div
              key={social.id}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="btn btn-link btn-floating btn-lg m-1 icon">
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer"
                role="button"
                className="text-light">
                {social.icon}
              </a>
            </motion.div>
          ))}
        </div>
      </Row>
      <Row>
        <p className="text-secondary fs-6">Copyright © 2021 misfitDodo Media</p>
      </Row>
    </Col>
  </Row>
);

export default Footer;
