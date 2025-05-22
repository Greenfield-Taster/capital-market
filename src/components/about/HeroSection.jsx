import React from "react";
import { Eye, Sparkles } from "lucide-react";
import aboutPhoto from "../../assets/about-us/ChatGPT Image May 22, 2025, 03_10_55 PM.png";
import "../../styles/components/about/HeroSection.scss";
import { Link } from "react-router-dom";

const HeroSection = ({ data }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">{data.title}</span>
              <div className="title-decoration"></div>
            </h1>
            <p className="hero-subtitle">{data.mainQuote}</p>
            <div className="hero-description">
              <p>{data.paragraph1}</p>
            </div>
            <div className="hero-cta">
              <Link to="/construction" className="btn btn-primary">
                <Eye size={20} />
                Дивитися проекти
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder-hero">
              <img src={aboutPhoto} alt="aboutPhoto" />
              <div className="image-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
