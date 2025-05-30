import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ActivityDirections from "../components/main/ActivityDirections/ActivityDirections";
import Benefits from "../components/main/Benefits/Benefits";
import LatestProjects from "../components/main/LatestProjects/LatestProjects";
import useScrollAnimation from "../utils/useScrollAnimation";
import "../styles/pages/_Main.scss";
import "../styles/responsive/pages/_main-responsive.scss";
import CounterItem from "../utils/CounterItem";

const Main = () => {
  const { t } = useTranslation();

  useScrollAnimation();

  return (
    <main className="main">
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{t("main.hero.title")}</h1>
            <p className="hero-description">{t("main.hero.description")}</p>
            <Link to="/about" className="hero-button">
              {t("main.hero.learnMore")}
            </Link>

            <div className="stats-container animate-on-scroll slide-up">
              <div className="stats-grid">
                <CounterItem
                  endValue={9}
                  text={t("main.stats.yearsOnMarket")}
                  suffix="+"
                  icon={<i className="fas fa-calendar-alt"></i>}
                />
                <CounterItem
                  endValue={100}
                  text={t("main.stats.qualifiedEmployees")}
                  suffix="+"
                  icon={<i className="fas fa-users"></i>}
                />
                <CounterItem
                  endValue={3}
                  text={t("main.stats.isoCertificates")}
                  icon={<i className="fas fa-certificate"></i>}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ActivityDirections />
      <Benefits />
      <LatestProjects />
    </main>
  );
};

export default Main;
