// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from '../components/HomeHero';
import ProjectsHome from '../components/Projects-Home';
import Quote from '../components/Quote';

const Home = () => {
  return (
    <>
      <Hero />
      <Quote />
      <ProjectsHome />
    </>
  );
};

export default Home;
