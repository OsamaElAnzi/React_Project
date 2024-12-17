import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logoNav from "../components/img/media/favicon.png";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Navbar className="bg-body-tertiary" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt="Cloud Nexus"
              src={logoNav}
              width={40}
              height={40}
              className="d-inline-block align-top"
            />
            Cloud Nexus
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/service">
                Service
              </Nav.Link>
              <Nav.Link as={Link} to="/pricing">
                Pricing
              </Nav.Link>
              <Nav.Link as={Link} to="/about-us">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
