import React from "react";
import philosophyImage1 from "../../assets/about-us/about-philosophy-1.jpg";
import philosophyImage2 from "../../assets/about-us/about-philosophy-2.jpg";
import "../../styles/components/About/_philosophy.scss";

const AboutPhilosophy = ({ t }) => {
  return (
    <section className="about-section philosophy-section animate-on-scroll fade-in">
      <h2 className="section-title">{t("about.philosophy.title")}</h2>

      <div className="philosophy-content">
        <div className="philosophy-media">
          <div className="philosophy-image-container">
            <img
              src={philosophyImage1}
              alt="Наша філософія"
              loading="eager"
              decoding="sync"
              draggable="false"
            />
          </div>
        </div>

        <div className="philosophy-text">
          <div className="philosophy-item">
            <p className="about-text">{t("about.philosophy.paragraph1")}</p>
            <p className="about-text">{t("about.philosophy.paragraph2")}</p>
          </div>

          <div className="philosophy-item">
            <p className="about-text">{t("about.philosophy.paragraph3")}</p>
            <p className="about-text">{t("about.philosophy.paragraph4")}</p>
          </div>
        </div>

        <div className="philosophy-media">
          <div className="philosophy-image-container">
            <img
              src={philosophyImage2}
              alt="Наша філософія"
              loading="eager"
              decoding="sync"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophy;
