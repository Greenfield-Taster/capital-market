import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProjectDetail.scss";
import projectsData from "../../../data/projects.json";

const PhotoGallery = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openPhoto = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="photo-gallery">
      <div className="photo-gallery__grid">
        {photos.map((photo, index) => (
          <div
            className="photo-gallery__item"
            key={index}
            onClick={() => openPhoto(photo)}
          >
            <img
              src={photo.url}
              alt={photo.alt}
              className="photo-gallery__image"
            />
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="photo-gallery__modal" onClick={closePhoto}>
          <div
            className="photo-gallery__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="photo-gallery__close-btn" onClick={closePhoto}>
              &times;
            </button>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.alt}
              className="photo-gallery__modal-image"
            />
            {selectedPhoto.description && (
              <p className="photo-gallery__modal-description">
                {selectedPhoto.description}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки данных
    setTimeout(() => {
      const foundProject = projectsData.find((p) => p.slug === slug);
      setProject(foundProject || null);
      setLoading(false);
    }, 300);
  }, [slug]);

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
          <h1>Проект не найден</h1>
          <p>К сожалению, запрашиваемый проект не существует.</p>
          <Link to="/gallery" className="project-detail__back-btn">
            Вернуться к галерее
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="container">
        <div className="project-detail__header">
          <h1 className="project-detail__title">{project.title}</h1>
          <Link to="/gallery" className="project-detail__back-btn">
            Вернуться к галерее
          </Link>
        </div>

        <div className="project-detail__main-image">
          <img src={project.mainImage} alt={project.title} />
        </div>

        <div className="project-detail__description">
          <p>{project.description}</p>
        </div>

        <h2 className="project-detail__gallery-title">Фотогалерея проекта</h2>

        <PhotoGallery photos={project.photos} />
      </div>
    </div>
  );
};

export default ProjectDetail;
