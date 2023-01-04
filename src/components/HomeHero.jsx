import { Row, Col } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import { heroIndex } from '../assets';

const HomeHero = () => (
  <Row>
    {/* Hero section */}
    <div className="hero m-0 p-0" style={{ backgroundImage: `url(${heroIndex})` }}>
      {/* Color overlay for text */}
      <div className="color-overlay d-flex justify-content-center align-items-center text-center p-0">
        <Col className="text-white px-3">
          {/* Typing animation for title */}
          <TypeAnimation
            sequence={[
              'Web Developer, Digital Media Creator',
              () => {
                console.log('Done typing!');
              }
            ]}
            wrapper="div"
            cursor={false}
            style={{ fontSize: '2.5em' }}
          />
          {/* Typing animation for technologies */}
          <TypeAnimation
            sequence={[
              2750,
              'JavaScript - React.js - Node.js - MongoDB - TailwindCSS - Figma', //
              () => {
                console.log('Done typing!');
              }
            ]}
            wrapper="div"
            cursor={false}
            style={{ fontSize: '1.25em' }}
            className="text-gradient"
          />
        </Col>
      </div>
    </div>
  </Row>
);

export default HomeHero;
