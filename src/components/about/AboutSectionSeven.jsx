import { Container, Card, Col, Row, Image } from 'react-bootstrap';
/* import projects for swiper */
import projects from '../../constants/ProjectData';
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

const AboutSectionSeven = () => (
  <Row className="section-container">
    <h3 className="light-blue text-center mb-4">Always building things</h3>
    <div className="swiper-container">
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        spaceBetween={20}
        zoom={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        pagination={{ clickable: true, dynamicBullets: true }}
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
        className="mySwiper">
        {projects.map(({ imageUrl, demo }, slideID) => {
          return (
            <SwiperSlide key={slideID}>
              <Col className="col-lg p-0 m-0">
                <Container className="mt-sm-1" fluid>
                  <Container fluid className="m-0 p-0">
                    <a
                      href={demo}
                      rel="noreferrer"
                      target="_blank"
                      className="text-decoration-none">
                      <Card className="proj-card-container border-0">
                        <Image
                          fluid
                          variant="top"
                          className="proj-card-img proj-about hover-zoom"
                          src={imageUrl}
                          alt=""
                        />
                      </Card>
                    </a>
                  </Container>
                </Container>
              </Col>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  </Row>
);

export default AboutSectionSeven;
