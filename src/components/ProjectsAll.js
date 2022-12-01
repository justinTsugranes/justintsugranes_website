import React from 'react';
import '../styles/App.css';
import { Row } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import data from '../constants/ProjectData';

function MapProjects() {
  const cards = data.map((card) => {
    return (
      <ProjectCard
        key={card.id}
        title={card.title}
        descr={card.descr}
        imageUrl={card.imageUrl}
        demo={card.demo}
        repo={card.repo}
        tech={card.tech}
      />
    );
  });
  return cards;
}

export default function AllProjects() {
  return (
    <>
      <Row className="d-flex justify-content-evenly row-cols-1 row-cols-md-3 row-cols-lg-5 gap-5 mb-3">
        <MapProjects />
      </Row>
    </>
  );
}
