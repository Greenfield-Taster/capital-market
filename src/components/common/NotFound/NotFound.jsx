import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Home, ArrowLeft, Search, RefreshCw } from "lucide-react";
import "./notFound.scss";

const NotFound = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const elements = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      delay: i * 0.3,
      size: Math.random() * 60 + 40,
      duration: Math.random() * 3 + 4,
    }));
    setFloatingElements(elements);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`not-found ${isVisible ? "animate-in" : ""}`}>
      <div className="floating-shapes">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="floating-shape"
            style={{
              "--delay": `${element.delay}s`,
              "--size": `${element.size}px`,
              "--duration": `${element.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="not-found__container">
        <div className="not-found__icon-container">
          <div className="not-found__icon-bg"></div>
          <div className="not-found__emoji">🔍</div>
          <div className="search-ripple"></div>
        </div>
        <div className="not-found__code">
          <span className="code-digit" style={{ "--delay": "0.2s" }}>
            4
          </span>
          <div className="code-separator">
            <div className="separator-dot"></div>
            <div className="separator-dot"></div>
            <div className="separator-dot"></div>
          </div>
          <span className="code-digit" style={{ "--delay": "0.4s" }}>
            0
          </span>
          <div className="code-separator">
            <div className="separator-dot"></div>
            <div className="separator-dot"></div>
            <div className="separator-dot"></div>
          </div>
          <span className="code-digit" style={{ "--delay": "0.6s" }}>
            4
          </span>
        </div>

        <h1 className="not-found__title">
          <span className="typing-text">
            {t("notFound.notFoundPage.title")}
          </span>
          <span className="cursor">|</span>
        </h1>
        <p className="not-found__description">
          {t("notFound.notFoundPage.description")}
        </p>
        <div className="not-found__illustration">
          <div className="illustration-container">
            <div className="magnifying-glass">
              <div className="glass-lens"></div>
              <div className="glass-handle"></div>
            </div>
            <div className="question-marks">
              <span style={{ "--delay": "1s" }}>?</span>
              <span style={{ "--delay": "1.2s" }}>?</span>
              <span style={{ "--delay": "1.4s" }}>?</span>
            </div>
            <div className="paper-stack">
              <div className="paper paper-1"></div>
              <div className="paper paper-2"></div>
              <div className="paper paper-3"></div>
            </div>
          </div>
        </div>
        <div className="not-found__actions">
          <Link to="/" className="btn btn-outline">
            <Home size={20} />
            {t("notFound.notFoundPage.backToMain")}
          </Link>

          <button
            className="btn btn-ghost"
            onClick={() => window.location.reload()}
          >
            <RefreshCw size={20} />
            {t("notFound.notFoundPage.tryAgain")}
          </button>
        </div>
        <div className="not-found__mood-emojis">
          <span className="mood-emoji" style={{ "--delay": "2s" }}>
            😅
          </span>
          <span className="mood-emoji" style={{ "--delay": "2.2s" }}>
            🤷
          </span>
          <span className="mood-emoji" style={{ "--delay": "2.4s" }}>
            💭
          </span>
        </div>
        <div className="not-found__suggestions">
          <h3> {t("notFound.notFoundPage.interests")}</h3>
          <div className="suggestions-list">
            <Link to="/construction" className="suggestion-link">
              🏗️ {t("notFound.notFoundPage.constrProj")}
            </Link>
            <Link to="/design" className="suggestion-link">
              🎨 {t("notFound.notFoundPage.designSolution")}
            </Link>
            <Link to="/about" className="suggestion-link">
              ℹ️ {t("notFound.notFoundPage.aboutCompany")}
            </Link>
          </div>
        </div>
      </div>

      <div className="interactive-particles">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              "--particle-delay": `${i * 0.2}s`,
              "--particle-x": `${Math.random() * 100}%`,
              "--particle-y": `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NotFound;
