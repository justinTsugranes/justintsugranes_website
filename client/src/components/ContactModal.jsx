import { useState } from 'react'
import {
  Modal,
  CloseButton,
  Container,
  Form,
  Button,
  FloatingLabel,
} from 'react-bootstrap'
// import { sanityClient } from '../lib'
import { sentImage } from '../assets'

const ContactModal = () => {
  // modal
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleOpen = () => setShow(true)
  // sanity data
  const [data, setData] = useState([])
  // form validation
  const [validated, setValidated] = useState(false)
  // success honeypot
  const [success, setSuccess] = useState(false)

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget

    if (form.checkValidity() === false) {
      setValidated(false)
    } else {
      setSuccess(true)
    }
  }

  // sanity data
  // useEffect(() => {
  //   const query = "*[_type == 'graphics' && title == 'sent message graphic']"

  //   sanityClient.fetch(query).then((data) => {
  //     setData(data)
  //   })
  // }, [])

  return (
    <>
      <p className="contact-btn m-0 p-0" onClick={handleOpen}>
        Contact
      </p>

      {/* contact form modal */}
      {!success ? (
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          centered
          className="text-dark"
        >
          <Container>
            <Modal.Header className="d-flex justify-content-center">
              <Modal.Title>Contact Me</Modal.Title>
              <CloseButton
                variant="dark"
                aria-label="Close"
                onClick={handleClose}
              />
            </Modal.Header>

            <Modal.Body className="modal-lg" id="modal-body">
              <p className="lead">
                Hi! Fill out the form below to send a message directly to my
                personal email.
              </p>
              <Form
                noValidate
                validated={validated}
                onSubmit="submit"
                id="contact-form"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                data-netlify-recaptcha="true"
              >
                {/* bot field */}
                <input type="hidden" name="form-name" value="contact" />
                <Form.Control type="hidden" id="bot-field" name="bot-field" />

                {/* default email subject */}
                <Form.Control
                  type="hidden"
                  name="subject"
                  defaultValue="Contact message from justintsugranes.com"
                />

                {/* name */}
                <Form.Group>
                  <FloatingLabel
                    controlId="floatingName"
                    label="Name"
                    className="mb-3 mt-3"
                  >
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
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      aria-label="Enter email"
                      required
                      pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please enter your email.
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>

                {/* message */}
                <Form.Group className="form-floating mt-3 mb-3">
                  <FloatingLabel
                    controlId="floatingTextarea"
                    label="Enter message"
                  >
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

                {/* submit */}
                <Button
                  onClick={validated ? handleSubmit : null}
                  type="submit"
                  className="rounded-pill px-4 py-2"
                  style={{ background: '#33bbcf', border: 'none' }}
                >
                  Send
                </Button>
              </Form>
            </Modal.Body>
          </Container>
        </Modal>
      ) : (
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          centered
          className="text-dark"
        >
          <Container className="d-flex flex-column">
            <Modal.Header className="d-flex justify-content-around">
              <Modal.Title>Success!</Modal.Title>
              <CloseButton
                variant="dark"
                aria-label="Close"
                onClick={handleClose}
              />
            </Modal.Header>

            <Modal.Body className="modal-lg text-center" id="modal-body">
              <img
                // src={data[0]?.imgUrl?.url}
                // alt={data[0]?.altText}
                src={sentImage}
                alt={sentImageAlt}
                style={{ width: '100%', maxHeight: '200px' }}
              />
              <p className="lead pt-2">
                Your message was successfully sent! <br />
                <br />
                Thank you for contacting me. I&apos;m looking forward to your
                message.
              </p>
            </Modal.Body>

            <Modal.Footer>
              <Button
                onClick={handleClose}
                className="mb-3 w-25"
                style={{ background: '#33bbcf', border: 'none' }}
              >
                Go Back
              </Button>
            </Modal.Footer>
          </Container>
        </Modal>
      )}
    </>
  )
}

export default ContactModal
