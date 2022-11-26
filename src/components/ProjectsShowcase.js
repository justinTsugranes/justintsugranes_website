import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
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
    <Container className="bg-dark text-light p-lg-0 pt-lg-5 text-center text-md-center" fluid>
      {/* main row */}
      <Row className="d-sm-flex align-items-center justify-content-around">
        {/* main column 1 */}
        <Col>
          {/* heading row */}
          <Row className="text-sm-center">
            {/* title on small-medium screens */}
            <h1 className="text-warning d-lg-none">Coding Projects</h1>
            {/* title on large screens */}
            <h1 className="d-sm-none d-lg-block">
              <span className="text-warning">Some Tech</span>
              <br></br> I&apos;ve Worked With
            </h1>
          </Row>
          {/* icon row: hide on sm-md screens */}
          <Row className="d-none d-lg-block px-5">
            {/* main icon column */}
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
          {/* end icon row */}
        </Col>
        {/* main column 2 */}
        <Col>
          <Image className="img-fluid w-75 pt-5" src={TechImg} alt="..."></Image>
        </Col>
      </Row>
    </Container>
  );
}
