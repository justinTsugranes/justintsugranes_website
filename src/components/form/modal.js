import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import LoginForm from './form';

/* https://www.pluralsight.com/guides/how-to-open-and-close-react-bootstrap-modal-programmatically */

export default function FormModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
        <Button variant="primary" onClick={handleShow}>
          Launch Form modal
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm onSubmit={onLoginFormSubmit} />
          <LoginForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
