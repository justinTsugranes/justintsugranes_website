// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCube, Pagination, Mousewheel, Keyboard } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import '../styles/MySwiper.css';

import { Container } from 'react-bootstrap';

// Import Images
import {
  headShot01,
  headShot02,
  headShot03,
  headShot04,
  headShot05,
  headShot06,
  headShot07,
  headShot08
} from '../assets';

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
      <SwiperSlide>
        <img src={headShot01} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={headShot02} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={headShot03} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={headShot04} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={headShot05} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={headShot06} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={headShot07} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={headShot08} />
      </SwiperSlide>
    </Swiper>
  </Container>
);

export default SwiperCube;
