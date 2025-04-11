import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/pages/_About.scss";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-wrapper">
      <div className="container">
        <section className="about-section main-section">
          <h1 className="about-title">{t("about.title")}</h1>
          <div className="about-content">
            <p className="about-text">{t("about.main.paragraph1")}</p>
            <p className="about-text">{t("about.main.paragraph2")}</p>
            <p className="about-text">{t("about.main.paragraph3")}</p>
            <p className="about-text">{t("about.main.paragraph4")}</p>
          </div>
        </section>

        <section className="about-section philosophy-section">
          <h2 className="section-title">{t("about.philosophy.title")}</h2>
          <div className="about-content">
            <p className="about-text">{t("about.philosophy.paragraph1")}</p>
            <p className="about-text">{t("about.philosophy.paragraph2")}</p>
            <p className="about-text">{t("about.philosophy.paragraph3")}</p>
            <p className="about-text">{t("about.philosophy.paragraph4")}</p>
          </div>
        </section>

        <section className="about-section strategy-section">
          <h2 className="section-title">{t("about.strategy.title")}</h2>
          <div className="about-content">
            <p className="about-text">{t("about.strategy.intro")}</p>

            <h3 className="strategy-subtitle">
              {t("about.strategy.goalsTitle")}
            </h3>
            <div className="strategy-goals">
              <div className="strategy-goal">
                <h4 className="goal-title">
                  {t("about.strategy.goals.goal1.title")}
                </h4>
                <ul className="goal-list">
                  {t("about.strategy.goals.goal1.items", {
                    returnObjects: true,
                  }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="strategy-goal">
                <h4 className="goal-title">
                  {t("about.strategy.goals.goal2.title")}
                </h4>
                <ul className="goal-list">
                  {t("about.strategy.goals.goal2.items", {
                    returnObjects: true,
                  }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="strategy-goal">
                <h4 className="goal-title">
                  {t("about.strategy.goals.goal3.title")}
                </h4>
                <ul className="goal-list">
                  {t("about.strategy.goals.goal3.items", {
                    returnObjects: true,
                  }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="strategy-goal">
                <h4 className="goal-title">
                  {t("about.strategy.goals.goal4.title")}
                </h4>
                <ul className="goal-list">
                  {t("about.strategy.goals.goal4.items", {
                    returnObjects: true,
                  }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="strategy-goal">
                <h4 className="goal-title">
                  {t("about.strategy.goals.goal5.title")}
                </h4>
                <ul className="goal-list">
                  {t("about.strategy.goals.goal5.items", {
                    returnObjects: true,
                  }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 className="values-subtitle">
              {t("about.strategy.valuesTitle")}
            </h3>
            <div className="values-container">
              <div className="value-item">
                <h4 className="value-title">
                  {t("about.strategy.values.value1.title")}
                </h4>
                <p className="value-description">
                  {t("about.strategy.values.value1.description")}
                </p>
              </div>
              <div className="value-item">
                <h4 className="value-title">
                  {t("about.strategy.values.value2.title")}
                </h4>
                <p className="value-description">
                  {t("about.strategy.values.value2.description")}
                </p>
              </div>
              <div className="value-item">
                <h4 className="value-title">
                  {t("about.strategy.values.value3.title")}
                </h4>
                <p className="value-description">
                  {t("about.strategy.values.value3.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section stats-section">
          <h2 className="section-title">{t("about.stats.title")}</h2>
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">
                {t("about.stats.items.founded.number")}
              </div>
              <div className="stat-description">
                {t("about.stats.items.founded.description")}
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                {t("about.stats.items.employees.number")}
              </div>
              <div className="stat-description">
                {t("about.stats.items.employees.description")}
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                {t("about.stats.items.revenue.number")}
              </div>
              <div className="stat-description">
                {t("about.stats.items.revenue.description")}
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                {t("about.stats.items.certifications.number")}
              </div>
              <div className="stat-description">
                {t("about.stats.items.certifications.description")}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
