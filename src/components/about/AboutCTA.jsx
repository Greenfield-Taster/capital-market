import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/About/_cta.scss";

const AboutCTA = ({ t }) => {
  return (
    <section className="about-section cta-section animate-on-scroll fade-in">
      <div className="cta-container">
        <h2 className="cta-title">{t("about.cta.title")}</h2>
        <p className="cta-text">{t("about.cta.text")}</p>
        <Link to="/contact" className="cta-button">
          {t("about.cta.button")}
        </Link>
      </div>
    </section>
  );
};

export default AboutCTA;
