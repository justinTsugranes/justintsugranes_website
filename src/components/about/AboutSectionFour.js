import React from 'react';
import userData from '../../constants/data.js';
import { Container, Row, Col } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import Headshot01 from '../../img/headshots/headshot-01.jpg';

const AboutSectionFour = () => {
  return (
    <Container className="section-container p-0" fluid>
      <Row>
        <Col>
          <Parallax
            bgImage={Headshot01}
            bgImageAlt=""
            strength={300}
            className="about-image img-fluid shadow">
            <div style={{ height: '600px', width: '800px' }} />
          </Parallax>
        </Col>
        <Col>
          <h2 className="light-blue mt-3">My Background</h2>
          <p className="pt-4 text-light">{userData.about.bioTwo}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSectionFour;
