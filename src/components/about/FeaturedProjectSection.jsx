import React from "react";
import { CheckCircle, Eye, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import sobornyPhoto from "../../assets/about-us/soborny-photo.jpg";
import "../../styles/components/about/FeaturedProjectSection.scss";

const FeaturedProjectSection = ({ data }) => {
  return (
    <section id="featured-project" className="featured-project-section">
      <div className="container">
        <div className="project-content">
          <div className="project-text">
            <h2 className="section-title">{data.featuredProject.title}</h2>
            <p className="project-description">
              {data.featuredProject.description}
            </p>
            <div className="project-features">
              <div className="feature">
                <CheckCircle size={20} />
                <span>Інноваційні матеріали</span>
              </div>
              <div className="feature">
                <CheckCircle size={20} />
                <span>Максимальний захист</span>
              </div>
              <div className="feature">
                <CheckCircle size={20} />
                <span>Сучасні технології</span>
              </div>
            </div>
            <div className="project-cta">
              <Link
                to="/construction/soborny-151"
                className="btn btn-outline glow-effect"
              >
                <Eye size={20} />
                Переглянути проект
              </Link>
            </div>
          </div>
          <div className="project-image">
            <div className="image-placeholder large">
              <img src={sobornyPhoto} alt="sobornyPhoto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectSection;
