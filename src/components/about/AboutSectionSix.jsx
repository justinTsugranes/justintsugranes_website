import { Row } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import { headShot03 } from '../../assets';

const AboutSectionSix = () => (
  <Row>
    <Parallax bgImage={headShot03} bgImageAlt="picture of a man in the desert" strength={500}>
      <div style={{ height: '750px' }} />
    </Parallax>
  </Row>
);

export default AboutSectionSix;
