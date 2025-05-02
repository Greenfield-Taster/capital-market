import React from "react";
import historyImage2016 from "../../assets/main-bg - Copy.png";
import historyImage2019 from "../../assets/main-bg - Copy.png";
import historyImage2024 from "../../assets/main-bg - Copy.png";
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
              <img src={historyImage2016} alt="2016 - Заснування компанії" />
            </div>
          </div>
        </div>

        <div className="history-item animate-on-scroll slide-up">
          <div className="history-year">2019</div>
          <div className="history-content">
            <p className="history-text">{t("about.history.paragraph2")}</p>
            <div className="history-image">
              <img
                src={historyImage2019}
                alt="2019 - Сертифікація та розвиток"
              />
            </div>
          </div>
        </div>

        <div className="history-item animate-on-scroll slide-up">
          <div className="history-year">2024</div>
          <div className="history-content">
            <p className="history-text">{t("about.history.paragraph3")}</p>
            <div className="history-image">
              <img src={historyImage2024} alt="2024 - Сучасний етап" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
