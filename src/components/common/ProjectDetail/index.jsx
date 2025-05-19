import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LazyImage from "../../../utils/LazyImage/LazyImage";
import projectsData from "../../../data/projects.json";
import designProjectsData from "../../../data/design.json";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import "./ProjectDetail.scss";

const fixPhotoPaths = (photo) => {
  if (typeof photo !== "object" || !photo) return photo;
  return { ...photo };
};

const fixPhotoArrayPaths = (photos) => {
  if (!Array.isArray(photos)) return photos;
  return photos.map((photo) => fixPhotoPaths(photo));
};

const fixProjectPaths = (project) => {
  if (typeof project !== "object" || !project) return project;

  const newProject = { ...project };

  if (Array.isArray(newProject.photos)) {
    newProject.photos = fixPhotoArrayPaths(newProject.photos);
  }

  return newProject;
};

const ProjectDetail = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const location = useLocation();

  // Определяем, на какой странице находимся (design или construction)
  const isDesignPage = location.pathname.includes("/design/");
  const basePathName = isDesignPage ? "/design" : "/construction";

  // Выбираем соответствующие данные в зависимости от страницы
  const currentData = isDesignPage ? designProjectsData : projectsData;

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState({
    title: false,
    image: false,
    description: false,
    gallery: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundProject = currentData.find((p) => p.slug === slug);

      const fixedProject = foundProject ? fixProjectPaths(foundProject) : null;

      setProject(fixedProject);
      setLoading(false);

      setTimeout(() => setVisible((prev) => ({ ...prev, title: true })), 100);
      setTimeout(() => setVisible((prev) => ({ ...prev, image: true })), 300);
      setTimeout(
        () => setVisible((prev) => ({ ...prev, description: true })),
        500
      );
      setTimeout(() => setVisible((prev) => ({ ...prev, gallery: true })), 700);
    }, 300);

    return () => clearTimeout(timer);
  }, [slug, currentData]);

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
        <div className="project-detail__container">
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
          <Link to={basePathName} className="project-detail__back-btn">
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
        <Link to={basePathName} className="project-detail__back-btn">
          <span className="back-icon">←</span>
          <span className="back-text">
            {t("gallery.backToGallery", "Назад")}
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
          <LazyImage
            src={project.mainImage}
            alt={project.title}
            aspectRatio="16/9"
            priority={true}
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
            {currentData
              .filter((item) => item.id !== project.id)
              .slice(0, 3)
              .map((item, index) => {
                const fixedItem = fixProjectPaths(item);

                return (
                  <Link
                    to={`${basePathName}/${fixedItem.slug}`}
                    className={`other-project-card delay-${index}`}
                    key={fixedItem.id}
                  >
                    <div className="other-project-image">
                      <LazyImage
                        src={fixedItem.mainImage}
                        alt={fixedItem.title}
                        aspectRatio="16/9"
                        priority={true}
                      />
                    </div>
                    <div className="other-project-overlay">
                      <h3 className="other-project-title">{fixedItem.title}</h3>
                    </div>
                  </Link>
                );
              })}
          </div>

          <div className="projects-action">
            <Link to={basePathName} className="view-all-btn">
              {t("latestProjects.viewAll", "Переглянути всі проекти")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
