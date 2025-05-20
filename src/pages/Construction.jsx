import { useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".project-appear");
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight * 0.85) {
          element.classList.add("visible");
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="gallery-page">
      <div className="container">
        <h1 className="gallery-page__title">
          {t("gallery.title", "Наші проекти")}
        </h1>

        <div className="gallery-page__list">
          {projectsData.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
