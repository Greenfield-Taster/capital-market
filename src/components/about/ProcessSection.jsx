import React from "react";
import { useTranslation } from "react-i18next";
import { Building2, Target, Lightbulb, Shield } from "lucide-react";
import "../../styles/components/about/ProcessSection.scss";

const ProcessSection = () => {
  const { t } = useTranslation();

  return (
    <section id="process" className="process-section">
      <div className="container">
        <h2 className="section-title centered">
          {t("about.process.titleMain")}
        </h2>
        <div className="process-diamond-layout">
          <div className="diamond-row top-row">
            <div
              className={`process-card process-card-1`}
              style={{ "--animation-delay": "0ms" }}
            >
              <div className="process-number">01</div>
              <div className="process-icon">
                <Target size={40} />
              </div>
              <h3 className="process-title">{t("about.process.titleOne")}</h3>
              <p className="process-description">
                {t("about.process.descriptionOne")}
              </p>
            </div>
          </div>

          <div className="diamond-row middle-row">
            <div
              className={`process-card process-card-2`}
              style={{ "--animation-delay": "150ms" }}
            >
              <div className="process-number">02</div>
              <div className="process-icon">
                <Lightbulb size={40} />
              </div>
              <h3 className="process-title">{t("about.process.titleTwo")}</h3>
              <p className="process-description">
                {t("about.process.descriptionTwo")}
              </p>
            </div>

            <div
              className={`process-card process-card-3`}
              style={{ "--animation-delay": "300ms" }}
            >
              <div className="process-number">03</div>
              <div className="process-icon">
                <Building2 size={40} />
              </div>
              <h3 className="process-title">{t("about.process.titleThree")}</h3>
              <p className="process-description">
                {t("about.process.descriptionThree")}
              </p>
            </div>
          </div>

          <div className="diamond-row bottom-row">
            <div
              className={`process-card process-card-4`}
              style={{ "--animation-delay": "450ms" }}
            >
              <div className="process-number">04</div>
              <div className="process-icon">
                <Shield size={40} />
              </div>
              <h3 className="process-title">{t("about.process.titleFour")}</h3>
              <p className="process-description">
                {t("about.process.descriptionFour")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
