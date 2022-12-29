import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { Row, Col, Button } from 'react-bootstrap';
// import '../styles/ProjectCards.css';
import { projects } from '../constants/ProjectData';
import { ProjectCard } from './';

const ProjectsHome = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState({ online: false, outMouse: false });
  const buttonScale = useSpring({
    transform: toggle.online ? 'scale(1.05)' : 'scale(1)'
  });

  return (
    <Row className="section-container d-flex flex-column text-center">
      <Col>
        <h3 className="text-gradient py-3">Some of my recent projects</h3>
      </Col>

      <Col>
        <Row className="d-flex justify-content-center gap-5 row-cols-1 row-cols-md-3 row-cols-lg-5 my-3">
          {projects.slice(0, 8).map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </Row>
      </Col>

      <Col>
        <animated.div
          style={buttonScale}
          onMouseEnter={() => setToggle({ online: true })}
          onMouseLeave={() => setToggle({ online: false })}>
          <Button className="button rounded-pill mt-5" onClick={() => navigate('projects')}>
            View More Projects
          </Button>
        </animated.div>
      </Col>
    </Row>
  );
};

export default ProjectsHome;
