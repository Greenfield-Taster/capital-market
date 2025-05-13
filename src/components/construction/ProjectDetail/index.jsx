import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ImageWithFallback, StylishImage } from "../../../utils/imageUtils";
import projectsData from "../../../data/projects.json";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import "./ProjectDetail.scss";

const ProjectDetail = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState({
    title: false,
    image: false,
    description: false,
    gallery: false,
  });

  useEffect(() => {
    setTimeout(() => {
      const foundProject = projectsData.find((p) => p.slug === slug);
      setProject(foundProject || null);
      setLoading(false);

      // Поетапно показуємо елементи для кращого візуального ефекту
      setTimeout(() => setVisible((prev) => ({ ...prev, title: true })), 100);
      setTimeout(() => setVisible((prev) => ({ ...prev, image: true })), 300);
      setTimeout(
        () => setVisible((prev) => ({ ...prev, description: true })),
        500
      );
      setTimeout(() => setVisible((prev) => ({ ...prev, gallery: true })), 700);
    }, 300);
  }, [slug]);

  // Анімація прокрутки для галереї
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
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
  }, [loading]);

  if (loading) {
    return (
      <div className="project-detail loading">
        <div className="container">
          <div className="project-detail__loader"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-detail not-found">
        <div className="container">
          <h1>{t("gallery.projectNotFound", "Проект не знайдено")}</h1>
          <p>
            {t(
              "gallery.projectNotFoundDesc",
              "На жаль, запитуваний проект не існує."
            )}
          </p>
          <Link to="/construction" className="project-detail__back-btn">
            {t("gallery.backToGallery", "Повернутися до галереї")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="decorative-element circle-1"></div>
      <div className="decorative-element circle-2"></div>
      <div className="decorative-element line-1"></div>

      <div className="floating-back-button">
        <Link to="/construction" className="project-detail__back-btn">
          <span className="back-icon">←</span>
          <span className="back-text">
            {t("gallery.backToGallery", "Галерея")}
          </span>
        </Link>
      </div>

      <div className="project-detail__header">
        <div className="container">
          <h1
            className={`project-detail__title ${
              visible.title ? "visible" : ""
            }`}
          >
            {project.title}
          </h1>
        </div>
      </div>

      <div className="project-detail__hero">
        <div
          className={`project-detail__main-image ${
            visible.image ? "visible" : ""
          }`}
        >
          <StylishImage
            src={project.mainImage}
            alt={project.title}
            aspectRatio="16/9"
          />
        </div>
      </div>

      <div className="container">
        <div
          className={`project-detail__description ${
            visible.description ? "visible" : ""
          }`}
        >
          <p>{project.description}</p>
        </div>

        <div className={`gallery-section ${visible.gallery ? "visible" : ""}`}>
          <h2 className="project-detail__gallery-title animate-on-scroll fade-in">
            {t("gallery.projectPhotos", "Фотогалерея проекту")}
          </h2>

          <PhotoGallery photos={project.photos} />
        </div>

        <div className="other-projects animate-on-scroll fade-in">
          <h2 className="section-title">
            {t("gallery.otherProjects", "Інші проекти")}
          </h2>

          <div className="other-projects-grid">
            {projectsData
              .filter((item) => item.id !== project.id)
              .slice(0, 3)
              .map((item, index) => (
                <Link
                  to={`/construction/${item.slug}`}
                  className={`other-project-card delay-${index}`}
                  key={item.id}
                >
                  <div className="other-project-image">
                    <ImageWithFallback src={item.mainImage} alt={item.title} />
                  </div>
                  <div className="other-project-overlay">
                    <h3 className="other-project-title">{item.title}</h3>
                  </div>
                </Link>
              ))}
          </div>

          <div className="projects-action">
            <Link to="/construction" className="view-all-btn">
              {t("latestProjects.viewAll", "Переглянути всі проекти")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
