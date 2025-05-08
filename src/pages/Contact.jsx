import React from "react";
import { useTranslation } from "react-i18next";
import useScrollAnimation from "../utils/useScrollAnimation";
import workingManImage from "../assets/working-man.png";
import UpImageBg from "../assets/contact-bg.png";
import partnersData from "../data/partners.json";
import "../styles/pages/_Contact.scss";

const Contact = () => {
  const { t } = useTranslation();

  useScrollAnimation();

  return (
    <div className="contact-page">
      <div className="contact-banner">
        <img
          className="background-image"
          src={UpImageBg}
          alt={t("contact.backgroundAlt")}
        />

        <img
          className="working-man-image"
          src={workingManImage}
          alt={t("contact.workingManAlt")}
        />
      </div>

      <div className="contact-container">
        <div className="partners-section">
          <div className="partners-header">
            <h1>{t("contact.ourPartners")}</h1>
          </div>
          <div className="partners-grid">
            {partnersData.map((partner) => (
              <a
                key={partner.id}
                className="partner-card"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("contact.visitPartnerSite")}
              >
                <img
                  src={partner.logo}
                  alt={t("contact.partnerLogo") + " " + partner.id}
                />
              </a>
            ))}
          </div>
        </div>

        <div className="contact-header">
          <h1>{t("contact.title")}</h1>
        </div>

        <div className="contact-content">
          <div className="contact-card">
            <div className="contact-card-inner">
              <p>+380986032592</p>
              <p> info@th-capitalmarket.com</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-inner">
              <p>
                69035, {t("contact.zaporizhzhiaRegion")},
                {t("contact.zaporizhzhiaCity")},
                {t("contact.independenceStreet")},{t("contact.building")} 68А,
                {t("contact.office")} 26
              </p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-inner">
              <p>{t("contact.mondayToFriday")}: 9:00 - 18:00</p>
              <p>
                {t("contact.saturdaySunday")}: {t("contact.weekend")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
