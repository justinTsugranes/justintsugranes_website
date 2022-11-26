import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import heroImage from '../img/heros/hero-index.png';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <Container fluid className="masthead" style={{ backgroundImage: `url(${heroImage})` }}>
      <Col>
        <Row className="color-overlay d-flex justify-content-center align-items-center h-100">
          <Col className="text-white text-center">
            <TypeAnimation
              sequence={[
                'Web Developer, Digital Media Creator',
                () => {
                  console.log('Done typing!'); // Place optional callbacks anywhere in the array
                }
              ]}
              wrapper="div"
              cursor={false}
              // repeat={Infinity}
              style={{ fontSize: '3em' }}
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
              // repeat={Infinity}
              style={{ fontSize: '1.5em' }}
              className="mb-3 light-blue"
            />
          </Col>
        </Row>
      </Col>
    </Container>
  );
}
