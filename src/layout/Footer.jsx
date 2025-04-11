import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/layout/_footer.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">{t("footer.about_company")}</h3>
            <ul className="footer-menu">
              <li>
                <Link to="/gallery">{t("footer.gallery")}</Link>
              </li>
              <li>
                <Link to="/about">{t("footer.about")}</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">&nbsp;</h3>
            <ul className="footer-menu">
              <li>
                <Link to="/faq">{t("footer.faq")}</Link>
              </li>
              <li>
                <Link to="/contact">{t("footer.contacts")}</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section contacts-section">
            <div className="contact-info">
              <p className="address">{t("footer.address")}</p>
              <p className="phone-number">{t("footer.phone")}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
