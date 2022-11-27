// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Image } from 'react-bootstrap';
import projectData from '../constants/ProjectData.json';

export default function ProjectCards() {
  return (
    <Row className="d-flex justify-content-evenly row-cols-1 row-cols-md-3 row-cols-lg-5 gap-4 mb-3">
      {projectData.map(({ demo, imageUrl }, index) => {
        return (
          <Col key={index}>
            <a href={demo} rel="noreferrer" target="_blank" className="text-decoration-none">
              <Card className="proj-card-container border-0">
                <Image
                  fluid
                  variant="top"
                  className="proj-card-img hover-zoom shadow"
                  src={imageUrl}
                  alt="..."
                />
                {/* <Card.Body className="light-blue text-uppercase fw-bold fs-4">
                      <Card.Title className="pt-3">{title}</Card.Title>
                    </Card.Body> */}
              </Card>
            </a>
          </Col>
        );
      })}
    </Row>
  );
}
