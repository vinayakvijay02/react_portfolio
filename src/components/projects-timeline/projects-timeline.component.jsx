import React, { useCallback } from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tilt from "react-tilt";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

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

const data = [
  {
    title: "Covid Info",
    img: L_GETCOVIDINFO,
    link: "https://VijayVijay02.github.io/covid_web",
  },
  {
    title: "Pokedex",
    img: L_POKEDEX,
    link: "https://vinayakvijay02.github.io/react_pokedex",
  },
  {
    title: "Amazon Clone",
    img: L_AmazonClone,
    link: "xxx",
  },
  // {
  //   title: "ViwaHistory",
  //   img: L_AmazonClone,
  //   link: "https://viwahistory.net/",
  // },
];

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1 className="pt-3 text-center font-details ">{title}</h1>
        <Container>
          <Row className="pt-3 pb-5 my-details align-items-center">
            {data.map((variant, idx) => (
              <Col sm={4}>
                <Tilt options={{ max: 25 }}>
                  <OverlayTrigger
                    key={idx}
                    placement={"top"}
                    overlay={
                      <Tooltip id={`tooltip-${"top"}`}>
                        Click to view demo
                      </Tooltip>
                    }
                  >
                    <Card.Link href={variant.link} target="_blank">
                      <Card
                        bg={variant.title}
                        key={idx}
                        text="light"
                        className="mb-2"
                        border="light"
                      >
                        <Card.Header>{variant.title}</Card.Header>
                        <Card.Img variant="top" src={variant.img} />

                        <Card.Body>
                          <Card.Title>{variant.title} </Card.Title>

                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Card.Link>
                  </OverlayTrigger>
                </Tilt>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
