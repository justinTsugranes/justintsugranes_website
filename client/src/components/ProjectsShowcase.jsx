import { Container, Row, Col, Image } from 'react-bootstrap'
import { motion } from 'framer-motion'
import {
  ReactIcon,
  JsIcon,
  NodeIcon,
  HtmlIcon,
  CssIcon,
  BootstrapIcon,
  DockerIcon,
  FigmaIcon,
  Shopify,
  MongoIcon,
  NextIcon,
  TailwindIcon,
  PROGRAMMER_GRAPHIC,
} from '../assets'

const iconRows = [
  [ReactIcon, NextIcon, JsIcon, NodeIcon],
  [HtmlIcon, CssIcon, BootstrapIcon, TailwindIcon],
  [MongoIcon, DockerIcon, Shopify, FigmaIcon],
]

const ProjectsShowcase = () => {
  return (
    <Container className="py-5">
      <Row className="d-flex align-items-center justify-content-around text-light text-center text-md-center">
        <Col>
          <Row className="text-center">
            {/* title on small-medium screens */}
            <h2 className="text-gradient d-lg-none">Coding Projects</h2>
            {/* title on large screens */}
            <h2 className="d-none d-lg-block">
              <span className="text-gradient">Some Tech</span>
              <br /> I&apos;ve Worked With
            </h2>
          </Row>

          {/* icon rows */}
          <Row className="d-none d-lg-block px-5">
            {iconRows.map((row, rowIndex) => (
              <Row
                key={rowIndex}
                className="mt-3 d-flex justify-content-evenly"
              >
                {row.map((Icon, colIndex) => (
                  <Col key={colIndex} className="col">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Icon />
                    </motion.div>
                  </Col>
                ))}
              </Row>
            ))}
          </Row>
        </Col>

        <Col>
          <Image className="w-75" fluid src={PROGRAMMER_GRAPHIC} />
        </Col>
      </Row>
    </Container>
  )
}

export default ProjectsShowcase
