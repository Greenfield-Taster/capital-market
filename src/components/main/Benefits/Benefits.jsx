import React from "react";
import { useTranslation } from "react-i18next";
import {
  Lightbulb,
  Users,
  Handshake,
  Award,
  Key,
  Cpu,
  Trophy,
  Truck,
  ShieldCheck,
  Eye,
  Settings,
} from "lucide-react";
import "./Benefits.scss";
import benefitsImage from "../../../assets/benefitsImage.png";

const Benefits = () => {
  const { t } = useTranslation();

  const benefitIcons = {
    experience: Lightbulb,
    approach: Users,
    partners: Handshake,
    certificates: Award,
    turnkey: Key,
    technologies: Cpu,
    tenders: Trophy,
    logistics: Truck,
    qualityGuarantee: ShieldCheck,
    financialTransparency: Eye,
    flexibility: Settings,
  };

  const benefitIds = [
    "experience",
    "approach",
    "partners",
    "certificates",
    "turnkey",
    "technologies",
    "tenders",
    "logistics",
    "qualityGuarantee",
    "financialTransparency",
    "flexibility",
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
            <div className="benefits-grid-wide">
              <div className="benefits-row benefits-row-4">
                {benefitIds.slice(0, 4).map((id) => {
                  const IconComponent = benefitIcons[id];
                  return (
                    <div key={id} className="benefit-item">
                      <div className="benefit-icon">
                        <IconComponent size={28} />
                      </div>
                      <div className="benefit-title">
                        {t(`main.benefits.items.${id}.title`, "")}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="benefits-row benefits-row-4">
                {benefitIds.slice(4, 8).map((id) => {
                  const IconComponent = benefitIcons[id];
                  return (
                    <div key={id} className="benefit-item">
                      <div className="benefit-icon">
                        <IconComponent size={28} />
                      </div>
                      <div className="benefit-title">
                        {t(`main.benefits.items.${id}.title`, "")}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="benefits-row benefits-row-3">
                {benefitIds.slice(8).map((id) => {
                  const IconComponent = benefitIcons[id];
                  return (
                    <div key={id} className="benefit-item">
                      <div className="benefit-icon">
                        <IconComponent size={28} />
                      </div>
                      <div className="benefit-title">
                        {t(`main.benefits.items.${id}.title`, "")}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
