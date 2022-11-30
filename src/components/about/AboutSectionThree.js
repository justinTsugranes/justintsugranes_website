import React from 'react';
import { Row } from 'react-bootstrap';
import userData from '../../constants/data.js';

const AboutSectionThree = () => {
  return (
    <Row className="p-3 section-container">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h3 className="mb-4 light-blue">What I Do</h3>
        <p className="bioOne text-light fs-3">{userData.about.bioOne}</p>
      </div>
    </Row>
  );
};

export default AboutSectionThree;
