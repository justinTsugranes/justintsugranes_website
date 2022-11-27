import React from 'react';
import userData from '../../constants/data.js';
import { Col, Row } from 'react-bootstrap';

const AboutSectionThree = () => {
  return (
    // <Row className="d-sm-block d-flex align-items-center justify-content-between">
    <Row className="d-block p-3 p-md-5">
      <Col className="mb-xs-4 light-blue">
        <h3>What I Do</h3>
      </Col>
      <Col className="text-light">
        <p>{userData.about.bioOne}</p>
      </Col>
    </Row>
  );
};

export default AboutSectionThree;
