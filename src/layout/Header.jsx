import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { usePreloader } from "../components/common/Preloader";

import "../styles/layout/_header.scss";

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { initialLoadComplete } = usePreloader();
  const [logoVisible, setLogoVisible] = useState(false);

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") {
      return true;
    }
    if (path !== "/" && location.pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    if (initialLoadComplete) {
      setLogoVisible(true);
    } else {
      const timer = setTimeout(() => {
        setLogoVisible(true);
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, [initialLoadComplete]);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div
            className={`logo ${logoVisible ? "logo-animation" : "logo-hidden"}`}
          >
            <Link to="/">CAPITAL MARKET</Link>
          </div>

          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${isActive("/") ? "active" : ""}`}
                >
                  <span>{t("header.home")}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link ${isActive("/about") ? "active" : ""}`}
                >
                  <span>{t("header.about")}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/gallery"
                  className={`nav-link ${isActive("/gallery") ? "active" : ""}`}
                >
                  <span>{t("header.gallery")}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                >
                  <span>{t("header.contacts")}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/faq"
                  className={`nav-link ${isActive("/faq") ? "active" : ""}`}
                >
                  <span>{t("header.faq")}</span>
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
