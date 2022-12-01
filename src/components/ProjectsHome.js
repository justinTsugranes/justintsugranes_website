import '../styles/ProjectCards.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { Row, Col, Button } from 'react-bootstrap';
import data from '../constants/ProjectData';
import ProjectCard from '../components/ProjectCard';

function MapProjects() {
  const cards = data.slice(0, 8).map((card) => {
    return (
      <ProjectCard
        key={card.id}
        title={card.title}
        descr={card.descr}
        imageUrl={card.imageUrl}
        demo={card.demo}
        repo={card.repo}
        tech={card.tech}
      />
    );
  });
  return cards;
}

export default function ProjectsHome() {
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
          <MapProjects />
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
