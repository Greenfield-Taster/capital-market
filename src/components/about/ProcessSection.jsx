import React from "react";
import { useTranslation } from "react-i18next";
import {
  Building2,
  Target,
  Lightbulb,
  FileText,
  CheckCircle,
} from "lucide-react";
import "../../styles/components/about/ProcessSection.scss";

const ProcessSection = () => {
  const { t } = useTranslation();

  return (
    <section id="process" className="process-section">
      <div className="container">
        <h2 className="section-title centered">
          {t("about.process.titleMain")}
        </h2>
        <div className="process-grid">
          <div className="process-card process-card-1">
            <div className="process-number">01</div>
            <div className="process-icon">
              <Target size={40} />
            </div>
            <h3 className="process-title">{t("about.process.titleOne")}</h3>
            <p className="process-description">
              {t("about.process.descriptionOne")}
            </p>
          </div>

          <div className="process-card process-card-2">
            <div className="process-number">02</div>
            <div className="process-icon">
              <Lightbulb size={40} />
            </div>
            <h3 className="process-title">{t("about.process.titleTwo")}</h3>
            <p className="process-description">
              {t("about.process.descriptionTwo")}
            </p>
          </div>

          <div className="process-card process-card-3">
            <div className="process-number">03</div>
            <div className="process-icon">
              <FileText size={40} />
            </div>
            <h3 className="process-title">{t("about.process.titleThree")}</h3>
            <p className="process-description">
              {t("about.process.descriptionThree")}
            </p>
          </div>
        </div>

        <div className="process-bottom">
          <div className="process-card process-card-4">
            <div className="process-number">04</div>
            <div className="process-icon">
              <Building2 size={40} />
            </div>
            <h3 className="process-title">{t("about.process.titleFour")}</h3>
            <p className="process-description">
              {t("about.process.descriptionFour")}
            </p>
          </div>

          <div className="process-card process-card-5">
            <div className="process-number">05</div>
            <div className="process-icon">
              <CheckCircle size={40} />
            </div>
            <h3 className="process-title">{t("about.process.titleFive")}</h3>
            <p className="process-description">
              {t("about.process.descriptionFive")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
