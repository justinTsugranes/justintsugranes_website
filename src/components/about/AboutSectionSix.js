import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import Headshot03 from '../../assets/img/headshots/headshot-03.jpg';

const AboutSectionSix = () => {
  return (
    <>
      <Container className="section-container" fluid>
        <Row>
          <Parallax bgImage={Headshot03} bgImageAlt="" strength={500}>
            <div style={{ height: '750px' }} />
          </Parallax>
        </Row>
      </Container>
    </>
  );
};

export default AboutSectionSix;
