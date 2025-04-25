import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ActivityDirections from "../components/main/ActivityDirections/ActivityDirections";
import Benefits from "../components/main/Benefits/Benefits";

const CounterItem = ({ endValue, text, suffix = "", icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const duration = 2000;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(percentage * endValue));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [endValue]);

  return (
    <div className="stats-item">
      {icon && <div className="stats-icon">{icon}</div>}
      <div className="stats-number">
        {count}
        {suffix}
      </div>
      <div className="stats-text">{text}</div>
    </div>
  );
};

const Main = () => {
  const { t } = useTranslation();

  return (
    <main className="main">
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text-container">
              <h1 className="hero-title">{t("main.hero.title")}</h1>
              <p className="hero-description">{t("main.hero.description")}</p>
              <Link to="/about" className="hero-button">
                {t("main.hero.learnMore")}
              </Link>

              <div className="stats-container">
                <div className="stats-grid">
                  <CounterItem
                    endValue={9}
                    text={
                      t("main.stats.yearsOnMarket") ||
                      "років на комерційному ринку"
                    }
                    suffix="+"
                    icon={<i className="fas fa-calendar-alt"></i>}
                  />
                  <CounterItem
                    endValue={100}
                    text={
                      t("main.stats.qualifiedEmployees") ||
                      "кваліфікованих співробітників"
                    }
                    suffix="+"
                    icon={<i className="fas fa-users"></i>}
                  />
                  <CounterItem
                    endValue={3}
                    text={t("main.stats.isoCertificates") || "ISO сертифікати"}
                    icon={<i className="fas fa-certificate"></i>}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ActivityDirections />
      <Benefits />
    </main>
  );
};

export default Main;
