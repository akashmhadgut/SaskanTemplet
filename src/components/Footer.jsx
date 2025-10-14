import React from "react";
import "./Footer.css"; // optional, your CSS file

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-left">
          <img src="/public/image1.png" alt="Sasken Logo" className="footer-logo" />
          <p className="footer-description">
            Sasken is a specialist in Product Engineering and Digital Transformation providing concept-to-market, chip-to-cognition R&D services to global leaders in Semiconductor, Automotive, Industrials, Smart Devices & Wearables, Enterprise Grade Devices, Satcom and Transportation industries.
          </p>
          <div className="footer-links">
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="#">Contact Us</a>
            <a href="#">Investors</a>
            <a href="#">News</a>
          </div>
        </div>

        <div className="footer-right">
          <h4>Corporate Headquarters</h4>
          <p>
            Sasken Technologies Ltd<br />
            139/25, Ring Road, Domlur, Bengaluru 560071, India<br />
            CIN# L72100KA1989PLC014226
          </p>

          <div className="social-icons">
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-x-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fas fa-comment-dots"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Sasken Technologies Ltd 1989 – 2025</p>
        <div className="bottom-links">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
