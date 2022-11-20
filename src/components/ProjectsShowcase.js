import React from 'react';
import TechImg from '../assets/img/svg/programming.svg';
import { Container, Row, Col, Image } from 'react-bootstrap';
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
    <>
      <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start d-none d-md-block">
        <Container>
          <Row className="d-sm-flex align-items-center justify-content-around">
            <Col>
              <Row>
                <h1>
                  <span className="text-warning">Some Tech</span> I&apos;ve Worked With
                </h1>
              </Row>
              <Row>
                <Col className="col-sm-offset-1 col-xs-12 col-sm-6 col-md-10">
                  <Row className="row mt-3 text-center">
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
            <Image className="img-fluid w-50 pt-5 d-none d-sm-block" src={TechImg} alt=""></Image>
          </Row>
        </Container>
      </section>
    </>
  );
}
