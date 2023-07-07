import { Row, Col } from 'react-bootstrap'
import { TypeAnimation } from 'react-type-animation'
import { HERO_INDEX } from '../assets'

const sequence1 = [1000, 'Web Developer, Digital Media Creator']
const sequence2 = [
  3750,
  'JavaScript - React.js - Node.js - MongoDB - TailwindCSS - Shopify',
]

const HomeHero = () => {
  return (
    <Row>
      <Col className="p-0">
        <div
          className="hero position-relative"
          style={{ backgroundImage: `url(${HERO_INDEX})` }}
        >
          <div className="color-overlay d-flex justify-content-center align-items-center text-center p-0">
            <Col className="text-white px-3">
              <TypeAnimation
                sequence={sequence1}
                wrapper="div"
                cursor={false}
                style={{ fontSize: '2.5em' }}
                className="text-shadow"
              />
              <TypeAnimation
                sequence={sequence2}
                wrapper="div"
                cursor={false}
                style={{ fontSize: '1.3em' }}
                className="text-gradient"
              />
            </Col>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default HomeHero
