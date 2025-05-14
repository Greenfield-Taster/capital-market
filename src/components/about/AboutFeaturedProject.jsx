import React from "react";
import featuredProjectImage from "../../assets/about-us/about-FeaturedProject.jpg";
import "../../styles/components/About/_featured.scss";

const AboutFeaturedProject = ({ t }) => {
  return (
    <section className="featured-project-section">
      <div className="featured-project-container">
        <div className="featured-content animate-on-scroll slide-right">
          <h2 className="section-title">{t("about.featuredProject.title")}</h2>
          <p className="featured-description">
            {t("about.featuredProject.description")}
          </p>
        </div>
        <div className="featured-project-image animate-on-scroll scale-in">
          <img
            src={featuredProjectImage}
            alt={t("about.featuredProject.title")}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutFeaturedProject;
