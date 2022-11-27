import React from 'react';
import { Row } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import Headshot03 from '../../img/headshots/headshot-03.jpg';

const AboutSectionSix = () => {
  return (
    <Row className="mb-md-5">
      <Parallax bgImage={Headshot03} bgImageAlt="picture of a man in the desert" strength={500}>
        <div style={{ height: '750px' }} />
      </Parallax>
    </Row>
  );
};

export default AboutSectionSix;
