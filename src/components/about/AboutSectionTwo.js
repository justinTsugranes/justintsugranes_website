import React from 'react';
import { Container } from 'react-bootstrap';
import heroAbout from '../../img/heros/hero-about.jpg';
import { Parallax } from 'react-parallax';

const AboutSectionTwo = () => {
  return (
    <Container fluid className="section-container p-0">
      <Parallax bgImage={heroAbout} bgImageAlt="" strength={400}>
        <div style={{ height: '750px' }} />
      </Parallax>
    </Container>
  );
};

export default AboutSectionTwo;
