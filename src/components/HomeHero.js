import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import heroImage from '../img/heros/hero-index.png';

export default function Hero() {
  return (
    <Container fluid className="p-0">
      <div className="masthead" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="color-overlay d-flex justify-content-center align-items-center h-100 p-0">
          {/* <Container> */}
          <Row className="align-items-center justify-content-between p-0">
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
                className="mb-3 light-blue"
              />
            </Col>
          </Row>
          {/* </Container> */}
        </div>
      </div>
    </Container>
  );
}
