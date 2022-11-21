/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Col } from 'react-bootstrap';
// import { data } from './Data';

const ProjectCard = ({ project }) => (
  <Col xs={12} md={6} lg={4} key={project.id}>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
      </Card.Body>
    </Card>
  </Col>
);

export default ProjectCard;
