import React from 'react';
import userData from '../../constants/data.js';
import { Row } from 'react-bootstrap';

const AboutSectionThree = () => {
  return (
    <Row className="p-3 p-md-5">
      <div className="m-md-5 p-md-5 d-flex flex-column justify-content-center align-items-center">
        {/* <Col> */}
        <h3 className="mb-xs-4 light-blue">What I Do</h3>
        {/* </Col> */}
        {/* <Col className="text-light"> */}
        <p className="bioOne text-light fs-3">{userData.about.bioOne}</p>
        {/* </Col> */}
      </div>
    </Row>
  );
};

export default AboutSectionThree;
