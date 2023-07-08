import { useContext } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { ContactModal } from '.'
import { ModalContext } from '../context/ModalContext'
import { fadeIn } from '../utils'
import { PRE_FOOTER_BACKGROUND, PRE_FOOTER_GRAPHIC } from '../assets'

const PreFooterImage = ({ src, alt }) => (
  <motion.div initial="hidden" animate="show" variants={fadeIn()}>
    <Image src={src} alt={alt} id="connect-img" fluid />
  </motion.div>
)

const PreFooter = () => {
  const { openModal } = useContext(ModalContext)

  return (
    <Row className="overflow-hidden min-vh-50">
      <Col
        className="hero"
        style={{
          backgroundImage: `url(${PRE_FOOTER_BACKGROUND})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Row className="color-overlay d-flex justify-content-center align-items-center text-center px-md-3">
          <Col className="d-none d-md-block w-100">
            <PreFooterImage
              src={PRE_FOOTER_GRAPHIC}
              alt="graphic of the globe"
            />
          </Col>
          <Col className="d-flex flex-column px-3">
            <Row className="flex-column">
              <h3 className="text-gradient">I'm always looking to connect</h3>
              <p className="text-light text-shadow d-none d-md-block mt-2">
                Although I'm currently based in the US, I love making friends
                and working with teams from all around the globe.
              </p>
            </Row>

            <Row className="text-center flex justify-content-center">
              <motion.button
                className="button rounded-pill m-0 mt-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={openModal}
              >
                <ContactModal triggerText="Contact" />
              </motion.button>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default PreFooter
