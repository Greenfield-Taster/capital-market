import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ImageWithFallback } from "../utils/imageUtils";
import projectsData from "../data/design.json";
import "../styles/pages/_design.scss";

const DesignCard = ({ project, index }) => {
  const { t } = useTranslation();

  return (
    <div className={`design-card design-appear`}>
      <div className="design-card__image-container">
        <div className="design-card__image-overlay"></div>
        <ImageWithFallback
          src={project.mainImage}
          alt={project.title}
          className="design-card__image"
        />
      </div>
      <div className="design-card__content">
        <h2 className="design-card__title">{project.title}</h2>
        <p className="design-card__description">
          {project.description.length > 120
            ? project.description.substring(0, 120) + "..."
            : project.description}
        </p>
        <Link to={`/design/${project.slug}`} className="design-card__button">
          {t("latestProjects.viewDetails", "Детальніше")}
        </Link>
      </div>
    </div>
  );
};

// В компоненте Design
const Design = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".design-appear");
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
    <div className="design-page">
      <div className="design-hero">
        {/* Декоративные линии */}
        <div className="design-hero__decorative-line"></div>
        <div className="design-hero__decorative-line"></div>

        <div className="container">
          <div className="design-hero__content">
            <h1 className="design-hero__title">
              {t("design.title", "Наші проекти дизайну")}
            </h1>
            <p className="design-hero__description">
              {t(
                "design.description",
                "Ми створюємо функціональні та естетичні дизайнерські рішення для різних типів об'єктів. Наша команда дизайнерів працює над створенням сучасних просторів, які задовольняють потреби клієнтів."
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="design-grid">
          {projectsData.map((project, index) => (
            <DesignCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design;
