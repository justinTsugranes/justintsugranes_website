import { useState, useEffect } from 'react'
import { sanityClient } from '../../lib'
import { Row, Col } from 'react-bootstrap'
import { Parallax } from 'react-parallax'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion'
import { useFetchData } from '../../hooks'

const AboutSectionFour = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const query = "*[_type == 'images && title == 'about section four']"

    sanityClient.fetch(query).then((data) => {
      setData(data)
    })
    console.log(data)
  }, [])

  const { about } = useFetchData(`*[_type == "about"]`)

  return (
    <Row className="bg-secondary d-flex flex-column align-items-center justify-content-center flex-md-row">
      <Col>
        <Row>
          <Parallax
            bgImage={data[0]?.imgUrl?.url}
            bgImageAlt={data[0]?.altText}
            strength={300}
            fluid
            className="about-image shadow">
            <div className="about-headshot" style={{ height: '700px' }} />
          </Parallax>
        </Row>
      </Col>

      <motion.div
        className="col d-flex flex-column p-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        variants={fadeIn('up', 'tween', 0.1, 1)}>
        <h2 className="mb-4 text-gradient">My Background</h2>
        <p className="text-light fs-3 text-shadow" style={{ maxWidth: '75ch' }}>
          {about[0]?.bioTwo}
        </p>
      </motion.div>
    </Row>
  )
}

export default AboutSectionFour
