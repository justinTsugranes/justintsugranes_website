import { useEffect, useRef } from 'react'
import { Container, Card, Col, Row } from 'react-bootstrap'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import '../../styles/MySwiper.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper'

// import { useFetchData } from '../../hooks'
// import { urlFor } from '../../lib'

function useSwiper() {
  const swiperRef = useRef(null)

  useEffect(() => {
    SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard])
  }, [])

  return swiperRef
}

const AboutSectionSeven = () => {
  const swiperRef = useSwiper()

  // const { data, error } = useFetchData(`*[_type == "project"]`)

  // if (error) {
  //   return <p>{error.message}</p>
  // }

  return (
    <Row className="section-container">
      <h2 className="text-gradient text-center mb-4">Always building things</h2>
      <Col className="swiper-container" style={{ height: '300px' }}>
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
          {/* For each item in the data array, create a new SwiperSlide element and pass in the properties of the current item as props */}
          {/* {data.map(({ image, title, demoLink }, slideID) => {
            return (
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
                            fluid
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
            )
          })} */}
        </Swiper>
      </Col>
    </Row>
  )
}

export default AboutSectionSeven
