import React from 'react';
// import '../styles/ProjectCards.css';
import '../../../styles/ProjectCards.css';
import { Container, CardGroup, Row, Col } from 'react-bootstrap';
import CrashCourses from '../CrashCourses';
import FrontendBootcamp from '../FrontendBootcamp';
import LandingPage from '../LandingPage';
import MegaMask from '../MegaMask';
import NextTailwindBlog from '../NextTailwindBlog';
import PasswordGenerator from '../PasswordGenerator';
import ReactTodo from '../ReactTodo';
import Recipes from '../BreakfastRecipes';

export default function OldProjectCards() {
  return (
    <>
      <CardGroup>
        <Container className="mt-sm-1" fluid>
          <Row
            sm={1}
            md={3}
            lg={5}
            className="d-flex justify-content-evenly text-center gap-3 gy-2 my-5">
            <Col className="col-sm p-0">
              <FrontendBootcamp />
            </Col>
            <Col className="col-sm p-0">
              <MegaMask />
            </Col>
            <Col className="col-sm p-0">
              <CrashCourses />
            </Col>
            <Col className="col-sm p-0">
              <PasswordGenerator />
            </Col>
            <Col className="col-sm p-0">
              <ReactTodo />
            </Col>
            <Col className="col-sm p-0">
              <LandingPage />
            </Col>
            <Col className="col-sm p-0">
              <Recipes />
            </Col>
            <Col className="col-sm p-0">
              <NextTailwindBlog />
            </Col>
          </Row>
        </Container>
      </CardGroup>
    </>
  );
}
