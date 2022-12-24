import { Row } from 'react-bootstrap';
import { about } from '../../constants/index.js';

const AboutSectionThree = () => (
  <Row className="p-3 section-container">
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h3 className="mb-4 light-blue">What I Do</h3>
      <p className="bioOne text-light fs-3">{about.bioOne}</p>
    </div>
  </Row>
);

export default AboutSectionThree;
