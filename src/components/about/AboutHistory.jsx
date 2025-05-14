import React from "react";
import historyImage2016 from "../../assets/about-us/about-history-1.jpg";
import historyImage2019 from "../../assets/about-us/about-history-2.jpg";
import historyImage2024 from "../../assets/about-us/about-history-3.jpg";
import "../../styles/components/About/_history.scss";

const AboutHistory = ({ t }) => {
  return (
    <section className="about-section history-section">
      <h2 className="section-title animate-on-scroll fade-in">
        {t("about.history.title")}
      </h2>

      <div className="history-timeline">
        <div className="history-item animate-on-scroll slide-up">
          <div className="history-year">2016</div>
          <div className="history-content">
            <p className="history-text">{t("about.history.paragraph1")}</p>
            <div className="history-image">
              <img src={historyImage2016} alt="history-image1" />
            </div>
          </div>
        </div>

        <div className="history-item animate-on-scroll slide-up">
          <div className="history-year">2019</div>
          <div className="history-content">
            <p className="history-text">{t("about.history.paragraph2")}</p>
            <div className="history-image">
              <img src={historyImage2019} alt="history-image2" />
            </div>
          </div>
        </div>

        <div className="history-item animate-on-scroll slide-up">
          <div className="history-year">2024</div>
          <div className="history-content">
            <p className="history-text">{t("about.history.paragraph3")}</p>
            <div className="history-image">
              <img src={historyImage2024} alt="history-image3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
