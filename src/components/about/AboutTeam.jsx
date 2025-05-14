import React from "react";
import teamImage from "../../assets/about-us/about-team.jpg";
import "../../styles/components/About/_team.scss";

const AboutTeam = ({ t }) => {
  return (
    <section className="about-section team-section">
      <h2 className="section-title animate-on-scroll fade-in">
        {t("about.team.title")}
      </h2>

      <div className="team-image-container animate-on-scroll slide-up">
        <img src={teamImage} alt="Наша команда" className="team-image" />
        <div className="team-image-overlay">
          <div className="team-quote">
            <p>{t("about.team.quote")}</p>
          </div>
        </div>
      </div>

      <div className="team-text animate-on-scroll fade-in">
        <p className="about-text">{t("about.team.paragraph1")}</p>
        <p className="about-text">{t("about.team.paragraph2")}</p>
      </div>
    </section>
  );
};

export default AboutTeam;
