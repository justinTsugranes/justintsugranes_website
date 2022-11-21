import React from 'react';
import '../styles/About.css';
import { Container } from 'react-bootstrap';
import AboutSectionOne from '../components/about/AboutSectionOne';
import AboutSectionTwo from '../components/about/AboutSectionTwo';
import AboutSectionThree from '../components/about/AboutSectionThree';
import AboutSectionFour from '../components/about/AboutSectionFour';
// import AboutSectionFive from '../components/about/AboutSectionFive';
import AboutSectionSix from '../components/about/AboutSectionSix';
import AboutSectionSeven from '../components/about/AboutSectionSeven';

export default function About() {
  return (
    <Container fluid className="p-0">
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      <AboutSectionFour />
      {/* <AboutSectionFive /> */}
      <AboutSectionSix />
      <AboutSectionSeven />
    </Container>
  );
}
