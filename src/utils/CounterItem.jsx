import { useEffect, useState } from "react";

const CounterItem = ({ endValue, text, suffix = "", icon }) => {
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
    <div className="stats-item">
      {icon && <div className="stats-icon">{icon}</div>}
      <div className="stats-number">
        {count}
        {suffix}
      </div>
      <div className="stats-text">{text}</div>
    </div>
  );
};

export default CounterItem;
