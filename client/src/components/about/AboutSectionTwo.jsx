import { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { Parallax } from 'react-parallax'
import { sanityClient } from '../../lib'

const AboutSectionTwo = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const query = "*[_type == 'images' && title == 'about hero image']"

    sanityClient.fetch(query).then((data) => {
      setData(data)
    })
  }, [])

  return (
    <Row>
      <Parallax
        bgImage={data[0]?.imgUrl?.url}
        bgImageAlt={data[0]?.altText}
        strength={500}
        className="h-75">
        <div style={{ height: '75vh' }} />
      </Parallax>
    </Row>
  )
}

export default AboutSectionTwo
