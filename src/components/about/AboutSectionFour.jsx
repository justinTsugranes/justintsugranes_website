import { Row, Col } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import userData from '../../constants/data.js';
import { headShot01 } from '../../assets/index';

const AboutSectionFour = () => (
  <Row className="section-container bg-secondary d-flex flex-column align-items-center justify-content-center flex-md-row">
    <Col>
      <Row>
        <Parallax
          bgImage={headShot01}
          bgImageAlt="photo of a man"
          strength={300}
          fluid
          className="about-image shadow">
          <div className="about-headshot" style={{ height: '700px' }} />
        </Parallax>
      </Row>
    </Col>
    <Col className="d-flex flex-column p-4">
      <h3 className="mb-4 light-blue">My Background</h3>
      <p className="text-light bioTwo fs-3">{userData.about.bioTwo}</p>
    </Col>
  </Row>
);

export default AboutSectionFour;
