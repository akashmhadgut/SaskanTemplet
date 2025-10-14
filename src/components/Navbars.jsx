import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function Navbars() {
  return (
    <Navbar expand="lg" bg="light" variant="light" fixed="top" className="shadow-sm py-3">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home">
          <img
            src="src/assets/Sasken-Logo_Theme.webp"
            alt="logo"
            width="100"
            height="auto"
          />
        </Navbar.Brand>

        {/* Hamburger for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Left Links */}
          <Nav className="mx-auto text-uppercase">
            <Nav.Link href="#industry-offerings">Industry Offerings</Nav.Link>
            <Nav.Link href="#digital-engineering">Digital Engineering</Nav.Link>
            <Nav.Link href="#product-engineering">Product Engineering</Nav.Link>
            <Nav.Link href="#resources">Resources</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
          </Nav>

          {/* Right Button */}
          <Nav className="ms-auto">
            {/* Globe icon */}
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faGlobe} size="xl" style={{ color: "#34005f" }} />
            </Nav.Link>

            <Nav.Link href="#contact">
              <button className="btn btn-danger">Contact Us</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
