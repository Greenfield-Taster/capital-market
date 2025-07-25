import React from "react";
import { ArrowRight, Heart } from "lucide-react";
import "../../styles/components/about/CTASection.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section id="cta" className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">{t("about.cta.title")}</h2>
          <p className="cta-text">{t("about.cta.text")}</p>
          <div className="cta-buttons">
            <Link
              to="/contact"
              className="btn btn-primary btn-large glow-effect "
            >
              <span>{t("about.cta.button")}</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/design"
              className="btn btn-outline btn-large interactive-hover"
            >
              <Heart size={20} />
              {t("about.cta.viewPortfolio")}
            </Link>
          </div>
          <div className="cta-stats">
            <div className="cta-stat interactive-hover">
              <span className="cta-stat-number">9+</span>
              <span className="cta-stat-label">
                {t("about.cta.yearsOnMarket")}
              </span>
            </div>
            <div className="cta-stat interactive-hover">
              <span className="cta-stat-number">100+</span>
              <span className="cta-stat-label">
                {t("about.cta.specialists")}
              </span>
            </div>
            <div className="cta-stat interactive-hover">
              <span className="cta-stat-number">1</span>
              <span className="cta-stat-label">{t("about.cta.oborot")}</span>
            </div>
            <div className="cta-stat interactive-hover">
              <span className="cta-stat-number">3</span>
              <span className="cta-stat-label">
                {t("about.cta.certificates")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
