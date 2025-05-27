import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Eye } from "lucide-react";
import aboutPhoto from "../../assets/about-us/about-1.jpg";
import "../../styles/components/about/HeroSection.scss";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? "animate-in" : ""}`}>
            <h1 className="hero-title">
              <span className="gradient-text">{t("about.hero.title")}</span>
              <div className="title-decoration"></div>
            </h1>

            <p className="hero-subtitle">{t("about.hero.mainQuote")}</p>

            <div className="hero-description">
              <p>{t("about.hero.paragraph1")}</p>
            </div>

            <div className="hero-cta">
              <Link to="/construction" className="btn btn-primary glow-effect">
                <Eye size={20} />
                {t("about.hero.viewProjects")}
              </Link>
            </div>
          </div>

          <div className={`hero-image ${isVisible ? "animate-in" : ""}`}>
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
