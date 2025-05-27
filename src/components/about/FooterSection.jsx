import React from "react";
import { useTranslation } from "react-i18next";
import "../../styles/components/about/FooterSection.scss";

const FooterSection = () => {
  const { t } = useTranslation();

  return (
    <footer id="footerAbout" className="footerAbout-section">
      <div className="container">
        <div className="footerAbout-content">
          <div className="footerAbout-quote">
            <blockquote className="quote">
              {t("about.hero.mainQuote")}
            </blockquote>
            <cite className="quote-author"> {t("about.hero.title")}</cite>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
