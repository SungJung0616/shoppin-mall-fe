import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "./footer.style.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>&copy; {new Date().getFullYear()} SJ-ShoppingMall. All rights reserved.</p>
            <div className="social-icons">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
            <p className="study-project-note">
              * This site is for a personal project for study purposes only and is non-commercial. *
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
