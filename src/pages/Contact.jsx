import React from "react";
import { useTranslation } from "react-i18next";
import useScrollAnimation from "../utils/useScrollAnimation";
import workingManImage from "../assets/working-man.png";
import partnersData from "../data/partners.json";
import "../styles/pages/_Contact.scss";

const Contact = () => {
  const { t } = useTranslation();

  useScrollAnimation();

  return (
    <div className="contact-page">
      <div className="contact-banner">
        <img src={workingManImage} alt={t("contact.workingManAlt")} />
      </div>

      <div className="contact-container">
        <div className="contact-header">
          <h1>{t("contact.title")}</h1>
        </div>

        <div className="contact-content">
          <div className="contact-card">
            <div className="contact-card-inner">
              <h2>{t("contact.phones")}</h2>
              <p>+380986032592</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-inner">
              <h2>{t("contact.officeAddress")}</h2>
              <p>
                69035, {t("contact.zaporizhzhiaRegion")},{" "}
                {t("contact.zaporizhzhiaCity")},{" "}
                {t("contact.independenceStreet")},{t("contact.building")} 68А,{" "}
                {t("contact.office")} 26
              </p>
              <p>{t("contact.email")}: info@th-capitalmarket.com</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-inner">
              <h2>{t("contact.workingHours")}</h2>
              <p>{t("contact.mondayToFriday")}: 9:00 - 18:00</p>
              <p>
                {t("contact.saturdaySunday")}: {t("contact.weekend")}
              </p>
            </div>
          </div>
        </div>

        <div className="partners-section">
          <div className="partners-header">
            <h2>{t("contact.ourPartners")}</h2>
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
      </div>
    </div>
  );
};

export default Contact;
