import React from 'react';
import { Container, Card } from 'react-bootstrap';
import userData from '../constants/data.js';

export default function Quote() {
  return (
    <Container fluid className="my-5 d-flex justify-content-center">
      <Card className="w-75 bg-dark text-white rounded-3 shadow-lg m-5 mb-0">
        <Card.Body className="p-4 d-flex align-items-center">
          <blockquote className="blockquote text-center p-4">
            <p className="fs-2">{userData.about.quote}</p>
          </blockquote>
        </Card.Body>
      </Card>
    </Container>
  );
}
