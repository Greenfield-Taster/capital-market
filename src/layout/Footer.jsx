import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/layout/_footer.scss";
import Logo from "../assets/logo.svg";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <Link to="/" className="footer-logo-link">
                <img src={Logo} alt="Логотип" className="footer-logo" />
              </Link>
              <div className="footer-contacts">
                <div className="contact-item">
                  <div className="icon-wrapper">
                    <i className="location-icon"></i>
                  </div>
                  <span>{t("footer.address")}</span>
                </div>
                <div className="contact-item">
                  <div className="icon-wrapper">
                    <i className="phone-icon"></i>
                  </div>
                  <a className="phone-link">{t("footer.phone")}</a>
                </div>
              </div>
            </div>

            <div className="footer-navigation">
              <div className="footer-nav-column">
                <h3 className="footer-title">{t("footer.about_company")}</h3>
                <ul className="footer-menu">
                  <li>
                    <Link to="/about">{t("footer.about")}</Link>
                  </li>
                  <li>
                    <Link to="/gallery">{t("footer.gallery")}</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-nav-column">
                <h3 className="footer-title">{t("footer.information")}</h3>
                <ul className="footer-menu">
                  <li>
                    <Link to="/faq">{t("footer.faq")}</Link>
                  </li>
                  <li>
                    <Link to="/contact">{t("footer.contacts")}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-info-block">
              <p className="copyright">© {currentYear} Capital Market</p>
              <p className="work-hours">{t("footer.workingHours")}</p>
            </div>
            <button
              className="scroll-top-btn"
              onClick={scrollToTop}
              aria-label="Наверх"
            >
              <span className="arrow-up"></span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
