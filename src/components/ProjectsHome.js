import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Button, Card, Image } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import '../styles/ProjectCards.css';
import projectData from '../constants/ProjectData.json';
// import ProjectCards from './ProjectCards';

export default function ProjectCardsHome() {
  const [toggle, setToggle] = useState({ online: false, outMouse: false });
  const buttonScale = useSpring({
    transform: toggle.online ? 'scale(1.05)' : 'scale(1)'
  });

  const navigate = useNavigate();
  return (
    <Row className="section-container d-flex flex-column text-center">
      <Col>
        <h3 className="light-blue py-5 pb-3">Some of my recent projects</h3>
      </Col>

      <Col>
        <Row className="d-flex justify-content-center gap-5 row-cols-1 row-cols-md-3 row-cols-lg-5">
          {projectData.slice(0, 8).map(({ demo, imageUrl }, index) => {
            return (
              <Col key={index}>
                <a href={demo} rel="noreferrer" target="_blank" className="text-decoration-none">
                  <Card className="proj-card-container border-0">
                    <Image
                      fluid
                      variant="top"
                      className="proj-card-img hover-zoom"
                      src={imageUrl}
                      alt="..."
                    />

                    {/* <Card.Body className="light-blue text-uppercase fw-bold fs-4">
                      <Card.Title className="pt-3">{title}</Card.Title>
                    </Card.Body> */}
                  </Card>
                </a>
              </Col>
            );
          })}
        </Row>
      </Col>

      <Col className="py-5">
        <animated.div
          style={buttonScale}
          onMouseEnter={() => setToggle({ online: true })}
          onMouseLeave={() => setToggle({ online: false })}>
          <Button className="button rounded-pill" onClick={() => navigate('projects')}>
            View More Projects
          </Button>
        </animated.div>
      </Col>
    </Row>
  );
}
