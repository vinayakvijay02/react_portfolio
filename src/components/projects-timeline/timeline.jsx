import React, { useCallback } from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// projects
import L_GETCOVIDINFO from "../../assets/img/projects/covid_screenshot.webp";
import L_POKEDEX from "../../assets/img/projects/screenShotPokedex.webp";
import L_AmazonClone from "../../assets/img/projects/AmazonClone.webp";
import L_ProductHuntClone from "../../assets/img/projects/product_hunt_clone.webp";
import L_ZIKAVIRUS from "../../assets/img/projects/zikavirus.webp";
import L_AKLIMA from "../../assets/img/projects/Aklima.webp";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_AXIOS from "../../assets/img/skills/axios.svg";
import L_FIREBASE from "../../assets/img/skills/firebase.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_ANDROID from "../../assets/img/skills/android.svg";
import L_PHP from "../../assets/img/skills/php.svg";
import L_GOOGLEMAP from "../../assets/img/skills/googlemap.svg";
import L_ILLUSTRATOR from "../../assets/img/skills/adobeIllustrator.svg";
import L_PHOTOSHOP from "../../assets/img/skills/photoshop.svg";
import L_CORELDRAW from "../../assets/img/skills/coreldraw.svg";

import { Link } from "react-router-dom";

import "./projects-timeline.styles.css";
export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
        <Container>
          <Row>
            <Col sm={8}>sm=8</Col>
            <Col sm={4}>sm=4</Col>
          </Row>
          <Row>
            <Col sm={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Timeline>
          <Events>
            <ImageEvent
              date="14/06/2014"
              className="text-center"
              text="AKLIMA"
              src={L_AKLIMA}
              alt="Aklima"
            >
              <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                  <Accordion>
                    <Card>
                      <photoGallery />
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS
                      </Accordion.Toggle>

                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <strong>Description:</strong> Aklima a fashion design
                          shop's brand kit.
                          <hr />
                          <strong>Features:</strong>
                          <ul className="list-styles pt-1">
                            <li>Complete brand kit </li>
                          </ul>
                          <hr />
                          <strong>Tech used:</strong>
                          <ul>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_ILLUSTRATOR}
                                  alt="Illustrator"
                                  rounded
                                  className="image-style m-1"
                                ></Image>{" "}
                                Adobe Illustrator
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_PHOTOSHOP}
                                  alt="photoshop"
                                  rounded
                                  className="image-style m-1"
                                ></Image>{" "}
                                Adobe photoshop
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_CORELDRAW}
                                  alt=" Corel Draw"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Corel Draw
                              </span>
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                  {/* <Link to="/photoGallery" target="_blank">
                  <UrlButton>SEE LIVE</UrlButton>
                </Link> */}

                  <UrlButton
                    href="https://github.com/vinayakvijay02/covid_web/tree/master"
                    target="_blank"
                  >
                    SOURCE CODE
                  </UrlButton>
                  {/* <UrlButton
                  href="https://www.youtube.com/watch?v=K3h95l2YxmY&feature=youtu.be"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton> */}
                </div>
              </div>
            </ImageEvent>

            {/* Project: Zika Virus mhealth */}
            <ImageEvent
              date="20/11/2016"
              className="text-center"
              text=" Zika Virus mhealth "
              src={L_ZIKAVIRUS}
              alt=" Zika Virus mhealth "
            >
              <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS
                      </Accordion.Toggle>

                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <strong>Description:</strong> An app that show zika
                          virus details.
                          <hr />
                          <strong>Tech used:</strong>
                          <ul>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_ANDROID}
                                  alt="Android"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Android
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_PHP}
                                  alt="PHP"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                PHP
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_GOOGLEMAP}
                                  alt="Axios"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Google Map Api
                              </span>
                            </li>
                          </ul>
                          <hr />
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                  {/* <UrlButton
                  href="https://vinayakvijay02.github.io/react_pokedex/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/vinayakvijay02/react_pokedex/tree/master"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton> */}
                  <UrlButton
                    href="https://youtu.be/KplEWjxBMMc"
                    target="_blank"
                  >
                    WATCH VIDEO
                  </UrlButton>
                </div>
              </div>
            </ImageEvent>

            {/* Project: Get Covid Info */}
            <ImageEvent
              date="19/07/2020"
              className="text-center"
              text="COVID INFO"
              src={L_GETCOVIDINFO}
              alt="Get GitHub Info"
            >
              <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS
                      </Accordion.Toggle>

                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <strong>Description:</strong> An app the give complete
                          infromation about covid around the world. Able to
                          filter and analysis covid cases in respecitve country.
                          <hr />
                          <strong>Features:</strong>
                          <ul className="list-styles pt-1">
                            <li>Search covid ratio by country </li>
                            <li>Real-time API calls</li>
                          </ul>
                          <hr />
                          <strong>Tech used:</strong>
                          <ul>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_HTML5}
                                  alt="HTML 5"
                                  rounded
                                  className="image-style m-1"
                                ></Image>{" "}
                                HTML5
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_CSS3}
                                  alt="CSS 3"
                                  rounded
                                  className="image-style m-1"
                                ></Image>{" "}
                                CSS3
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_REACT}
                                  alt="React"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                React
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_GIT}
                                  alt="Github API"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Disease-sh GITHUB API
                              </span>
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                  <UrlButton
                    href="https://vinayakvijay02.github.io/covid_web/"
                    target="_blank"
                  >
                    SEE LIVE
                  </UrlButton>
                  <UrlButton
                    href="https://github.com/vinayakvijay02/covid_web/tree/master"
                    target="_blank"
                  >
                    SOURCE CODE
                  </UrlButton>
                  {/* <UrlButton
                  href="https://www.youtube.com/watch?v=K3h95l2YxmY&feature=youtu.be"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton> */}
                </div>
              </div>
            </ImageEvent>

            {/* Project: Pokedex */}
            <ImageEvent
              date="21/08/2020"
              className="text-center"
              text="Pokemon Search app"
              src={L_POKEDEX}
              alt="Pokemon Search"
            >
              <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS
                      </Accordion.Toggle>

                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <strong>Description:</strong> An app that search
                          pokemon and show individual pokemon details
                          <hr />
                          <strong>Tech used:</strong>
                          <ul>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_REACT}
                                  alt="React"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                React
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_AXIOS}
                                  alt="Axios"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Axios
                              </span>
                            </li>
                          </ul>
                          <hr />
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                  <UrlButton
                    href="https://vinayakvijay02.github.io/react_pokedex/"
                    target="_blank"
                  >
                    SEE LIVE
                  </UrlButton>
                  <UrlButton
                    href="https://github.com/vinayakvijay02/react_pokedex/tree/master"
                    target="_blank"
                  >
                    SOURCE CODE
                  </UrlButton>
                  {/* <UrlButton href="https://www.youtube.com/watch?v=ZZYSpi_blL0" target="_blank">
                  WATCH VIDEO
                </UrlButton> */}
                </div>
              </div>
            </ImageEvent>

            {/* Project: Amazon Clone */}

            <ImageEvent
              date="18/10/2020"
              className="text-center"
              text="Amazon Clone"
              src={L_AmazonClone}
              alt="Amazon Clone"
            >
              <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS
                      </Accordion.Toggle>

                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <strong>Description:</strong> An app that allows to
                          search through robots fetched in real-time with users.
                          <hr />
                          <strong>Features:</strong>
                          <ul className="list-styles pt-1">
                            <li>Show product list</li>
                            <li>Add and Remove from the cart</li>
                            <li>Show cart total</li>
                          </ul>
                          <hr />
                          <strong>Tech used:</strong>
                          <ul>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_REACT}
                                  alt="React"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                React
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_REDUX}
                                  alt="Redux"
                                  rounded
                                  className="image-style m-1"
                                ></Image>{" "}
                                Redux
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_NODE_JS}
                                  alt="Node.js"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Node.js
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_MATERIALUI}
                                  alt="Express"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Material UI
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_FIREBASE}
                                  alt="PostgreSQL"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                firebase
                              </span>
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                  <UrlButton
                    href="https://clone-9ddd0.web.app/"
                    target="_blank"
                  >
                    SEE LIVE
                  </UrlButton>
                  <UrlButton
                    href="https://github.com/vinayakvijay02/amazon-clone"
                    target="_blank"
                  >
                    SOURCE CODE
                  </UrlButton>
                </div>
              </div>
            </ImageEvent>

            {/* Project: Product_Hunt_Clone */}

            {/* <ImageEvent date="15/12/2019" className="text-center" text="Product Hunt Clone" src={L_ProductHuntClone} alt="Product Hunt Clone">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This website is a clone of Product Hunt built using Django.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Register as new user</li>
                          <li>Signin as existing user</li>
                          <li>Raise a Product for people to see and Vote</li>
                          <li>Delete a product</li>
                          <li>Like and Dislike a product</li>
                          <li>Fully funtional Administration panel</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_BOOTSTRAP4} alt="Bootstrap 4" rounded className="image-style m-1"></Image> Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_DJANGO} alt="Django" rounded className="image-style m-1"></Image> Django
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_POSTGRESQL} alt="PostgreSQL" rounded className="image-style1 m-1"></Image> PostgreSQL
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/akjha96/product_hunt_clone" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent> */}

            {/* Project: Portfolio using Django */}
            {/* <ImageEvent date="07/12/2019" className="text-center" text="Portfolio using Django" src={L_PortfolioUsingDjango} alt="Portfolio using Django">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is my first portfolio website built using Django.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Send emails</li>
                          <li>View my projects</li>
                          <li>Write a blog</li>
                          <li>Hosted using Digital ocean under www.akjfun.com</li>
                          <li>Fully funtional Administration panel</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_BOOTSTRAP4} alt="Bootstrap 4" rounded className="image-style m-1"></Image> Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_DJANGO} alt="Django" rounded className="image-style m-1"></Image> Django
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_POSTGRESQL} alt="PostgreSQL" rounded className="image-style1 m-1"></Image> PostgreSQL
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_DIGITAL_OCEAN} alt="Digital Ocean" rounded className="image-style m-1"></Image> Digital-Ocean
                            </span>
                          </li>
                        </ul>
                        <hr />
                        <em>
                          <strong>View Demo Video:</strong>
                          <br />
                          <br />
                          If you are reading this, that means I have updated my Portfolio website to recent one.
                          <br />
                          You can still see a video of my old portfolio by clicking on the button below.
                          <br />
                          <br />
                        </em>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://youtu.be/PCwEuW4OmWA" target="_blank">
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent> */}
          </Events>
        </Timeline>
      </div>
    </div>
  );
}
