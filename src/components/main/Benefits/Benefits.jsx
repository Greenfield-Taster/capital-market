import { useTranslation } from "react-i18next";
import { Users, Handshake, Award, Key, Cpu, ShieldCheck } from "lucide-react";
import "./Benefits.scss";
import benefitsImage from "../../../assets/benefitsImage.png";

const Benefits = () => {
  const { t } = useTranslation();

  const benefitIcons = {
    qualityGuarantee: ShieldCheck,
    approach: Users,
    partners: Handshake,
    certificates: Award,
    turnkey: Key,
    technologies: Cpu,
  };

  const benefitIds = [
    "qualityGuarantee",
    "approach",
    "partners",
    "certificates",
    "turnkey",
    "technologies",
  ];

  return (
    <section className="benefits">
      <div className="container">
        <h2>{t("main.benefits.title")}</h2>

        <div className="benefits-layout">
          <div className="benefits-photo">
            <img src={benefitsImage} alt="benefits" />
          </div>

          <div className="benefits-content">
            <div className="benefits-grid">
              <div className="benefits-row">
                {benefitIds.slice(0, 3).map((id) => {
                  const IconComponent = benefitIcons[id];
                  return (
                    <div key={id} className="benefit-item">
                      <div className="benefit-icon">
                        <IconComponent size={32} />
                      </div>
                      <div className="benefit-title">
                        {t(`main.benefits.items.${id}.title`)}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="benefits-row">
                {benefitIds.slice(3, 6).map((id) => {
                  const IconComponent = benefitIcons[id];
                  return (
                    <div key={id} className="benefit-item">
                      <div className="benefit-icon">
                        <IconComponent size={32} />
                      </div>
                      <div className="benefit-title">
                        {t(`main.benefits.items.${id}.title`)}
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
