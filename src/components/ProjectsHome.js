import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProjectCards.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProjectCards from './ProjectCards';
import { useSpring, animated } from 'react-spring';

export default function ProjectCardsHome() {
  const [toggle, setToggle] = useState({ online: false, outMouse: false });
  const buttonScale = useSpring({
    transform: toggle.online ? 'scale(1.05)' : 'scale(1)'
  });
  const navigate = useNavigate();
  return (
    <Container fluid className="section-container text-center p-0">
      <Row>
        <h3 className="light-blue">Some of my recent projects</h3>
      </Row>
      <Row className="my-4">
        <ProjectCards />
      </Row>
      <Row>
        <Col>
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
    </Container>
  );
}
