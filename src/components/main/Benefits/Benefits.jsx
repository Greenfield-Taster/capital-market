import React from "react";
import { useTranslation } from "react-i18next";
import "./Benefits.scss";
import benefitsImage from "../../../assets/benefitsImage.png";
import experienceImage from "../../../assets/experience.png";
import certificatesImage from "../../../assets/Certificates.png";
import financialSuccessImage from "../../../assets/financial-success-100.png";
import individualApproachImage from "../../../assets/Individual-approach.png";
import modernTechnologiesImage from "../../../assets/modern-technologies.png";
import keyImage from "../../../assets/key.png";
import fastLogisticImage from "../../../assets/fast-logistic.png";
import partnerNetworkImage from "../../../assets/partner-network.png";

const Benefits = () => {
  const { t } = useTranslation();

  // Маппинг ID преимуществ с их иконками
  const benefitIcons = {
    experience: experienceImage,
    approach: individualApproachImage,
    partners: partnerNetworkImage,
    certificates: certificatesImage,
    turnkey: keyImage,
    technologies: modernTechnologiesImage,
    tenders: financialSuccessImage,
    logistics: fastLogisticImage,
  };

  // Получаем список идентификаторов из объекта переводов
  const benefitIds = [
    "experience",
    "approach",
    "partners",
    "certificates",
    "turnkey",
    "technologies",
    "tenders",
    "logistics",
  ];

  return (
    <section className="benefits">
      <div className="container">
        <h2>{t("main.benefits.title", "Наші переваги")}</h2>

        <div className="benefits-layout">
          <div className="benefits-photo">
            <img src={benefitsImage} alt="benefits" />
          </div>

          <div className="benefits-content">
            <div className="benefits-grid">
              {benefitIds.slice(0, 6).map((id) => (
                <div key={id} className="benefit-item">
                  <div className="benefit-icon">
                    <img
                      src={benefitIcons[id]}
                      alt={t(`main.benefits.items.${id}.title`, "")}
                    />
                  </div>
                  <div className="benefit-title">
                    {t(`main.benefits.items.${id}.title`, "")}
                  </div>
                </div>
              ))}
            </div>

            <div className="benefits-bottom">
              {benefitIds.slice(6, 8).map((id) => (
                <div key={id} className="benefit-item">
                  <div className="benefit-icon">
                    <img
                      src={benefitIcons[id]}
                      alt={t(`main.benefits.items.${id}.title`, "")}
                    />
                  </div>
                  <div className="benefit-title">
                    {t(`main.benefits.items.${id}.title`, "")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
