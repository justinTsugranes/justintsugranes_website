import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import heroImage from '../img/heros/hero-index.png';

export default function Hero() {
  return (
    <Row>
      <div className="hero m-0 p-0" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="color-overlay d-flex justify-content-center align-items-center text-center p-0">
          <Col className="text-white px-3">
            <TypeAnimation
              sequence={[
                'Web Developer, Digital Media Creator',
                () => {
                  console.log('Done typing!'); // Place optional callbacks anywhere in the array
                }
              ]}
              wrapper="div"
              cursor={false}
              style={{ fontSize: '2.5em' }}
            />
            <TypeAnimation
              sequence={[
                2750,
                'JavaScript - React.js - Bootstrap - Adobe Creative Cloud - Figma', //
                () => {
                  console.log('Done typing!'); // Place optional callbacks anywhere in the array
                }
              ]}
              wrapper="div"
              cursor={false}
              style={{ fontSize: '1.25em' }}
              className="light-blue"
            />
          </Col>
        </div>
      </div>
    </Row>
  );
}
