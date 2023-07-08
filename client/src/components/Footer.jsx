import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { SOCIAL_MEDIA } from '../constants'
import { Error } from './'
import { motion } from 'framer-motion'
import { useFetchData } from '../hooks'

const Footer = () => {
  const { data, error } = useFetchData(`*[title == "Justin Tsugranes"]`)
  const currentYear = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
  })

  return (
    <Row className="py-5">
      <Col className="mx-auto text-center text-light">
        {error ? (
          <Error message={error.message} />
        ) : (
          <>
            <h2 className="text-uppercase mb-3 h3 text-gradient">
              {data?.[0]?.title}
            </h2>
            <p className="mb-5">{data?.[0]?.subtitle}</p>
            <h3 className="text-uppercase h4 text-gradient">Get In Touch</h3>

            <Row className="d-flex justify-content-around py-4 pb-0">
              <div className="mb-4">
                {SOCIAL_MEDIA.map((social) => (
                  <motion.div
                    key={social.id}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className="btn btn-link btn-floating btn-lg m-1 icon"
                  >
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      role="button"
                      className="text-light btn-outline-light"
                    >
                      {social.icon}
                    </a>
                  </motion.div>
                ))}
              </div>
            </Row>

            <p className="fs-6 mb-0">
              <a
                href="https://misfitdodo.com"
                target="_blank"
                rel="noreferrer"
                className="text-secondary"
              >
                &copy; {currentYear} misfitDodo Media
              </a>
            </p>
          </>
        )}
      </Col>
    </Row>
  )
}

export default Footer
