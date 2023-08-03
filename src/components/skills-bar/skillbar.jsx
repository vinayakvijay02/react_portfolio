import SkillBar from "react-skillbars";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import "./skillbar.css";
const SKILLS = [
  {
    type: "Java",
    level: 100,
  },
  {
    type: "React",
    level: 85,
  },
  {
    type: "Javascript",
    level: 75,
  },
  {
    type: "Spring",
    level: 50,
  },
  {
    type: "Docker",
    level: 25,
  },
  {
    type: "HTML",
    level: 20,
  },
  {
    type: "NoSQL",
    level: 0,
  },
];
const colors = {
  bar: {
    hue: 212,
    saturation: 97.2,
    level: {
      minimum: 30,
      maximum: 70,
    },
  },
  title: {
    text: {
      hue: 0,
      saturation: {
        minimum: 0.0,
        maximum: 0.0,
      },
      level: 50,
    },
    background: {
      hue: 0,
      saturation: 0.0,
      level: {
        minimum: 9.8,
        maximum: 9.8,
      },
    },
  },
};

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1 className="pt-3 text-center font-details">TECH SKILLS</h1>
        <Container>
          <Row className="pt-3 pb-5 my-details align-items-center">
            <Col xs={12} md={12}>
              <SkillBar skills={SKILLS} colors={colors} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
