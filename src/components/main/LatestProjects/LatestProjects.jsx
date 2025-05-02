import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import projectsData from "../../../data/projects.json";
import "./LatestProjects.scss";

const LatestProjects = () => {
  const { t } = useTranslation();

  // Взяти 3 останні проекти
  const latestProjects = projectsData.slice(0, 3);

  return (
    <section className="latest-projects">
      <div className="container">
        <h2 className="latest-projects__title">
          {t("latestProjects.title", "Наші останні проекти")}
        </h2>

        <div className="latest-projects__subtitle">
          {t(
            "latestProjects.subtitle",
            "Ознайомтеся з нашими найсвіжішими роботами у сфері будівництва та реконструкції"
          )}
        </div>

        <div className="projects-gallery">
          {latestProjects.map((project, index) => (
            <div
              className={`project-card ${
                index === 1 ? "project-card--featured" : ""
              }`}
              key={project.id}
            >
              <div className="project-card__image">
                <img src={project.mainImage} alt={project.title} />
                <div className="project-card__overlay">
                  <Link
                    to={`/gallery/${project.slug}`}
                    className="project-card__btn"
                  >
                    {t("latestProjects.viewDetails", "Детальніше")}
                  </Link>
                </div>
              </div>
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">
                  {project.description.length > 120
                    ? project.description.substring(0, 120) + "..."
                    : project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="latest-projects__action">
          <Link to="/gallery" className="btn btn--secondary">
            {t("latestProjects.viewAll", "Переглянути всі проекти")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
