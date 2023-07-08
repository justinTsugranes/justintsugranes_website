import { useEffect, useRef } from 'react'
import { Container, Card, Col, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper'

import { useFetchData } from '../../hooks'
import { urlFor } from '../../lib'
import { Error } from '..'

function useSwiper() {
  const swiperRef = useRef(null)

  useEffect(() => {
    SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard])
  }, [])

  return swiperRef
}

const AboutSectionFive = () => {
  const swiperRef = useSwiper()

  const { data, error } = useFetchData(`*[_type == "project"]`)

  return (
    <Row className="section-container">
      <h2 className="text-gradient text-center mb-4">Always building things</h2>
      <Col className="swiper-container" style={{ height: '300px' }}>
        {error ? (
          <Error message={error.message} />
        ) : (
          <Swiper
            ref={swiperRef}
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
                spaceBetween: 5,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              '@1.50': {
                slidesPerView: 4,
                spaceBetween: 5,
              },
            }}
            className="mySwiper"
          >
            {data?.map(({ image, title, demoLink }, slideID) => (
              <SwiperSlide key={slideID}>
                <Col className="col-lg p-0 m-0">
                  <Container className="mt-sm-1" fluid>
                    <Container fluid className="m-0 p-0">
                      <a
                        href={demoLink}
                        rel="noreferrer"
                        target="_blank"
                        className="text-decoration-none"
                      >
                        <Card className="proj-card-container border-0">
                          <Card.Img
                            fluid="true"
                            variant="top"
                            className="proj-card-img proj-about hover-zoom"
                            src={urlFor(image)}
                            alt={title}
                            title={title}
                            style={{ height: '250px' }}
                          />
                        </Card>
                      </a>
                    </Container>
                  </Container>
                </Col>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Col>
    </Row>
  )
}

export default AboutSectionFive
