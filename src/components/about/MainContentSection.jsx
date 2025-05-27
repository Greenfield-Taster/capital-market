import React from "react";
import { useTranslation } from "react-i18next";
import { CheckCircle } from "lucide-react";
import photo from "../../assets/about-us/about-2.jpg";
import "../../styles/components/about/MainContentSection.scss";

const MainContentSection = () => {
  const { t } = useTranslation();

  return (
    <section id="main-content" className="main-content-section">
      <div className="container">
        <div className="content-grid">
          <div className="content-text">
            <h2 className="section-title">
              {t("about.mainContentSection.title")}
            </h2>
            <div className="text-blocks">
              <p className="text-block">
                {t("about.mainContentSection.paragraph1")}
              </p>
              <p className="text-block">
                {t("about.mainContentSection.paragraph2")}
              </p>
            </div>
            <div className="features">
              <div className="feature">
                <CheckCircle size={24} />
                <span> {t("about.mainContentSection.certificates")}</span>
              </div>
              <div className="feature">
                <CheckCircle size={24} />
                <span>8+ {t("about.mainContentSection.yearsOnMarket")}</span>
              </div>
              <div className="feature">
                <CheckCircle size={24} />
                <span>100+ {t("about.mainContentSection.specialists")}</span>
              </div>
            </div>
          </div>
          <div className="content-image">
            <div className="image-placeholder large interactive-hover">
              <img src={photo} alt="photo" />
              <div className="shimmer-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContentSection;
