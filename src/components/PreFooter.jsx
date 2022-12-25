import { useState } from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import { ContactModal } from '../components';
import { preFooterImg, preFooterGraphic } from '../assets';

const PreFooter = () => {
  const [toggle, setToggle] = useState({ online: false, outMouse: false });
  const buttonScale = useSpring({
    transform: toggle.online ? 'scale(1.05)' : 'scale(1)'
  });
  return (
    <Row>
      <div className="pre-footer" style={{ backgroundImage: `url(${preFooterImg})` }}>
        <Row className="color-overlay d-flex justify-content-center align-items-center text-center px-md-3">
          <Col className="d-none d-md-block">
            <Image src={preFooterGraphic} fluid alt="graphic of the world" id="connect-img" />
          </Col>

          <Col className="d-flex flex-column px-3">
            <Row>
              <h3 className="light-blue">I&apos;m always looking to connect</h3>
              <p className="text-light d-none d-md-block mt-2">
                Although, I&apos;m currently based in the US, I love making friends and working with
                teams from all around the globe.
              </p>
            </Row>

            <Row className="text-center">
              <animated.div
                style={buttonScale}
                onMouseEnter={() => setToggle({ online: true })}
                onMouseLeave={() => setToggle({ online: false })}>
                <Button className="button rounded-pill m-0 mt-4">
                  <ContactModal />
                </Button>
              </animated.div>
            </Row>
          </Col>
        </Row>
      </div>
    </Row>
  );
};

export default PreFooter;
