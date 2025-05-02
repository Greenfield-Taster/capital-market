import React from "react";
import AnimatedCounter from "../common/AnimatedCounter";
import "../../styles/components/About/_stats.scss";

const AboutStats = ({ t }) => {
  const stats = [
    { value: "7+", title: t("about.stats.years") },
    { value: "100+", title: t("about.stats.specialists") },
    { value: "1", title: t("about.stats.revenue") },
    { value: "ISO", title: t("about.stats.certificates") },
  ];

  return (
    <div className="stats-container animate-on-scroll slide-up">
      {stats.map((stat, index) => (
        <AnimatedCounter key={index} value={stat.value} title={stat.title} />
      ))}
    </div>
  );
};

export default AboutStats;
