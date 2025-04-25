import React from "react";
import ProjectCard from "../components/gallery/ProjectCard";
import projectsData from "../data/projects.json";

const Gallery = () => {
  return (
    <div className="gallery-page">
      <div className="container">
        <h1 className="gallery-page__title">Наши проекты</h1>

        <div className="gallery-page__grid">
          {projectsData.map((project) => (
            <div className="gallery-page__grid-item" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
