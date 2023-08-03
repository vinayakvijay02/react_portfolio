import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1 className="pt-3 text-center font-details ">{title}</h1>
        <Container>
          <Row className="pt-3 pb-5 my-details align-items-center">
            <Col xs={12} md={12}>
              <div class="container about-container">
                <div class="row row--35 align-items-center">
                  <div class="col-lg-12">
                    <div class="about-inner inner">
                      <div>
                        <div class="row row--35 align-items-center">
                          <div class="col-md-3">
                            <div class="thumbnail">
                              <Image
                                class="w-100"
                                alt="profile"
                                src={Profile}
                                thumbnail
                                fluid
                              />
                            </div>
                          </div>
                          <div class="col-md-9">
                            <p class="description">
                              <br /> Hi there! I am Vinayak <br />
                              A passionate programmer and a Gamer, born and
                              brought up in Mumbai (India). I am a Full Stack
                              Web Developer with React.js, Redux, Express.js,
                              Node.js, and SQL as my tech stack.
                              <br />
                              In 2017, I successfully completed my Masters in
                              Information Technology and Systems from University
                              of Canberra (Australia).
                              <br />
                              Working with the clients, my goal is always driven
                              towards providing amazing experience with the best
                              level of quality and service to them.
                              <br />
                              I love learning about new technologies, what
                              problems are they solving and How can I use them
                              to build better and scalable products.
                              <br /> <br />
                            </p>
                          </div>
                        </div>
                        <div class="row row--35 align-items-center">
                          <div class="tabs-area">
                            <div class="container">
                              <div class="row">
                                <div class="col-lg-12">
                                  <Tabs
                                    defaultActiveKey="profile"
                                    id="uncontrolled-tab-example"
                                    className="mb-3"
                                  >
                                    <Tab
                                      eventKey="Experience"
                                      title="Experience"
                                    >
                                      <div class="single-tab-content">
                                        <ul>
                                          <li>
                                            <strong>
                                              <b>
                                                {" "}
                                                <span>
                                                  {" "}
                                                  Infosys Limited, Canberra
                                                </span>
                                              </b>
                                            </strong>
                                            <br />
                                            Senior Software Enginner
                                          </li>
                                          <li>
                                            <strong>
                                              <b>
                                                {" "}
                                                <span>
                                                  Tracking Solutions PYT LTD,
                                                  Canberra
                                                </span>
                                              </b>
                                            </strong>
                                            <br />
                                            Junior Software Developer
                                          </li>
                                          <li>
                                            <strong>
                                              <b>
                                                {" "}
                                                <span>
                                                  Vinesh Scientific Industry,
                                                  India
                                                </span>
                                              </b>
                                            </strong>
                                            <br />
                                            Junior Software Developer
                                          </li>
                                        </ul>
                                      </div>
                                    </Tab>
                                    <Tab
                                      eventKey="profile"
                                      title="Education & Certification"
                                    >
                                      <div class="single-tab-content">
                                        <ul>
                                          <li>
                                            <strong>
                                              <b>
                                                {" "}
                                                <span>
                                                  {" "}
                                                  Master of Information
                                                  Technology and Systems
                                                </span>
                                              </b>
                                            </strong>
                                            <br />
                                            University Of Canberra, Canberra,
                                            Australia
                                          </li>
                                          <li>
                                            <strong>
                                              <b>
                                                {" "}
                                                <span>
                                                  Bachelor of Information
                                                  Technology{" "}
                                                </span>
                                              </b>
                                            </strong>
                                            <br />
                                            University Of Mumbai, Bombay, India
                                          </li>
                                          <li>
                                            <strong>
                                              <b>
                                                {" "}
                                                <span>
                                                  Advanced Diploma of Leadership
                                                  and Management
                                                </span>
                                              </b>
                                            </strong>
                                            <br />
                                            Australian Capital College,
                                            Canberra, Australia
                                          </li>
                                        </ul>
                                      </div>
                                    </Tab>
                                  </Tabs>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
