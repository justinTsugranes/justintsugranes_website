import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import Headshot03 from '../../img/headshots/headshot-03.jpg';

const AboutSectionSix = () => {
  return (
    <Container className="section-container p-0 m-0" fluid>
      <Row>
        <Parallax bgImage={Headshot03} bgImageAlt="" strength={500} fluid>
          <div style={{ height: '750px' }} />
        </Parallax>
      </Row>
    </Container>
  );
};

export default AboutSectionSix;
