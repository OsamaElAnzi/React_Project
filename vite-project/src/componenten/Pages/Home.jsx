import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.scss";

function Home() {
  return (
    <>
      <Container className="pt-4">
        <Row className="pt-4">
          <Col className="d-flex justify-content-center flex-column align-items-center  p-3 text-dark  rounded orbitron">
          <br />
          <br />
          <br />
            <p className="display-4 text-center">Hi, Ik ben Osama :)</p>
            <br />
            <p className="lead text-center w-50 ">
              Een junior softwareontwikkelaar met een passie voor het bouwen en
              verbeteren van applicaties. Altijd bezig met het leren van nieuwe
              technieken en gericht op groei en vakmanschap.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
