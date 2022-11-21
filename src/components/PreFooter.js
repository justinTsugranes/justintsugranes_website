import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ContactModal from './ContactModal';
import PreFooterImg from '../img/heros/pre-footer.jpg';
import PreFooterGraphic from '../img/svg/connect.svg';

export default function PreFooter() {
  return (
    <Container fluid className="p-0">
      <div className="masthead" style={{ backgroundImage: `url(${PreFooterImg})` }}>
        <div className="color-overlay d-flex justify-content-center align-items-center h-100">
          <Container>
            <div className="row align-items-center justify-content-between">
              <div className="col-md d-none d-md-block">
                <img src={PreFooterGraphic} className="img-fluid" alt="" id="connect-img" />
              </div>
              <div className="col-md d-flex flex-column">
                <h2 className="light-blue align-self-sm-center text-center">
                  I&apos;m always looking to connect
                </h2>
                <p className="text-light text-center d-none d-md-block mt-2">
                  Although, I&apos;m currently based in the US, I love making friends and working
                  with teams from all around the globe.
                </p>

                <Row className="text-center">
                  <Col>
                    <Button className="button rounded-pill m-0 mt-4">
                      <ContactModal />
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Container>
  );
}
