import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, CloseButton, Container } from 'react-bootstrap';
import ContactForm from './ContactForm';

export default function ContactModal() {
  /* show/hide the contact modal */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p id="contact-btn" className="m-0 p-0" onClick={handleShow}>
        Contact
      </p>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Container>
          <Modal.Header className="d-flex justify-content-center">
            <Modal.Title>Contact Me</Modal.Title>
            <CloseButton variant="dark" aria-label="Close" onClick={handleClose} />
          </Modal.Header>

          <Modal.Body className="modal-lg" id="modal-body">
            <p className="lead text-dark">
              Hi! Fill out the form below to send a message directly to my personal email.
            </p>
            {/* import contact form */}
            <ContactForm />
          </Modal.Body>
        </Container>
      </Modal>
    </>
  );
}
