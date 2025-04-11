import React from "react";
import { useTranslation } from "react-i18next";
import "./ActivityDirections.scss";
import constructionImage from "../../../assets/constructionImage.png";
import manufacturingImage from "../../../assets/manufacturingImage.png";
import designImage from "../../../assets/designImage.png";
import tradeImage from "../../../assets/tradeImage.png";

const activityImages = {
  construction: constructionImage,
  manufacturing: manufacturingImage,
  design: designImage,
  trade: tradeImage,
};

const ActivityDirections = () => {
  const { t } = useTranslation();

  const activities = [
    {
      id: "construction",
      image: activityImages.construction,
    },
    {
      id: "manufacturing",
      image: activityImages.manufacturing,
    },
    {
      id: "design",
      image: activityImages.design,
    },
    {
      id: "trade",
      image: activityImages.trade,
    },
  ];

  return (
    <section className="activity-directions">
      <div className="container">
        <h2>{t("main.activityDirections.title")}</h2>
        <div className="activity-blocks">
          {activities.map((activity) => (
            <div key={activity.id} className="activity-block">
              <img
                src={activity.image}
                alt={t(
                  `main.activityDirections.activities.${activity.id}.title`
                )}
                className="activity-image"
              />
              <div className="activity-content">
                <h3 className="activity-title">
                  {t(`main.activityDirections.activities.${activity.id}.title`)}
                </h3>
                <p className="activity-description">
                  {t(
                    `main.activityDirections.activities.${activity.id}.description`
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityDirections;
