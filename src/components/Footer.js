import React from 'react';
import { Row, Col } from 'react-bootstrap';
import data from '../constants/data.js';
import LinkedInIcon from './icons/LinkedInIcon.js';
import GithubIcon from './icons/GithubIcon.js';
import CodepenIcon from './icons/CodepenIcon.js';
import MediumIcon from './icons/MediumIcon.js';
import Spotify from './icons/Spotify.js';
import InstagramIcon from './icons/InstagramIcon.js';

export default function Footer() {
  const {
    name,
    designation,
    socialLinks: { linkedin, github, codepen, medium, spotify, instagram }
  } = data;
  return (
    <Row>
      <Col className="p-5 text-center position-relative text-light ">
        <h2 className="text-uppercase mb-3 h3 light-blue">{name}</h2>
        <p className="mb-5">{designation}</p>
        <h3 className="text-uppercase h4 light-blue">Get In Touch</h3>
        {/* Grid container */}
        <Row className="p-4 pb-0">
          {/* Section: Social media */}
          <Col className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg text-light m-1 icon"
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              role="button">
              <LinkedInIcon />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-light m-1 icon"
              href={github}
              target="_blank"
              rel="noreferrer"
              role="button">
              <GithubIcon />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-light m-1 icon"
              href={codepen}
              target="_blank"
              rel="noreferrer"
              role="button">
              <CodepenIcon />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-light m-1 icon"
              href={medium}
              target="_blank"
              rel="noreferrer"
              role="button">
              <MediumIcon />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-light m-1 icon"
              href={spotify}
              target="_blank"
              rel="noreferrer"
              role="button">
              <Spotify />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-light m-1 icon"
              href={instagram}
              target="_blank"
              rel="noreferrer"
              role="button">
              <InstagramIcon />
            </a>
          </Col>
        </Row>
        <Row>
          <p className="text-secondary fs-6">Copyright © 2021 misfitDodo Media</p>
        </Row>
      </Col>
    </Row>
  );
}
