import React from 'react';
import { Container, Card, Col, Row, Image } from 'react-bootstrap';
/* import projects for swiper */
import projectData from '../../constants/ProjectData.json';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import '../../styles/MySwiper.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function AboutSectionSeven() {
  return (
    <>
      <Container className="section-container about-section-seven" fluid>
        <Row>
          <h2 className="text-light mb-5 text-center">Always building things</h2>
        </Row>
        <Row>
          <div className="swiper-container">
            <Swiper
              // effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={4}
              spaceBetween={20}
              zoom={true}
              navigation={true}
              mousewheel={true}
              keyboard={true}
              pagination={{ clickable: true, dynamicBullets: true }}
              // coverflowEffect={{
              //   rotate: 20,
              //   stretch: 25,
              //   depth: 250,
              //   modifier: 1,
              //   slideShadows: true
              // }}
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
              /* Breakpoints for coverflow effect */
              // breakpoints={{
              //   700: {
              //     spaceBetween: 0,
              //     slidesPerView: 4
              //   },
              //   500: {
              //     spaceBetween: 100,
              //     slidesPerView: 2
              //   },
              //   411: {
              //     spaceBetween: 100,
              //     slidesPerView: 2
              //   },
              //   300: {
              //     spaceBetween: 0,
              //     slidesPerView: 1
              //   }
              // }}
              className="mySwiper">
              {projectData.map(({ imageUrl }, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Col className="col-lg p-0">
                      <Container className="mt-sm-1" fluid>
                        <Container fluid className="m-0 p-0">
                          <Card className="proj-card-container border-0">
                            <Image
                              fluid
                              variant="top"
                              className="proj-card-img proj-about hover-zoom"
                              src={imageUrl}
                              alt=""
                            />
                          </Card>
                        </Container>
                      </Container>
                    </Col>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </Row>
      </Container>
    </>
  );
}
