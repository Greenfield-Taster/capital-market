import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { usePreloader } from "../components/common/Preloader";

import "../styles/layout/_header.scss";
import "../styles/responsive/layout/_header-responsive.scss";

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { initialLoadComplete } = usePreloader();

  const [logoVisible, setLogoVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

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
    setLanguageDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setGalleryDropdownOpen(false);
    setLanguageDropdownOpen(false);
  };

  const toggleGalleryDropdown = (e) => {
    e.preventDefault();
    setGalleryDropdownOpen(!galleryDropdownOpen);
  };

  const toggleLanguageDropdown = (e) => {
    e.preventDefault();
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setGalleryDropdownOpen(false);
    setLanguageDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".header")) {
        setMobileMenuOpen(false);
        setGalleryDropdownOpen(false);
        setLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

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

  const currentLanguage = i18n.language === "uk" ? "UA" : "EN";

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div
            className={`logo ${logoVisible ? "logo-animation" : "logo-hidden"}`}
          >
            <Link to="/" onClick={closeMobileMenu}>
              CAPITAL MARKET
            </Link>
          </div>

          <nav className="nav nav--desktop">
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
                  <ChevronDown
                    size={16}
                    className={`nav-icon ${
                      galleryDropdownOpen ? "dropdown-open" : ""
                    }`}
                  />
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

          <div className="language-switcher language-switcher--desktop">
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

          <div className="mobile-controls">
            <div className="language-switcher language-switcher--mobile">
              <button
                onClick={toggleLanguageDropdown}
                className="language-toggle"
              >
                <Globe size={20} />
                <span>{currentLanguage}</span>
                <ChevronDown
                  size={16}
                  className={`lang-icon ${
                    languageDropdownOpen ? "dropdown-open" : ""
                  }`}
                />
              </button>

              {languageDropdownOpen && (
                <div className="language-dropdown">
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`lang-option ${
                      i18n.language === "en" ? "active" : ""
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => changeLanguage("uk")}
                    className={`lang-option ${
                      i18n.language === "uk" ? "active" : ""
                    }`}
                  >
                    UA
                  </button>
                </div>
              )}
            </div>

            <button
              className={`burger-menu ${mobileMenuOpen ? "active" : ""}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <div className="burger-icon">
                <div className="burger-line burger-line--1"></div>
                <div className="burger-line burger-line--2"></div>
                <div className="burger-line burger-line--3"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
        <div className="mobile-menu-content">
          <nav className="nav nav--mobile">
            <ul className="nav-list">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${isActive("/") ? "active" : ""}`}
                  onClick={closeMobileMenu}
                >
                  <span>{t("header.home")}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link ${isActive("/about") ? "active" : ""}`}
                  onClick={closeMobileMenu}
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
                  <ChevronDown
                    size={16}
                    className={`nav-icon ${
                      galleryDropdownOpen ? "dropdown-open" : ""
                    }`}
                  />
                </a>
                {galleryDropdownOpen && (
                  <div className="dropdown-menu">
                    <Link
                      to="/construction"
                      className="dropdown-item"
                      onClick={closeMobileMenu}
                    >
                      {t("header.construction")}
                    </Link>
                    <Link
                      to="/manufacturing"
                      className="dropdown-item"
                      onClick={closeMobileMenu}
                    >
                      {t("header.manufacturing")}
                    </Link>
                    <Link
                      to="/design"
                      className="dropdown-item"
                      onClick={closeMobileMenu}
                    >
                      {t("header.design")}
                    </Link>
                    <Link
                      to="/contact"
                      className="dropdown-item"
                      onClick={closeMobileMenu}
                    >
                      {t("header.trade")}
                    </Link>
                  </div>
                )}
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                  onClick={closeMobileMenu}
                >
                  <span>{t("header.contacts")}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/faq"
                  className={`nav-link ${isActive("/faq") ? "active" : ""}`}
                  onClick={closeMobileMenu}
                >
                  <span>{t("header.faq")}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
