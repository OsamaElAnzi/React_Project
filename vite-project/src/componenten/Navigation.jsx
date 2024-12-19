import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Navgation.css';

function Navigation() {
  const [isLoading, setIsLoading] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projecten", label: "Projecten" },
    { href: "/CV", label: "CV" },
  ];

  const handleNavigation = (event, href) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = href;
    }, 1500);
  };

  return (
    <>
      {isLoading && (
        <div className="loading-screen">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      )}
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              {navLinks.map((link) => (
                <Nav.Link
                  key={link.href}
                  href={link.href}
                  aria-label={`Navigate to ${link.label}`}
                  onClick={(event) => handleNavigation(event, link.href)}
                >
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
                {' '}Osama El Anzi
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
