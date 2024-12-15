import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Navigation.scss';

function Navigation() {
  return (
    <>
      <Navbar className="custom-navbar bg-body-tertiary">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projecten">Projecten</Nav.Link>
            <Nav.Link href="#educatie">Educatie</Nav.Link>
          </Nav>
          <Navbar.Text>
            Gemaakt door: <a href="https://www.linkedin.com/in/osama-el-anzi-930207268/">Osama El Anzi</a>
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
