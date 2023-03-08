// import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Parallax } from 'react-parallax'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion'
// import { useFetchData } from '../../hooks'
// import { sanityClient } from '../../lib'
import { aboutFour } from '../../assets'

const AboutSectionFour = () => {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   const query = "*[_type == 'images && title == 'about section four']"

  //   sanityClient.fetch(query).then((data) => {
  //     setData(data)
  //   })
  //   console.log(data)
  // }, [])

  // const { about } = useFetchData(`*[_type == "about"]`)

  return (
    <Row className="bg-secondary d-flex flex-column align-items-center justify-content-center flex-md-row">
      <Col>
        {/* <Row> */}
        <Parallax
          // bgImage={data[0]?.imgUrl?.url}
          // bgImageAlt={data[0]?.altText}
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
          <h2 className="mb-4 text-gradient">My Background</h2>
          <p
            className="text-light fs-3 text-shadow"
            style={{ maxWidth: '75ch' }}
          >
            I hold a Master of Arts degree, served 13 years as a member of the
            US Army Band, and have over 20 years of combined experience working
            with government entities, Fortune 500 companies, and international
            organizations across several industries, including media &
            entertainment, IT, sales, marketing, real estate, and hospitality.
          </p>
        </motion.div>
      </Col>
    </Row>
  )
}

export default AboutSectionFour
