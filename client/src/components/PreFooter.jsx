import { Row, Col, Image } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { ContactModal } from '../components'
import { preFooterBackground, preFooterGraphic } from '../assets'

const PreFooter = () => {
  return (
    <div className="overflow-hidden min-vh-50 min-height-0">
      <Row
        className="pre-footer"
        style={{ backgroundImage: `url(${preFooterBackground})` }}
      >
        <Row className="color-overlay d-flex justify-content-center align-items-center text-center px-md-3">
          <Col className="d-none d-md-block w-100">
            <Image src={preFooterGraphic} alt="..." id="connect-img" />
          </Col>
          <Col className="d-flex flex-column px-3">
            <Row className="flex-column">
              <h3 className="text-gradient">
                I&apos;m always looking to connect
              </h3>
              <p className="text-light text-shadow d-none d-md-block mt-2">
                Although, I&apos;m currently based in the US, I love making
                friends and working with teams from all around the globe.
              </p>
            </Row>

            <Row className="text-center flex justify-content-center">
              <motion.button
                className="button rounded-pill m-0 mt-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ContactModal />
              </motion.button>
            </Row>
          </Col>
        </Row>
      </Row>
    </div>
  )
}

export default PreFooter
