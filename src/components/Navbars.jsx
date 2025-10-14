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
        <Navbar.Brand href="#home">
          <img
            src="./public/Sasken-Logo_Theme.webp"
            alt="logo"
            width="100"
            height="auto"
          />
        </Navbar.Brand>

        {/* Hamburger for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Left Links */}
         <Nav className="mx-auto text-uppercase fw-semibold align-items-center">
  <Nav.Link href="#industry-offerings" className="mx-3">Industry Offerings</Nav.Link>
  <Nav.Link href="#digital-engineering" className="mx-3">Digital Engineering</Nav.Link>
  <Nav.Link href="#product-engineering" className="mx-3">Product Engineering</Nav.Link>
  <Nav.Link href="#resources" className="mx-3">Resources</Nav.Link>
  <Nav.Link href="#about-us" className="mx-3">About Us</Nav.Link>
</Nav>


          {/* Right Button */}
          <Nav className="ms-auto">
            {/* Globe icon */}
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faGlobe} size="xl" className="me-3 pt-2" style={{ color: "#34005f" }} />
            </Nav.Link>

            <Nav.Link href="#contact">
              <button className="btn btn-danger rounded px-4 py-2 fw-semibold " style={{ backgroundColor:"#f94c30",boxShadow: "0px 4px 8px #d43c24"
              }}>Contact Us</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
