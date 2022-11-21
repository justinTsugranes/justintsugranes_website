// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Hero from '../components/HomeHero';
// import ProjectsHome from '../components/Projects-Home';
import Quote from '../components/Quote';
import ProjectCard from '../components/Projects/New Project/NewTest';

const Home = () => {
  return (
    <Container fluid className="p-0 m-0">
      <Hero />
      <Quote />
      {/* <ProjectsHome /> */}
      <ProjectCard />
    </Container>
  );
};

export default Home;
