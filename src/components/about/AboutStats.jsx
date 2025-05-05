import React from "react";
import AnimatedCounter from "../common/AnimatedCounter";
import "../../styles/components/About/_stats.scss";

const AboutStats = ({ t }) => {
  return (
    <div className="stats-container animate-on-scroll slide-up">
      <div className="stats-grid-about">
        <AnimatedCounter
          endValue={7}
          title={t("about.stats.years")}
          suffix="+"
          icon={<i className="fas fa-calendar-alt"></i>}
        />
        <AnimatedCounter
          endValue={100}
          title={t("about.stats.specialists")}
          suffix="+"
          icon={<i className="fas fa-calendar-alt"></i>}
        />
        <AnimatedCounter
          endValue={1}
          title={t("about.stats.revenue")}
          suffix=""
          icon={<i className="fas fa-calendar-alt"></i>}
        />
        <AnimatedCounter
          endValue={3}
          title={t("about.stats.certificates")}
          icon={<i className="fas fa-calendar-alt"></i>}
        />
      </div>
    </div>
  );
};

export default AboutStats;
