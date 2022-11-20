import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Form, Button, CloseButton, FloatingLabel, Container } from 'react-bootstrap';

export default function Contact() {
  /* show/hide the contact modal */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /* form validation */
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <p className="m-0 p-0" onClick={handleShow}>
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
            <Form
              noValidate
              validated={validated}
              onClick={handleSubmit}
              onSubmit="submit"
              id="contact-form"
              name="contact"
              method="POST"
              netlify
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              data-netlify-recaptcha="true"
              // action="/contact-success"
            >
              <input type="hidden" name="form-name" value="contact" />
              {/* bot field */}
              <Form.Control type="hidden" id="bot-field" name="bot-field" />
              {/* default email subject */}
              <Form.Control
                type="hidden"
                name="subject"
                defaultValue="Contact message from justintsugranes.com"
              />
              {/* name */}
              <Form.Group>
                <FloatingLabel controlId="floatingName" label="Name" className="mb-3 mt-3">
                  <Form.Control
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    aria-label="Enter name"
                    required
                    autoFocus
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please enter your name.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              {/* email */}
              <Form.Group className="form-floating mb-3 mt-3">
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    aria-label="Enter email"
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please enter your email.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              {/* message */}
              <Form.Group className="form-floating mt-3 mb-3">
                <FloatingLabel controlId="floatingTextarea" label="Enter message">
                  <Form.Control
                    as="textarea"
                    name="message"
                    placeholder="Enter message"
                    aria-label="Enter message"
                    style={{ height: '100px' }}
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please enter your message.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              {/* <div data-netlify-recaptcha="true" /> */}
              {/* recaptcha */}
              {/* submit */}
              <Modal.Footer>
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  variant="primary"
                  className="rounded-pill px-4 py-2">
                  Send
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Container>
      </Modal>
    </>
  );
}
