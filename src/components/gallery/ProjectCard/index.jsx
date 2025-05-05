import React from "react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../../../utils/imageUtils";
import "./ProjectCard.scss";

const ProjectCard = ({ project }) => {
  const { id, title, mainImage, slug } = project;

  return (
    <div className="project-card">
      <div className="project-card__image-container">
        <ImageWithFallback
          src={mainImage}
          alt={title}
          className="project-card__image"
        />
      </div>
      <h3 className="project-card__title">{title}</h3>
      <Link to={`/gallery/${slug}`} className="project-card__button">
        Детальніше
      </Link>
    </div>
  );
};

export default ProjectCard;
