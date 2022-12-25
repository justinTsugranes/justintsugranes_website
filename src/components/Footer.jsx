import { Row, Col } from 'react-bootstrap';
import { socialMedia, user } from '../constants';

const Footer = () => (
  <Row>
    <Col className="p-5 text-center position-relative text-light ">
      <h2 className="text-uppercase mb-3 h3 light-blue">{user.name}</h2>
      <p className="mb-5">{user.title}</p>
      <h3 className="text-uppercase h4 light-blue">Get In Touch</h3>
      {/* Grid container */}
      <Row className="p-4 pb-0">
        {/* Section: Social media */}
        <Col className="mb-4">
          {socialMedia.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              role="button"
              className="btn btn-link btn-floating btn-lg text-light m-1 icon">
              {social.icon}
            </a>
          ))}
        </Col>
      </Row>
      <Row>
        <p className="text-secondary fs-6">Copyright © 2021 misfitDodo Media</p>
      </Row>
    </Col>
  </Row>
);

export default Footer;
