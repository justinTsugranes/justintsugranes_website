import { Row, Col } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import { about } from '../../constants';
import { headShot01 } from '../../assets';

const AboutSectionFour = () => (
  <Row className="bg-secondary d-flex flex-column align-items-center justify-content-center flex-md-row">
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
      <h3 className="mb-4 text-gradient">My Background</h3>
      <p className="text-light bioTwo fs-3">{about.bioTwo}</p>
    </Col>
  </Row>
);

export default AboutSectionFour;
