import { useEffect, useState } from 'react'
import { sanityClient } from '../lib'
import { Row, Col, Image } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { ContactModal } from '../components'

const PreFooter = () => {
  const [data, setData] = useState([])
  const [graphic, setGraphic] = useState([])

  useEffect(() => {
    const query = "*[_type == 'images' && title == 'pre footer image']"

    sanityClient.fetch(query).then((data) => {
      setData(data)
    })
  }, [])

  useEffect(() => {
    const query = "*[_type == 'graphics' && title == 'globe graphic']"

    sanityClient.fetch(query).then((data) => {
      setGraphic(data)
    })
  }, [])

  return (
    <Row className="overflow-hidden min-vh-50 min-height-0">
      <Row className="pre-footer" style={{ backgroundImage: `url(${data[0]?.imgUrl?.url})` }}>
        <Row className="color-overlay d-flex justify-content-center align-items-center text-center px-md-3">
          {/* Display a hidden column with an image on medium and up screens */}
          <Col className="d-none d-md-block w-100">
            <Image src={graphic[0]?.imgUrl?.url} alt={graphic[0]?.altText} id="connect-img" />
          </Col>
          {/* Display a column with text and a button on all screens */}
          <Col className="d-flex flex-column px-3">
            <Row className="flex-column">
              {/* Display a heading with a gradient text color */}
              <h3 className="text-gradient">I&apos;m always looking to connect</h3>
              {/* Display a paragraph with light text color on medium and up screens */}
              <p className="text-light text-shadow d-none d-md-block mt-2">
                Although, I&apos;m currently based in the US, I love making friends and working with
                teams from all around the globe.
              </p>
            </Row>

            {/* Display a centered button with a hover and tap animation */}
            <Row className="text-center flex justify-content-center">
              <motion.button
                className="button rounded-pill m-0 mt-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <ContactModal />
              </motion.button>
            </Row>
          </Col>
        </Row>
      </Row>
    </Row>
  )
}

export default PreFooter
