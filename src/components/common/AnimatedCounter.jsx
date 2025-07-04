import React, { useState, useEffect } from "react";
import "../../styles/common/_animated-counter.scss";

const AnimatedCounter = ({ endValue, title, suffix = "", className = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const duration = 2000;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(percentage * endValue));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [endValue]);

  return (
    <div className={`stat-item ${className}`}>
      <span className="stat-number">
        {count}
        {suffix}
      </span>
      {title && <span className="stat-title">{title}</span>}
    </div>
  );
};

export default AnimatedCounter;
