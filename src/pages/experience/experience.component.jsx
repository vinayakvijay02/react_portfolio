import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_TRACKINGSOLUTIONS from "../../assets/img/experience/ts_logo.1.svg";
import L_VSI from "../../assets/img/experience/VSILOGO.svg"
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={L_TRACKINGSOLUTIONS}
                  alt="Accenture logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Junior Software Developer
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      Mobile & Web Developer
                    </strong>
                    <br />
                    <strong>Role:</strong> Developer
                    <br />
                    <strong>Description:</strong> <strong>Developed & enhanced multiple features with full customizability option across web application. Debugging existing code to solve problems.</strong>
                    <br />
                    <strong>Technology:</strong> Android (Java), React.js (JavaScript) and MS-SQL
                    <br />
                    <strong>Duration:</strong> June 2018 - May 2019
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={L_VSI}
                  alt="Accenture logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Junior Software Developer
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      Software Developer 
                    </strong>
                    <br />
                    <strong>Role:</strong> Developer & Tech/Customer support
                    <br />
                    <strong>Description:</strong>{" "}
                    <strong>Developed , Designed & enhanced multiple features with
                    full customizability option across software application.
                    Debugging existing code to solve problems.</strong> 
                    <br />
                    <strong>Technology:</strong> DOTNET, C#, Android (JAVA) and MS-SQL
                    <br />
                    <strong>Duration:</strong> April 2013 - August 2014
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
