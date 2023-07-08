import { Row } from 'react-bootstrap'
import { Parallax } from 'react-parallax'
import { ABOUT_HERO } from '../../assets'

const AboutSectionTwo = () => {
  const renderCustomImage = (bgImage, bgImageAlt) => (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center bottom',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
      }}
      alt={bgImageAlt}
    />
  )

  return (
    <Row>
      <Parallax
        bgImage={ABOUT_HERO}
        bgImageAlt="young man with beard in white fedora overlooking yosemite mountains"
        strength={500}
        className="h-75"
        renderLayer={(percentage) =>
          renderCustomImage(ABOUT_HERO, 'custom image')
        }
      >
        <div style={{ height: '75vh' }} />
      </Parallax>
    </Row>
  )
}

export default AboutSectionTwo
