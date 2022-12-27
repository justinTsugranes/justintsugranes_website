// Import Swiper React components
import { Swiper /* SwiperSlide */ } from 'swiper/react';
// import required modules
import { EffectCube, Pagination, Mousewheel, Keyboard } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import '../styles/MySwiper.css';

import { Container } from 'react-bootstrap';

// Import Images
// import { headShots } from '../assets';

const SwiperCube = () => (
  <Container>
    <Swiper
      effect={'cube'}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
      }}
      modules={[EffectCube, Pagination, Mousewheel, Keyboard]}
      mousewheel={true}
      keyboard={true}
      className="mySwiper">
      {/* {headShots.map((image) => (
        <SwiperSlide key={headShots.index}>
          <img src={image} alt="photo of a man" />
        </SwiperSlide>
      ))} */}
    </Swiper>
  </Container>
);

export default SwiperCube;
