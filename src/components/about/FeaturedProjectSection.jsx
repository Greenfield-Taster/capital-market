import React from "react";
import { CheckCircle, Eye, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import sobornyPhoto from "../../assets/about-us/soborny-photo.jpg";
import "../../styles/components/about/FeaturedProjectSection.scss";

const FeaturedProjectSection = () => {
  const { t } = useTranslation();

  return (
    <section id="featured-project" className="featured-project-section">
      <div className="container">
        <div className="project-content">
          <div className="project-text">
            <h2 className="section-title">
              {t("about.featuredProject.title")}
            </h2>
            <p className="project-description">
              {t("about.featuredProject.description")}
            </p>
            <div className="project-features">
              <div className="feature">
                <CheckCircle size={20} />
                <span>{t("about.featuredProject.span1")}</span>
              </div>
              <div className="feature">
                <CheckCircle size={20} />
                <span>{t("about.featuredProject.span2")}</span>
              </div>
              <div className="feature">
                <CheckCircle size={20} />
                <span>{t("about.featuredProject.span3")}</span>
              </div>
            </div>
            <div className="project-cta">
              <Link
                to="/construction/soborny-151"
                className="btn btn-outline glow-effect"
              >
                <Eye size={20} />
                {t("about.featuredProject.viewProject")}
              </Link>
            </div>
          </div>
          <div className="project-image">
            <div className="image-placeholder">
              <img src={sobornyPhoto} alt="sobornyPhoto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectSection;
