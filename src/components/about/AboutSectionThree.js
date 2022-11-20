import React from 'react';
import userData from '../../constants/data.js';
import { Container, Col } from 'react-bootstrap';

const AboutSectionThree = () => {
  return (
    <Container className="section-container d-flex align-items-center justify-content-between">
      <Col className="mx-3 col-md-3 light-blue">
        <h2>{userData.name}</h2>
      </Col>
      <Col className="mx-1 px-1 text-light">
        <p>{userData.about.bioOne}</p>
      </Col>
    </Container>
  );
};

export default AboutSectionThree;
