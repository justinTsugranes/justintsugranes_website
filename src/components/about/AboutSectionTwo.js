import React from 'react';
import { Row } from 'react-bootstrap';
import heroAbout from '../../img/heros/hero-about.jpg';
import { Parallax } from 'react-parallax';

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
