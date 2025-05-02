import React from "react";
import valueImage1 from "../../assets/main-bg - Copy.png";
import valueImage2 from "../../assets/main-bg - Copy.png";
import valueImage3 from "../../assets/main-bg - Copy.png";
import "../../styles/components/About/_strategy.scss";

const AboutStrategy = ({ t }) => {
  return (
    <section className="about-section strategy-section">
      <h2 className="section-title animate-on-scroll fade-in">
        {t("about.strategy.title")}
      </h2>

      <div className="about-content">
        <p className="about-text animate-on-scroll fade-in">
          {t("about.strategy.intro")}
        </p>

        <h3 className="strategy-subtitle animate-on-scroll fade-in">
          {t("about.strategy.goalsTitle")}
        </h3>

        <div className="strategy-goals">
          {[1, 2, 3, 4, 5].map((goalNum) => (
            <div
              key={goalNum}
              className="strategy-goal animate-on-scroll slide-up"
              style={{ "--item-index": goalNum - 1 }}
            >
              <h4 className="goal-title">
                {t(`about.strategy.goals.goal${goalNum}.title`)}
              </h4>
              <ul className="goal-list">
                {t(`about.strategy.goals.goal${goalNum}.items`, {
                  returnObjects: true,
                }).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="values-subtitle animate-on-scroll fade-in">
          {t("about.strategy.valuesTitle")}
        </h3>

        <div className="values-container">
          {[1, 2, 3].map((valueNum) => (
            <div
              key={valueNum}
              className="value-item animate-on-scroll slide-up"
              style={{ "--item-index": valueNum - 1 }}
            >
              <div className="value-image">
                <img
                  src={
                    valueNum === 1
                      ? valueImage1
                      : valueNum === 2
                      ? valueImage2
                      : valueImage3
                  }
                  alt={t(`about.strategy.values.value${valueNum}.title`)}
                />
              </div>
              <h4 className="value-title">
                {t(`about.strategy.values.value${valueNum}.title`)}
              </h4>
              <p className="value-description">
                {t(`about.strategy.values.value${valueNum}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStrategy;
