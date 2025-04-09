import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/layout/_footer.scss";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">ЛОГО</div>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/capital-market/" className="nav-link">
                  головна
                </Link>
              </li>
              <li className="nav-item">
                <Link Link to="/about" className="nav-link">
                  о нас
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/gallery" className="nav-link">
                  галерея
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  контакти
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" className="nav-link">
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
          <div className="language-switcher">
            <button onClick={() => changeLanguage("en")} className="lang-btn">
              English
            </button>
            <button onClick={() => changeLanguage("uk")} className="lang-btn">
              Українська
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
