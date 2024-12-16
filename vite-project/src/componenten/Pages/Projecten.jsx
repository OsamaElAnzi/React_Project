import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import github from "../Img/github-mark.png";
import money from "../Img/profits.png";
function Projecten() {
  return (
    <>
      <Container>
        <Row className="d-flex flex-row m-3">
          <Col>
            <Card className="">
              <Card.Img
                variant="top"
                src="data:image/png;base64,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"
              />
              <Card.Body>
                <Card.Title>
                  Vrijstellingsaanvraag Systeem - ROC Midden Nederland
                </Card.Title>
                <Card.Text>
                  Dit project biedt studenten van ROC Midden Nederland een
                  eenvoudig en geautomatiseerd systeem om vrijstellingen voor
                  examens aan te vragen. Het formulier is volledig responsive en
                  werkt zowel op desktop als mobiel.
                </Card.Text>
                <a href="https://github.com/OsamaElAnzi/Aanvraagformulier-voor-examencommissie">
                  <img width={40} src={github} />
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={money} />
              <Card.Body>
                <Card.Title>Project GELDMANAGEMENT</Card.Title>
                <Card.Text className="f-size">
                  Deze app heb ik gemaakt als hobbyproject om mijn ideeën tot
                  leven te brengen en iets praktisch te ontwikkelen. Het helpt
                  je om zelfstandig je contante geld bij te houden. De app
                  blijft in ontwikkeling, met binnenkort een crypto-variant om
                  ook cryptovaluta te beheren.
                </Card.Text>
                <a href="https://github.com/OsamaElAnzi/GeldManagmentApp">
                  <img width={40} src={github} />
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/1200X200"
              />
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  consectetur, ex non consectetur porttitor, velit neque
                  fermentum neque, vel semper dui nisi in massa.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex flex-row m-3">
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/1200X200"
              />
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  consectetur, ex non consectetur porttitor, velit neque
                  fermentum neque, vel semper dui nisi in massa.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/1200X200"
              />
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  consectetur, ex non consectetur porttitor, velit neque
                  fermentum neque, vel semper dui nisi in massa.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/1200X200"
              />
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  consectetur, ex non consectetur porttitor, velit neque
                  fermentum neque, vel semper dui nisi in massa.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Projecten;
