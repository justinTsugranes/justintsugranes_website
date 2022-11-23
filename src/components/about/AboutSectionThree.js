import React from 'react';
import userData from '../../constants/data.js';
import { Container, Col, Row } from 'react-bootstrap';

const AboutSectionThree = () => {
  return (
    <Container className="section-container d-flex align-items-center justify-content-between p-0">
      <Row className="d-sm-block">
        <Col className="mb-sm-4 light-blue">
          <h2>{userData.name}</h2>
        </Col>
        <Col className="text-light">
          <p>{userData.about.bioOne}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSectionThree;
