import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ImageWithFallback } from "../../utils/imageUtils";
import projectsData from "../../data/projects.json";
import "./_construction.scss";

const ProjectRow = ({ project, index }) => {
  const { t } = useTranslation();

  return (
    <div className={`project-row project-appear`}>
      <div className="project-row__color-block"></div>
      <div className="project-row__content">
        <h2 className="project-row__title">{project.title}</h2>
        <p className="project-row__description">
          {project.description.length > 160
            ? project.description.substring(0, 160) + "..."
            : project.description}
        </p>
        <Link
          to={`/construction/${project.slug}`}
          className="project-row__button"
        >
          {t("latestProjects.viewDetails", "Детальніше")}
        </Link>
      </div>
      <div className="project-row__image-container">
        <div className="project-row__image-overlay"></div>
        <ImageWithFallback
          src={project.mainImage}
          alt={project.title}
          className="project-row__image"
        />
      </div>
    </div>
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
