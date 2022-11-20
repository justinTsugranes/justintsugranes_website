import React from 'react';
import { Container, Row } from 'react-bootstrap';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import '../../styles/MySwiper.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
/* import projects for swiper */
import CrashCourses from '../Projects/CrashCourses';
import FrontendBootcamp from '../Projects/FrontendBootcamp';
import LandingPage from '../Projects/LandingPage';
import MegaMask from '../Projects/MegaMask';
import NextTailwindBlog from '../Projects/NextTailwindBlog';
import PasswordGenerator from '../Projects/PasswordGenerator';
import ReactTodo from '../Projects/ReactTodo';
import Recipes from '../Projects/BreakfastRecipes';

export default function AboutSectionSeven() {
  return (
    <>
      <Container className="section-container about-section-seven" fluid>
        <Row>
          <h2 className="text-light mb-5 text-center">Always building things</h2>
        </Row>
        <Row>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            zoom={true}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            pagination={{
              clickable: true
            }}
            loop={true}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 5
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 5
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 5
              },
              '@1.50': {
                slidesPerView: 4,
                spaceBetween: 5
              }
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper">
            <SwiperSlide>
              <CrashCourses />
            </SwiperSlide>
            <SwiperSlide>
              <FrontendBootcamp />
            </SwiperSlide>
            <SwiperSlide>
              <LandingPage />
            </SwiperSlide>
            <SwiperSlide>
              <MegaMask />
            </SwiperSlide>
            <SwiperSlide>
              <NextTailwindBlog />
            </SwiperSlide>
            <SwiperSlide>
              <PasswordGenerator />
            </SwiperSlide>
            <SwiperSlide>
              <ReactTodo />
            </SwiperSlide>
            <SwiperSlide>
              <Recipes />
            </SwiperSlide>
          </Swiper>
        </Row>
      </Container>
    </>
  );
}
