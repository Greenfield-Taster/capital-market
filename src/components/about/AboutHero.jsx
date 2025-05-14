import React from "react";
import aboutImage from "../../assets/about-us/about-1.jpg";
import AboutStats from "./AboutStats";
import "../../styles/components/About/_hero.scss";

const AboutHero = ({ t }) => {
  return (
    <section className="about-section main-section">
      <h1 className="about-title animate-on-scroll fade-in">
        {t("about.title")}
      </h1>

      <div className="about-content">
        <div className="about-image-container animate-on-scroll slide-right">
          <div className="about-image">
            <img src={aboutImage} alt="ТД Столиця Маркет" />
            <div className="image-overlay"></div>
          </div>
          <div className="about-image-caption">
            <span className="caption-year">2016</span>
            <span className="caption-separator">|</span>
            <span className="caption-text">ТД Столиця Маркет</span>
          </div>
        </div>

        <div className="about-text-container">
          <p className="about-text animate-on-scroll slide-left">
            {t("about.main.paragraph1")}
          </p>
          <p className="about-text animate-on-scroll slide-left">
            {t("about.main.paragraph2")}
          </p>
        </div>
      </div>

      <AboutStats t={t} />

      <div className="additional-content">
        <div className="left-column animate-on-scroll slide-right">
          <p className="about-text">{t("about.main.paragraph3")}</p>
        </div>
        <div className="right-column animate-on-scroll slide-left">
          <p className="about-text">{t("about.main.paragraph4")}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
