import React from "react";
import { ArrowRight, Heart } from "lucide-react";
import "../../styles/components/about/CTASection.scss";
import { Link } from "react-router-dom";

const CTASection = ({ data }) => {
  return (
    <section id="cta" className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">{data.cta.title}</h2>
          <p className="cta-text">{data.cta.text}</p>
          <div className="cta-buttons">
            <Link
              to="/contact"
              className="btn btn-primary btn-large glow-effect pulse-animation"
            >
              <span>Зв'язатися з нами</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/design"
              className="btn btn-outline btn-large interactive-hover"
            >
              <Heart size={20} />
              Переглянути портфоліо
            </Link>
          </div>
          <div className="cta-stats">
            <div className="cta-stat interactive-hover">
              <span className="cta-stat-number">7+</span>
              <span className="cta-stat-label">РОКІВ ДОСВІДУ</span>
            </div>
            <div className="cta-stat interactive-hover">
              <span className="cta-stat-number">100+</span>
              <span className="cta-stat-label">ФАХІВЦІВ</span>
            </div>
            <div className="cta-stat interactive-hover">
              <span className="cta-stat-number">1</span>
              <span className="cta-stat-label">МЛРД. ГРН. ОБОРОТУ</span>
            </div>
            <div className="cta-stat interactive-hover">
              <span className="cta-stat-number">3</span>
              <span className="cta-stat-label">СЕРТИФІКАТИ ЯКОСТІ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
