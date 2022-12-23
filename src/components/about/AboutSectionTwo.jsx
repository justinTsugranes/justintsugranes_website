import { Row } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import heroAbout from '../../img/heros/hero-about.jpg';

const AboutSectionTwo = () => {
  return (
    <Row>
      <Parallax bgImage={heroAbout} bgImageAlt="a man overlooking the forest" strength={500}>
        <div style={{ height: '75vh' }} />
      </Parallax>
    </Row>
  );
};

export default AboutSectionTwo;
