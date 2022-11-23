import React from 'react';
import '../styles/Hero.css';
import { Row, Container, Col } from 'react-bootstrap';
import heroImage from '../img/heros/hero-index.png';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <Container fluid className="masthead" style={{ backgroundImage: `url(${heroImage})` }}>
      <Col>
        <Row className="color-overlay d-flex justify-content-center align-items-center h-100">
          <Col className="text-white text-center">
            {/* <h1 className="mb-3">Web Developer, Digital Media Creator</h1> */}
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
              style={{ fontSize: '4em' }}
            />
            {/* <h4 className="mb-3 light-blue">
              JavaScript - React.js - Bootstrap - Adobe Creative Cloud - Figma
            </h4> */}
            <TypeAnimation
              sequence={[
                2500,
                'JavaScript - React.js - Bootstrap - Adobe Creative Cloud - Figma',
                () => {
                  console.log('Done typing!'); // Place optional callbacks anywhere in the array
                }
              ]}
              wrapper="div"
              cursor={false}
              // repeat={Infinity}
              style={{ fontSize: '2em' }}
            />
          </Col>
        </Row>
      </Col>
    </Container>
  );
}
