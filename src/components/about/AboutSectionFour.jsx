import { Row, Col } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import { about } from '../../constants';
import { headShot01 } from '../../assets';

const AboutSectionFour = () => {
  return (
    <Row className="bg-secondary d-flex flex-column align-items-center justify-content-center flex-md-row">
      <Col>
        <Row>
          <Parallax
            bgImage={headShot01}
            bgImageAlt="photo of a man"
            strength={300}
            fluid
            className="about-image shadow">
            <div className="about-headshot" style={{ height: '700px' }} />
          </Parallax>
        </Row>
      </Col>
      <div className="col d-flex flex-column p-4">
        <h3 className="mb-4 text-gradient">My Background</h3>
        <p className="text-light bioTwo fs-3">{about.bioTwo}</p>
      </div>
    </Row>
  );
};

export default AboutSectionFour;

// WITH FRAMER MOTION
// import { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { Row, Col } from 'react-bootstrap';
// import { Parallax } from 'react-parallax';
// import { about } from '../../constants';
// import { headShot01 } from '../../assets';

// const AboutSectionFour = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <Row
//       className="bg-secondary d-flex flex-column align-items-center justify-content-center flex-md-row"
//       ref={ref}>
//       <Col>
//         <Row>
//           <Parallax
//             bgImage={headShot01}
//             bgImageAlt="photo of a man"
//             strength={300}
//             fluid
//             className="about-image shadow">
//             <div className="about-headshot" style={{ height: '700px' }} />
//           </Parallax>
//         </Row>
//       </Col>
//       <motion.div
//         className="col d-flex flex-column p-4"
//         style={{
//           transform: isInView ? 'none' : 'translateX(-200px)',
//           opacity: isInView ? 1 : 0,
//           transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
//         }}
//       >
//         <h3 className="mb-4 text-gradient">My Background</h3>
//         <p className="text-light bioTwo fs-3">{about.bioTwo}</p>
//       </motion.div>
//     </Row>
//   );
// };

// export default AboutSectionFour;
