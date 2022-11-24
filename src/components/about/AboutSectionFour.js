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
        <Col>
          <Parallax
            bgImage={Headshot01}
            bgImageAlt="photo of a man"
            strength={300}
            fluid
            className="image about-image shadow">
            <div className="about-headshot" />
          </Parallax>
        </Col>
        <Col className="mb-sm-4 p-md-5">
          <Row className="d-sm-block p-sm-4">
            <Col className="mb-sm-4 light-blue">
              <h2 className="mb-4 light-blue">My Background</h2>
            </Col>
            <Col className="text-light">
              <p className="text-light">{userData.about.bioTwo}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSectionFour;
