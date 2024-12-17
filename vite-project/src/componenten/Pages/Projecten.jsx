import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import github from "../Img/github-mark.png";
import money from "../Img/profits.png";
import roc from "../Img/roc.png";
import pinguin from "../Img/pinguin.png";
import info from "../Img/info.png";
import { Link } from "react-router-dom";

const projectData = [
  {
    id: 1,
    title: "Vrijstellingsaanvraag Systeem - ROC Midden Nederland",
    imgSrc: roc,
    githublink:
      "https://github.com/OsamaElAnzi/Aanvraagformulier-voor-examencommissie",
  },
  {
    id: 2,
    title: "Project GeldManagement",
    imgSrc: money,
    githublink: "https://github.com/OsamaElAnzi/GeldManagmentApp",
  },
  {
    id: 3,
    title: "Project Pinguïn",
    imgSrc: pinguin,
    githublink: "https://github.com/OsamaElAnzi/Project_Pinguin_React_Scrum",
  },
];

const Projecten = () => {
  const rows = [];
  for (let i = 0; i < projectData.length; i += 3) {
    rows.push(projectData.slice(i, i + 3));
  }

  return (
    <Container>
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex} className="mb-4">
          {row.map((project) => (
            <Col md={4} key={project.id}>
              <Card className="h-100 bg-dark text-success">
                <Card.Img variant="top" src={project.imgSrc} />
                <Card.Body className="d-flex flex-column justify-content-between ">
                  <Col>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text></Card.Text>
                  </Col>
                  <Row>
                    <Col className="d-flex flex-row justify-content-around">
                      <a href={project.githublink} >
                        <img width={40} src={github}  />
                      </a>
                      <a href="">
                        <img width={40} src={info}  />
                      </a>
                      <Link></Link>
                    </Col>
                    <Col></Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default Projecten;
