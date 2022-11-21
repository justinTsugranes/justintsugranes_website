import React from 'react';
import '../styles/ProjectCards.css';
import { Container, CardGroup, Row, Col } from 'react-bootstrap';
import CrashCourses from './Projects/CrashCourses';
import FrontendBootcamp from './Projects/FrontendBootcamp';
import LandingPage from './Projects/LandingPage';
import MegaMask from './Projects/MegaMask';
import NextTailwindBlog from './Projects/NextTailwindBlog';
import PasswordGenerator from './Projects/PasswordGenerator';
import ReactTodo from './Projects/ReactTodo';
import Recipes from './Projects/BreakfastRecipes';

export default function ProjectCards() {
  return (
    <>
      <CardGroup>
        <Container className="my-5 mt-sm-1" fluid>
          <Row
            sm={1}
            md={3}
            lg={5}
            className="d-flex justify-content-evenly text-center gap-3 gy-2">
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
