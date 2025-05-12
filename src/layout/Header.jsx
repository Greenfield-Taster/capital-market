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
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);

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

  // Закрываем выпадающее меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".nav-item-with-dropdown")) {
        setGalleryDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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

  // Закрыть выпадающее меню при изменении маршрута
  useEffect(() => {
    setGalleryDropdownOpen(false);
  }, [location.pathname]);

  const toggleGalleryDropdown = (e) => {
    e.preventDefault();
    setGalleryDropdownOpen(!galleryDropdownOpen);
  };

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
              <li className="nav-item nav-item-with-dropdown">
                <a
                  href="#"
                  onClick={toggleGalleryDropdown}
                  className={`nav-link dropdown-toggle ${
                    isActive("/gallery") ? "active" : ""
                  }`}
                >
                  <span>{t("header.gallery")}</span>
                  <i
                    className={`nav-icon ${
                      galleryDropdownOpen ? "dropdown-open" : ""
                    }`}
                  >
                    ▼
                  </i>
                </a>
                {galleryDropdownOpen && (
                  <div className="dropdown-menu">
                    <Link to="/construction" className="dropdown-item">
                      {t("header.construction")}
                    </Link>
                    <Link to="/manufacturing" className="dropdown-item">
                      {t("header.manufacturing")}
                    </Link>
                    <Link to="/design" className="dropdown-item">
                      {t("header.design")}
                    </Link>
                    <Link to="/contact" className="dropdown-item">
                      {t("header.trade")}
                    </Link>
                  </div>
                )}
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
