import React from 'react';
import { Container } from 'react-bootstrap';

// Section01: large title header
const AboutSectionOne = () => {
  return (
    <Container className="section-container d-flex align-items-center">
      <h1 className="text-light">
        about<br></br>
        <span className="light-blue mx-5">Justin</span>
      </h1>
    </Container>
  );
};

export default AboutSectionOne;
