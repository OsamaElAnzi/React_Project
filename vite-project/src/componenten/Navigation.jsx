import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Navigation() {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projecten", label: "Projecten" },
    { href: "#educatie", label: "Educatie" }
  ];

  return (
    <>
      <Navbar className="bg-body-gray" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              {navLinks.map((link) => (
                <Nav.Link key={link.href} href={link.href} aria-label={`Navigate to ${link.label}`}>
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>
            <Navbar.Text>
              Gemaakt door:
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
    </>
  );
}

export default Navigation;
