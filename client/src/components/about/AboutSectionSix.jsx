// import { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { Parallax } from 'react-parallax'
// import { sanityClient } from '../../lib'
import { aboutSix } from '../../assets'

// Section 06: hero image
const AboutSectionSix = () => {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   const query = "*[_type == 'images']"

  //   sanityClient.fetch(query).then((data) => {
  //     setData(data)
  //   })
  // }, [])

  return (
    <Row>
      <Parallax
        // bgImage={data[3]?.imgUrl?.url}
        bgImage={aboutSix}
        bgImageAlt="picture of a man in the desert"
        strength={500}
      >
        <div style={{ height: '750px' }} />
      </Parallax>
    </Row>
  )
}

export default AboutSectionSix
