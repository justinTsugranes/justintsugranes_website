import React from 'react';
import { Container } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import heroAbout from '../../assets/img/heros/hero-about.jpg';

const AboutSectionTwo = () => {
  return (
    <Container className="section-container" fluid>
      <Parallax bgImage={heroAbout} bgImageAlt="" strength={400}>
        <div style={{ height: '750px' }} />
      </Parallax>
    </Container>
  );
};

export default AboutSectionTwo;
