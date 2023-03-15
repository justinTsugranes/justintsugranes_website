import { Row } from 'react-bootstrap'
import { Parallax } from 'react-parallax'
import { aboutTwo } from '../../assets'

const AboutSectionTwo = () => {
  return (
    <Row>
      <Parallax
        bgImage={aboutTwo}
        bgImageAlt="about section two"
        strength={500}
        className="h-75"
      >
        <div style={{ height: '75vh' }} />
      </Parallax>
    </Row>
  )
}

export default AboutSectionTwo
