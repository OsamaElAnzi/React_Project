import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
function Home() {
  return (
    <>
      <Container className="">
        <Row>
          <Col className="d-flex justify-content-center flex-column align-items-center">
            <h1>Hi, Ik ben Osama ;)</h1>
            <p>
              Een junior softwareontwikkelaar die helpt met het bouwen en
              verbeteren van applicaties, leert nieuwe technieken
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
