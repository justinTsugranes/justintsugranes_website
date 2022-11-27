import React from 'react';
import { Container } from 'react-bootstrap';
import Hero from '../components/HomeHero';
import ProjectsHome from '../components/ProjectsHome';
import Quote from '../components/Quote';

const Home = () => {
  return (
    <Container fluid className="p-0">
      <Hero />
      <Quote />
      <ProjectsHome />
    </Container>
  );
};

export default Home;
