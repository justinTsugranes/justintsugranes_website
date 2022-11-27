import React from 'react';
import userData from '../../constants/data.js';
import { Container, Row, Col } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import Headshot01 from '../../img/headshots/headshot-01.jpg';

const AboutSectionFour = () => {
  return (
    <Container fluid className="section-container p-0 bg-secondary">
      <Row className="d-flex flex-column align-items-center justify-content-between">
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
        <Col className="p-4 p-md-5">
          <Row className="">
            <Col className="light-blue">
              <h2 className="mb-4">My Background</h2>
            </Col>
            <Col className="text-light">
              <p>{userData.about.bioTwo}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSectionFour;
