import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ImageWithFallback } from "../../../utils/imageUtils";
import projectsData from "../../../data/projects.json";
import "./LatestProjects.scss";

const LatestProjects = () => {
  const { t } = useTranslation();

  const latestProjects = projectsData.slice(0, 3);

  const truncateDescription = (description, maxLength = 120) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength).trim() + "...";
  };

  return (
    <section className="latest-projects">
      <div className="container">
        <h2 className="latest-projects__title">{t("latestProjects.title")}</h2>

        <div className="latest-projects__subtitle">
          {t("latestProjects.subtitle")}
        </div>

        <div className="projects-gallery">
          {latestProjects.map((project, index) => (
            <article
              className="project-card"
              key={project.id}
              data-project-index={index}
            >
              <div className="project-card__image">
                <ImageWithFallback
                  src={project.mainImage}
                  alt={`${project.title} - ${t(
                    "latestProjects.imageAlt",
                    "фото проекту"
                  )}`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="project-card__overlay">
                  <Link
                    to={`/construction/${project.slug}`}
                    className="project-card__button"
                    aria-label={`${t(
                      "latestProjects.viewDetails",
                      "Детальніше"
                    )} - ${project.title}`}
                  >
                    {t("latestProjects.viewDetails")}
                  </Link>
                </div>
              </div>

              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">
                  {truncateDescription(project.description)}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="latest-projects__action">
          <Link
            to="/construction"
            className="buttonViewAll"
            aria-label={t(
              "latestProjects.viewAllProjects",
              "Переглянути всі проекти будівництва"
            )}
          >
            <span>{t("latestProjects.viewAll")}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
