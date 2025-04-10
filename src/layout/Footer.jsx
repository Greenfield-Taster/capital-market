import React from "react";
import { Link } from "react-router-dom";
import "../styles/layout/_footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">ПРО КОМПАНІЮ</h3>
            <ul className="footer-menu">
              <li>
                <Link to="/gallery">ГАЛЕРЕЯ</Link>
              </li>
              <li>
                <Link to="/about">ПРО КОМПАНІЮ</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">&nbsp;</h3>
            <ul className="footer-menu">
              <li>
                <Link to="/faq">ПИТАННЯ ВІДПОВІДІ</Link>
              </li>
              <li>
                <Link to="/contact">КОНТАКТИ</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section contacts-section">
            <div className="contact-info">
              <p className="address">м. Харків, пр. Науки (Леніна) 22-А</p>
              <p className="phone-number">+38 (050) 604 23 22</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
