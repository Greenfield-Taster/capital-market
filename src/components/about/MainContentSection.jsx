import React from "react";
import { CheckCircle } from "lucide-react";
import photo from "../../assets/about-us/photo_2025-05-21_12-52-55.jpg";
import "../../styles/components/about/MainContentSection.scss";

const MainContentSection = ({ data }) => {
  return (
    <section id="main-content" className="main-content-section">
      <div className="container">
        <div className="content-grid">
          <div className="content-text">
            <h2 className="section-title">Про нашу компанію</h2>
            <div className="text-blocks">
              <p className="text-block">{data.paragraph1}</p>
              <p className="text-block">{data.paragraph2}</p>
            </div>
            <div className="features">
              <div className="feature">
                <CheckCircle size={24} />
                <span>ISO сертифікати</span>
              </div>
              <div className="feature">
                <CheckCircle size={24} />
                <span>8+ років досвіду</span>
              </div>
              <div className="feature">
                <CheckCircle size={24} />
                <span>100+ фахівців</span>
              </div>
            </div>
          </div>
          <div className="content-image">
            <div className="image-placeholder large interactive-hover">
              <img src={photo} alt="photo" />
              <div className="shimmer-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContentSection;
