import React from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';
import Awards from './awards';
import Certificates from './certificates';
import Education from './education';
import Musicals from './musicals';
import Professonalexp from './professonalexp';
import Professors from './professors';
import Skills from './skills';
import Links from './links';
import Speaking from './speaking';
import Transcriptions from './transcriptions';
import Volunteer from './volunteer';

const Cv = () => {
  return (
    <div className="text-light">
      <Container className="p-4 mx-3" fluid>
        <Tabs
          defaultActiveKey="proffsionalexp"
          transition={true}
          id="cv-tabs"
          className="mb-3 d-flex justify-content-evenly">
          <Tab eventKey="professionalexp" title="Professional Experience">
            <Professonalexp />
          </Tab>
          <Tab eventKey="education" title="Education">
            <Education />
          </Tab>
          <Tab eventKey="certificates" title="Certificates">
            <Certificates />
          </Tab>
          <Tab eventKey="volunteer" title="Volunteering">
            <Volunteer />
          </Tab>
          <Tab eventKey="awards" title="Awards">
            <Awards />
          </Tab>
          <Tab eventKey="professors" title="Professors and Masterclasses">
            <Professors />
          </Tab>
          <Tab eventKey="skills" title="Skills">
            <Skills />
          </Tab>
          <Tab eventKey="speaking" title="Speaking">
            <Speaking />
          </Tab>
          <Tab eventKey="transcriptions" title="Compositions and Transcriptions">
            <Transcriptions />
          </Tab>
          <Tab eventKey="music" title="Musical Theatre">
            <Musicals />
          </Tab>
          <Tab eventKey="links" title="All of My Links">
            <Links />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default Cv;
