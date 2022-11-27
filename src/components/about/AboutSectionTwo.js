import React from 'react';
import { Row } from 'react-bootstrap';
import heroAbout from '../../img/heros/hero-about.jpg';
import { Parallax } from 'react-parallax';

const AboutSectionTwo = () => {
  return (
    <Row>
      <Parallax bgImage={heroAbout} bgImageAlt="" strength={400}>
        <div style={{ height: '750px' }} />
      </Parallax>
    </Row>
  );
};

export default AboutSectionTwo;
