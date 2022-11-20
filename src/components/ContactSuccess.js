import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ContactSuccess() {
  const navigate = useNavigate();
  return (
    <div className="card bg-success text-dark rounded-3 shadow-lg m-5 mb-0">
      <div className="card-body p-4">
        <figure className="mb-0">
          <blockquote className="blockquote text-center p-4">
            <p className="fs-4">I can&apos;t wait to read your message! I will respond asap!</p>
          </blockquote>
        </figure>
        <Button onClick={() => navigate('/')}>Go Back</Button>
      </div>
    </div>
  );
}
