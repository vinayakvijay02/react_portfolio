import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import "./contact-form.styles.css";

export default function Section({ title, subtitle, dark, id }) {
  const [status, setStatus] = useState("Submit");
  const [show, setShow] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    setShow(true);
    // alert(result.status);
    setShow(true);
  };

  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1 className="pt-3 text-center font-details">CONTACT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 my-details align-items-center">
            <Col xs={12} md={12}>
              <div class="section-title text-left mb--50">
                <h2 class="title">Hire Me...</h2>
                <p class="description">
                  I am available for full time, part time and freelance work.
                  Connect with me via email:
                  <a href="vinu142@gmail.com"> vinu142@gmail.com</a>{" "}
                </p>
              </div>

              <Form onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" placeholder="Name" id="name" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email ID"
                    id="email"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Message"
                    id="message"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  {status}
                </Button>

                <Alert
                  onClose={() => setShow(false)}
                  show={show}
                  delay={3000}
                  dismissible
                  variant="success"
                >
                  Email sent...
                </Alert>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
