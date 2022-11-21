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
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

export default function AboutSectionSeven() {
  return (
    <>
      <Container className="section-container about-section-seven" fluid>
        <Row>
          <h2 className="text-light mb-5 text-center">Always building things</h2>
        </Row>
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
          {projectData.slice(0, 8).map(({ title, imageUrl }, index) => {
            return (
              <SwiperSlide key={index}>
                <Col className="col-sm p-0">
                  <Container className="mt-sm-1" fluid>
                    <Container fluid className="m-0 p-0">
                      <Card className="proj-card-container border-0">
                        <Image
                          fluid
                          variant="top"
                          className="proj-card-img hover-zoom"
                          src={imageUrl}
                          alt=""
                        />
                        <Card.Body className="d-flex flex-column justify-content-center align-content-center light-blue text-uppercase fw-bold">
                          <Card.Title>{title}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Container>
                  </Container>
                </Col>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </>
  );
}
