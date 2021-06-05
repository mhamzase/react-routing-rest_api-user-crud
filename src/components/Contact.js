import React from "react";
import { Button, Form, Col } from "react-bootstrap";

function Contact() {

    const handleSubmitForm = (e) =>{
        e.preventDefault();  
    }


  return (
    <div className="col-6 m-auto">
      <h1 className="display-4 text-center mt-5">Contact</h1>
      <Form onSubmit={handleSubmitForm}>
        <Col>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Form.Group controlId="formBasicTextArea">
            <Form.Control
              rows="7"
              as="textarea"
              type="text"
              placeholder="Message"
            />
          </Form.Group>

          <Button variant="warning" type="submit">
            Send Message
          </Button>
        </Col>
      </Form>
    </div>
  );
}

export default Contact;
