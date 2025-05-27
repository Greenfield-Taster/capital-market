import React from "react";
import { useTranslation } from "react-i18next";
import { Shield, Lightbulb, Heart } from "lucide-react";
import "../../styles/components/about/ValuesSection.scss";

const ValuesSection = () => {
  const { t } = useTranslation();

  const values = [
    {
      key: "reliability",
      icon: Shield,
    },
    {
      key: "innovation",
      icon: Lightbulb,
    },
    {
      key: "responsibility",
      icon: Heart,
    },
  ];

  return (
    <section id="values" className="values-section">
      <div className="container">
        <h2 className="section-title centered">{t("about.values.title")}</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div
              key={value.key}
              className={`value-card value-card-${index + 1}`}
              style={{ "--animation-delay": `${index * 100}ms` }}
            >
              <div className="value-icon">
                <value.icon size={40} />
              </div>
              <h3 className="value-title">
                {t(`about.values.${value.key}.title`)}
              </h3>
              <p className="value-description">
                {t(`about.values.${value.key}.description`)}
              </p>
              <div className="value-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
