import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../styles/layout/_header.scss";

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const isActive = (path) => {
    if (
      path === "/capital-market/" &&
      location.pathname === "/capital-market/"
    ) {
      return true;
    }
    if (path !== "/capital-market/" && location.pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/capital-market/">CAPITAL MARKET</Link>
          </div>

          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link
                  to="/capital-market/"
                  className={`nav-link ${
                    isActive("/capital-market/") ? "active" : ""
                  }`}
                >
                  <span>{t("header.home", "Головна")}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link ${isActive("/about") ? "active" : ""}`}
                >
                  <span>{t("header.about", "О нас")}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/gallery"
                  className={`nav-link ${isActive("/gallery") ? "active" : ""}`}
                >
                  <span>{t("header.gallery", "Галерея")}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                >
                  <span>{t("header.contacts", "Контакти")}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/faq"
                  className={`nav-link ${isActive("/faq") ? "active" : ""}`}
                >
                  <span>{t("header.faq", "FAQ")}</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="language-switcher">
            <button
              onClick={() => changeLanguage("en")}
              className={`lang-btn ${i18n.language === "en" ? "active" : ""}`}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("uk")}
              className={`lang-btn ${i18n.language === "uk" ? "active" : ""}`}
            >
              UA
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
