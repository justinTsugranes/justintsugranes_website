// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCube, Pagination, Mousewheel, Keyboard } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import '../styles/MySwper.css';
// Import Image
import Headshot01 from '../public/img/headshots/headshot-01.jpg';
import Headshot02 from '../public/img/headshots/headshot-02.jpg';
import Headshot03 from '../public/img/headshots/headshot-03.jpg';
import Headshot04 from '../public/img/headshots/headshot-04.jpg';
import Headshot05 from '../public/img/headshots/headshot-05.jpg';
import Headshot06 from '../public/img/headshots/headshot-06.jpg';
import Headshot07 from '../public/img/headshots/headshot-07.jpg';
import Headshot08 from '../public/img/headshots/headshot-08.jpg';
import { Container } from 'react-bootstrap';

export default function SwiperCube() {
  return (
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
          <img src={Headshot01} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Headshot02} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Headshot03} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Headshot04} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Headshot05} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Headshot06} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Headshot07} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Headshot08} />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
