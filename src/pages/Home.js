// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Hero from '../components/HomeHero';
import ProjectsHome from '../components/ProjectsHome';
import Quote from '../components/Quote';

const Home = () => {
  return (
    <Container fluid className="p-0 m-0">
      <Hero />
      <Quote />
      <ProjectsHome />
    </Container>
  );
};

export default Home;
