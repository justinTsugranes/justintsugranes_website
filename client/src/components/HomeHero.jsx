import { useEffect, useState } from 'react'
import { sanityClient } from '../lib'
import { Row, Col } from 'react-bootstrap'
import { TypeAnimation } from 'react-type-animation'

const HomeHero = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const query = "*[_type == 'images' && title == 'home hero image']"

    sanityClient.fetch(query).then((data) => {
      setData(data)
    })
  }, [])

  return (
    <Row>
      <Col className='p-0'>
        <div
          className='hero position-relative'
          style={{ backgroundImage: `url(${data[0]?.imgUrl?.url})` }}
        >
          <div className='color-overlay d-flex justify-content-center align-items-center text-center p-0'>
            <Col className='text-white px-3'>
              <TypeAnimation
                sequence={[1000, 'Web Developer, Digital Media Creator', () => {}]}
                wrapper='div'
                cursor={false}
                style={{ fontSize: '2.5em' }}
                className='text-shadow'
              />
              <TypeAnimation
                sequence={[
                  3750,
                  'JavaScript - React.js - Node.js - MongoDB - TailwindCSS - Figma',
                  () => {},
                ]}
                wrapper='div'
                cursor={false}
                style={{ fontSize: '1.3em' }}
                className='text-gradient'
              />
            </Col>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default HomeHero
