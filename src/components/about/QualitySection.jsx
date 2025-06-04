import React from "react";
import { Shield, Award, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../../styles/components/about/QualitySection.scss";

const QualitySection = () => {
  const { t } = useTranslation();

  return (
    <section id="quality" className="quality-section">
      <div className="container">
        <div className="quality-content">
          <div className="quality-icon">
            <Shield size={48} />
          </div>

          <div className="quality-text">
            <p className="quality-main-text">
              {t("about.quality.mainText")}
              <span className="certificates">
                ISO 9001(2015), ISO 45001(2019), 14001(2015)
              </span>
              .
            </p>

            <p className="quality-bottom-text">
              <CheckCircle size={20} />
              {t("about.quality.bottomText")}
            </p>
          </div>

          <div className="quality-badges">
            <div className="badge">
              <Award size={24} />
              <span>ISO 9001</span>
            </div>
            <div className="badge">
              <Award size={24} />
              <span>ISO 45001</span>
            </div>
            <div className="badge">
              <Award size={24} />
              <span>ISO 14001</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
