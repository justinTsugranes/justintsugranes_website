import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TechImg from '../img/svg/programming.svg';
import ReactIcon from './icons/ReactIcon';
import JsIcon from './icons/JsIcon';
import NodeIcon from './icons/NodeIcon';
import HtmlIcon from './icons/HtmlIcon';
import CssIcon from './icons/CssIcon';
import BootstrapIcon from './icons/BootstrapIcon';
import SassIcon from './icons/SassIcon';
import GitIcon from './icons/GitIcon';
import FigmaIcon from './icons/FigmaIcon';
import SalesforceIcon from './icons/SalesforceIcon';
import WordpressIcon from './icons/WordpressIcon';
import EthereumIcon from './icons/EthereumIcon';

export default function ProjectsShowcase() {
  return (
    <Row className="py-5 px-3 d-flex align-items-center justify-content-around text-light text-center text-md-center">
      <Col>
        <Row className="text-center">
          {/* title on small-medium screens */}
          <h2 className="text-warning d-lg-none">Coding Projects</h2>
          {/* title on large screens */}
          <h2 className="d-none d-lg-block">
            <span className="text-warning">Some Tech</span>
            <br></br> I&apos;ve Worked With
          </h2>
        </Row>
        {/* icon row: hide on sm-md screens */}
        <Row className="d-none d-lg-block px-5">
          <Col className="d-flex justify-content-evenly">
            <Row className="mt-3">
              <Row>
                <Col>
                  <ReactIcon />
                </Col>
                <Col>
                  <JsIcon />
                </Col>
                <Col>
                  <NodeIcon />
                </Col>
                <Col>
                  <HtmlIcon />
                </Col>
              </Row>
              <Row>
                <Col>
                  <CssIcon />
                </Col>
                <Col>
                  <BootstrapIcon />
                </Col>
                <Col>
                  <SassIcon />
                </Col>
                <Col>
                  <GitIcon />
                </Col>
              </Row>
              <Row>
                <Col>
                  <FigmaIcon />
                </Col>
                <Col>
                  <SalesforceIcon />
                </Col>
                <Col>
                  <WordpressIcon />
                </Col>
                <Col>
                  <EthereumIcon />
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </Col>

      <Col>
        <img className="img-fluid w-75" src={TechImg} alt="..." />
      </Col>
    </Row>
  );
}
