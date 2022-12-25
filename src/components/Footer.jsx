import { Row, Col } from 'react-bootstrap';
import { socialLinks, user } from '../constants/index.js';
import {
  LinkedInIcon,
  GithubIcon,
  CodepenIcon,
  MediumIcon,
  SpotifyIcon,
  InstagramIcon
} from './icons/index';

const Footer = () => {
  const { linkedin, github, codepen, medium, spotify, instagram } = socialLinks;
  const btnStyle = 'btn btn-link btn-floating btn-lg text-light m-1 icon';

  return (
    <Row>
      <Col className="p-5 text-center position-relative text-light ">
        <h2 className="text-uppercase mb-3 h3 light-blue">{user.name}</h2>
        <p className="mb-5">{user.title}</p>
        <h3 className="text-uppercase h4 light-blue">Get In Touch</h3>
        {/* Grid container */}
        <Row className="p-4 pb-0">
          {/* Section: Social media */}
          <Col className="mb-4">
            <a className={btnStyle} href={linkedin} target="_blank" rel="noreferrer" role="button">
              <LinkedInIcon />
            </a>
            <a className={btnStyle} href={github} target="_blank" rel="noreferrer" role="button">
              <GithubIcon />
            </a>
            <a className={btnStyle} href={codepen} target="_blank" rel="noreferrer" role="button">
              <CodepenIcon />
            </a>
            <a className={btnStyle} href={medium} target="_blank" rel="noreferrer" role="button">
              <MediumIcon />
            </a>
            <a className={btnStyle} href={spotify} target="_blank" rel="noreferrer" role="button">
              <SpotifyIcon />
            </a>
            <a className={btnStyle} href={instagram} target="_blank" rel="noreferrer" role="button">
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
};

export default Footer;
