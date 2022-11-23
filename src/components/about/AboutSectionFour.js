import React from 'react';
import userData from '../../constants/data.js';
import { Container, Row, Col } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import Headshot01 from '../../img/headshots/headshot-01.jpg';

const AboutSectionFour = () => {
  return (
    <Container
      fluid
      className="section-container d-flex align-items-center justify-content-between p-0 bg-secondary">
      <Row className="d-sm-block d-md-flex">
        <Col className="mb-sm-4">
          <Parallax
            bgImage={Headshot01}
            bgImageAlt=""
            strength={300}
            fluid
            className="about-image shadow">
            <div style={{ height: '600px', width: '800px' }} />
          </Parallax>
        </Col>
        <Col className="p-md-5">
          <Container>
            <h2 className="mb-sm-4 light-blue">My Background</h2>
            <p className="text-light">{userData.about.bioTwo}</p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSectionFour;
