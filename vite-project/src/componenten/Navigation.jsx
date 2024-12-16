import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import CV from "../componenten/CV/CVvanOsamaElAnzi.pdf";

function Navigation() {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projecten", label: "Projecten" },
  ];

  return (
    <header>
      <Navbar bg="dark" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            aria-label="Toggle navigation menu"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              {navLinks.map((link) => (
                <Nav.Link
                 className="text-white"
                  key={`${link.to}-${link.label}`}
                  as={Link}
                  to={link.to}
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </Nav.Link>
              ))}
              <Nav.Link className="text-white" href={CV} target="_blank">
                CV
              </Nav.Link>
            </Nav>
            <Navbar.Text className="text-white">
              Gemaakt door:&nbsp;
              <a
                href="https://www.linkedin.com/in/osama-el-anzi-930207268/"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Osama El Anzi's LinkedIn Profile"
              >
                Osama El Anzi
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navigation;
