import React from "react";
import processImage from "../../assets/about-us/about-how-do-we-work.jpg";
import "../../styles/components/About/_process.scss";

const AboutProcess = ({ t }) => {
  return (
    <section className="process-section">
      <div className="process-image-container">
        <div className="process-image animate-on-scroll scale-in">
          <img src={processImage} alt={t("about.process.title")} />
        </div>
      </div>
      <div className="process-content">
        <h2 className="section-title animate-on-scroll fade-in">
          {t("about.process.title")}
        </h2>
        <div className="process-steps">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="process-step animate-on-scroll slide-up">
              <div className="step-number">{step}</div>
              <div className="step-content">
                <h3 className="step-title">
                  {t(`about.process.steps.step${step}.title`)}
                </h3>
                <p className="step-description">
                  {t(`about.process.steps.step${step}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;
