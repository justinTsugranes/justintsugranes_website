import { Row, Card } from 'react-bootstrap';
import userData from '../constants/data.js';

export default function Quote() {
  return (
    <Row className="bg-dark d-flex justify-content-center py-5">
      <Card className="quote-card w-75 bg-dark text-white rounded-3 border-0 m-5">
        <Card.Body className="d-flex align-items-center">
          <blockquote className="blockquote text-center p-4">
            <p className="fs-3">{userData.about.quote}</p>
          </blockquote>
        </Card.Body>
      </Card>
    </Row>
  );
}