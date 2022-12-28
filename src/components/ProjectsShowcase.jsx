import { Row, Col } from 'react-bootstrap';
import {
  programmer,
  ReactIcon,
  JsIcon,
  NodeIcon,
  HtmlIcon,
  CssIcon,
  BootstrapIcon,
  DockerIcon,
  FigmaIcon,
  JenkinsIcon,
  MongoIcon,
  NextIcon,
  TailwindIcon
} from '../assets';

// TODO! use CSS Grid and .map() to render icons

const ProjectsShowcase = () => (
  <Row className="py-5 px-3 d-flex align-items-center justify-content-around text-light text-center text-md-center">
    <Col>
      <Row className="text-center">
        {/* title on small-medium screens */}
        <h2 className="text-gradient d-lg-none">Coding Projects</h2>
        {/* title on large screens */}
        <h2 className="d-none d-lg-block">
          <span className="text-gradient">Some Tech</span>
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
                <NextIcon />
              </Col>
              <Col>
                <JsIcon />
              </Col>
              <Col>
                <NodeIcon />
              </Col>
            </Row>
            <Row>
              <Col>
                <HtmlIcon />
              </Col>
              <Col>
                <CssIcon />
              </Col>
              <Col>
                <BootstrapIcon />
              </Col>
              <Col>
                <TailwindIcon />
              </Col>
            </Row>
            <Row>
              <Col>
                <MongoIcon />
              </Col>
              <Col>
                <DockerIcon />
              </Col>
              <Col>
                <JenkinsIcon />
              </Col>
              <Col>
                <FigmaIcon />
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Col>

    <Col>
      <img className="img-fluid w-75" src={programmer} alt="programmer graphic" />
    </Col>
  </Row>
);

export default ProjectsShowcase;
