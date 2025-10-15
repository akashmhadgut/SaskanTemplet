import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Navbar.css'
// Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function Navbars() {
  return (
   
    <Navbar expand="lg" bg="light" variant="light" fixed="top" className="shadow-sm py-3">
      <Container>
         <Navbar.Brand href="#home">
          <img src="/Sasken-Logo_Theme.webp" alt="logo" width="100" height="auto" />
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          {/* Centered Nav Links */}
          <Nav className="mx-auto text-uppercase fw-semibold align-items-center gap-3">
            <Nav.Link href="#industry-offerings" className="nav-link-custom">Industry Offerings</Nav.Link>
            <Nav.Link href="#digital-engineering" className="nav-link-custom">Digital Engineering</Nav.Link>
            <Nav.Link href="#product-engineering" className="nav-link-custom">Product Engineering</Nav.Link>
            <Nav.Link href="#resources" className="nav-link-custom">Resources</Nav.Link>
            <Nav.Link href="#about-us" className="nav-link-custom">About Us</Nav.Link>
          </Nav>

          {/* Right Side */}
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faGlobe} size="xl" className="me-3" style={{ color: "#34005f" }} />
            </Nav.Link>

            <Nav.Link href="#contact">
              <button
                className="btn rounded fw-semibold"
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  padding: "8px 14px",
                  borderRadius: "8px",
                  backgroundColor: "#f94c30",
                  boxShadow: "0 2px 10px rgba(249, 76, 48, 0.3)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#d43c24";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 4px 14px rgba(249, 76, 48, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#f94c30";
                  e.target.style.transform = "none";
                  e.target.style.boxShadow = "0 2px 10px rgba(249, 76, 48, 0.3)";
                }}
              >
                Contact Us
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
} 

export default Navbars;
