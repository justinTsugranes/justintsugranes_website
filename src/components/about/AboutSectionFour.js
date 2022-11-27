import React from 'react';
import userData from '../../constants/data.js';
import { Row, Col } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import Headshot01 from '../../img/headshots/headshot-01.jpg';

const AboutSectionFour = () => {
  return (
    <Row className="bg-secondary d-flex flex-column align-items-center justify-content-center flex-md-row mb-md-5">
      <Col>
        <Row>
          <Parallax
            bgImage={Headshot01}
            bgImageAlt="photo of a man"
            strength={300}
            fluid
            className="about-image shadow">
            <div className="about-headshot" style={{ height: '700px' }} />
          </Parallax>
        </Row>
      </Col>
      <Col className="d-flex flex-column p-4">
        <Col className="light-blue">
          <h3>My Background</h3>
        </Col>
        <Col className="text-light">
          <p>{userData.about.bioTwo}</p>
        </Col>
      </Col>
    </Row>
  );
};

export default AboutSectionFour;
