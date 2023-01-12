import { Row } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import { headShot03 } from '../../assets';

// Section 06: hero image
const AboutSectionSix = () => (
  <Row>
    {/* Parallax component with background image and strength prop */}
    <Parallax bgImage={headShot03} bgImageAlt="picture of a man in the desert" strength={500}>
      {/* Div element to take up the specified height */}
      <div style={{ height: '750px' }} />
    </Parallax>
  </Row>
);

export default AboutSectionSix;

// HOW TO ADD SWIPER SLIDES

// import Swiper from 'swiper';

// const AboutSectionSix = () => {
//   // Use useEffect hook to initialize the swiper component when the component mounts
//   useEffect(() => {
//     new Swiper('.swiper-container', {
//       // Add any options you want here
//       // For example, to enable swiping between slides:
//       allowTouchMove: true,
//     });
//   }, []);

//   return (
//     <Row>
//       {/* Wrapping the parallax component in a div with the "swiper-slide" class */}
//       <div className="swiper-slide">
//         <Parallax bgImage={headShot03} bgImageAlt="picture of a man in the desert" strength={500}>
//           <div style={{ height: '750px' }} />
//         </Parallax>
//       </div>
//       {/* Add additional slides here */}
//       <div className="swiper-slide">
//         <Parallax bgImage={anotherImage} bgImageAlt="another image" strength={500}>
//           <div style={{ height: '750px' }} />
//         </Parallax>
//       </div>
//       {/* Swiper component */}
//       <div className="swiper-container">
//         {/* Swiper wrapper */}
//         <div className="swiper-wrapper">
//           {/* Slides go here */}
//           </div>
//         {/* Add pagination, navigation, and other controls here */}
//       </div>
//     </Row>
//   );
// };

// export default AboutSectionSix;
