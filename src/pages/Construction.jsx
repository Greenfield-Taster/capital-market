import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ImageWithFallback } from "../utils/imageUtils";
import projectsData from "../data/projects.json";
import "../styles/pages/_construction.scss";

const ProjectRow = ({ project, index }) => {
  const { t } = useTranslation();
  const isEven = index % 2 === 1;

  const statusText =
    project.status === "completed"
      ? t("construction.statusCompleted")
      : t("construction.statusInProgress");

  return (
    <Link
      to={`/construction/${project.slug}`}
      className={`project-row project-appear ${
        isEven ? "project-row--even" : ""
      }`}
    >
      <div className="project-row__color-block"></div>
      <div className="project-row__content">
        <h2 className="project-row__title">{project.title}</h2>

        <p className="project-row__description">
          {project.description.length > 160
            ? project.description.substring(0, 160) + "..."
            : project.description}
        </p>
        <div className="project-row__actions">
          <span className="project-row__button">
            {t("latestProjects.viewDetails", "Детальніше")}
          </span>
          <div className="project-row__status-badge">{statusText}</div>
        </div>
      </div>
      <div className="project-row__image-container">
        <div className="project-row__image-overlay"></div>
        <ImageWithFallback
          src={project.mainImage}
          alt={project.title}
          className="project-row__image"
        />
      </div>
    </Link>
  );
};

const Gallery = () => {
  const { t } = useTranslation();
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [activeFilter, setActiveFilter] = useState("all");

  const projectsCounts = {
    all: projectsData.length,
    completed: projectsData.filter((project) => project.status === "completed")
      .length,
    inProgress: projectsData.filter((project) => project.status !== "completed")
      .length,
  };

  const handleFilterChange = (filterType) => {
    setActiveFilter(filterType);

    let filtered = [];
    switch (filterType) {
      case "completed":
        filtered = projectsData.filter(
          (project) => project.status === "completed"
        );
        break;
      case "inProgress":
        filtered = projectsData.filter(
          (project) => project.status !== "completed"
        );
        break;
      default:
        filtered = projectsData;
    }

    setFilteredProjects(filtered);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".project-appear");
      elements.forEach((element) => {
        element.classList.add("visible");
      });
    }, 100); // Небольшая задержка для плавности

    return () => {
      clearTimeout(timer);
    };
  }, [filteredProjects]);

  return (
    <div className="gallery-page">
      <div className="container">
        <h1 className="gallery-page__title">{t("construction.title")}</h1>

        <div className="gallery-page__filters">
          <button
            onClick={() => handleFilterChange("all")}
            className={`filter-btn ${
              activeFilter === "all" ? "filter-btn--active" : ""
            }`}
          >
            {t("construction.filterAll")}
            <span className="filter-btn__count">{projectsCounts.all}</span>
          </button>

          <button
            onClick={() => handleFilterChange("completed")}
            className={`filter-btn ${
              activeFilter === "completed" ? "filter-btn--active" : ""
            }`}
          >
            {t("construction.filterCompleted")}
            <span className="filter-btn__count">
              {projectsCounts.completed}
            </span>
          </button>

          <button
            onClick={() => handleFilterChange("inProgress")}
            className={`filter-btn ${
              activeFilter === "inProgress" ? "filter-btn--active" : ""
            }`}
          >
            {t("construction.filterInProgress")}
            <span className="filter-btn__count">
              {projectsCounts.inProgress}
            </span>
          </button>
        </div>

        <div className="gallery-page__list">
          {filteredProjects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="gallery-page__empty">
            <p>{t("construction.noProjects")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
