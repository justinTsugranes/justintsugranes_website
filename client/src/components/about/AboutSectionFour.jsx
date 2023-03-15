// import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Parallax } from 'react-parallax'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion'
import { useFetchData } from '../../hooks'
import { aboutFour } from '../../assets'

const AboutSectionFour = () => {
  const { data, error } = useFetchData(`*[title == "My Background"]`)

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <Row className="bg-secondary d-flex flex-column align-items-center justify-content-center flex-md-row">
      <Col>
        {/* <Row> */}
        <Parallax
          bgImage={aboutFour}
          bgImageAlt="about section four"
          strength={300}
          fluid
          className="about-image shadow"
        >
          <div className="about-headshot" style={{ height: '700px' }} />
        </Parallax>
        {/* </Row> */}
      </Col>

      <Col>
        <motion.div
          className="col d-flex flex-column p-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          variants={fadeIn('up', 'tween', 0.1, 1)}
        >
          <h2 className="mb-4 text-gradient">{data[0]?.title}</h2>
          <p
            className="text-light fs-3 text-shadow"
            style={{ maxWidth: '75ch' }}
          >
            {data[0]?.subtitle}
          </p>
        </motion.div>
      </Col>
    </Row>
  )
}

export default AboutSectionFour
