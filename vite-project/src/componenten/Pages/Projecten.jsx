import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import github from "../Img/github-mark.png";
import money from "../Img/profits.png";
import roc from "../Img/roc.png";
import pinguin from "../Img/pinguin.png";

const projectData = [
  {
    id: 1,
    title: "Vrijstellingsaanvraag Systeem - ROC Midden Nederland",
    text: "De profielpagina biedt studenten de mogelijkheid om inzicht te krijgen in hun eigen ontwikkeling en voortgang door middel van een overzicht van hun prestaties en behaalde resultaten. Dit stelt hen in staat om actief hun groeipad te volgen en gerichte stappen te zetten om verder te ontwikkelen. Door deze transparantie kunnen studenten beter reflecteren op hun sterke punten en verbeterpunten, en krijgen ze meer regie over hun persoonlijke leerproces. Het geeft hen de tools en motivatie om zelf verantwoordelijkheid te nemen voor hun ontwikkeling en hun doelen effectiever te bereiken.",
    imgSrc: roc,
    githublink:
      "https://github.com/OsamaElAnzi/Aanvraagformulier-voor-examencommissie",
  },
  {
    id: 2,
    title: "Project GeldManagement",
    text: "Deze applicatie is ontworpen om gebruikers te helpen hun contante geld en financiële doelen bij te houden, zonder toezicht van externe instanties. Naast contant geld zal de app ook ondersteuning bieden voor cryptovaluta, zodat je je wallet kunt beheren en eenvoudig je crypto-tegoeden kunt inzien. Het doel is om een gebruiksvriendelijke tool te bieden waarmee je je financiën beter kunt organiseren. De applicatie wordt voortdurend doorontwikkeld, met plannen voor extra functies en verbeteringen in de toekomst om nog meer controle en inzicht te bieden over jouw geldzaken.",
    imgSrc: money,
    githublink: "https://github.com/OsamaElAnzi/GeldManagmentApp",
  },
  {
    id: 3,
    title: "Project Pinguïn",
    text: `In samenwerking met vier andere studenten heb ik in een Scrum-verband gewerkt aan het project "Project-Pinguin". We werkten in sprints met duidelijke rolverdeling, wat resulteerde in een succesvolle gezamenlijke oplevering van het product. Dit project bood ons waardevolle ervaring met Agile-methodieken en verbeterde onze vaardigheden in communicatie, samenwerking en probleemoplossing.`,
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
              <Card className="h-100">
                <Card.Img variant="top" src={project.imgSrc} />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Col>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.text}</Card.Text>
                  </Col>
                  <Row>
                    <Col>
                      <a href={project.githublink}>
                        <img width={40} src={github} />
                      </a>
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
