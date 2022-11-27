import React from 'react';
import { Row } from 'react-bootstrap';

// Section01: large title header
const AboutSectionOne = () => {
  return (
    <Row className="p-md-5">
      <h1 className="text-light p-4">
        about<br></br>
        <span className="light-blue px-5">Justin</span>
      </h1>
    </Row>
  );
};

export default AboutSectionOne;
