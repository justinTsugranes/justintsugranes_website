import { Row, Card } from 'react-bootstrap';
import { about } from '../constants';

const Quote = () => (
  <Row className="bg-dark d-flex justify-content-center pt-5">
    <Card className="quote-card w-75 bg-dark bg-gradient text-white rounded-3 border-0 border-danger m-5 shadow">
      <Card.Body className="d-flex align-items-center">
        <blockquote className="blockquote text-center p-4">
          <p className="fs-3">{about.quote}</p>
        </blockquote>
      </Card.Body>
    </Card>
  </Row>
);

export default Quote;
