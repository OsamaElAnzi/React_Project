import React from "react";
import { Container, Col, Row } from "react-bootstrap";
function Home() {
  return (
    <>
      <Container className="pt-5">
        <Row className="pt-5">
          <Col className="d-flex justify-content-center flex-column align-items-center">
            <p className="display-1">Hi, Ik ben Osama ;)</p>
            <p className="display-6 w-50 d-flex text-center">
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
