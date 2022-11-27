import React from 'react';
import '../styles/App.css';
import ProjectsShowcase from '../components/ProjectsShowcase';
import ProjectCards from '../components/ProjectCards';

export default function Projects() {
  return (
    <>
      <ProjectsShowcase />
      <div className="d-none d-lg-block light-blue text-center m-0">
        <h2>Coding Projects</h2>
      </div>
      <ProjectCards />
    </>
  );
}
