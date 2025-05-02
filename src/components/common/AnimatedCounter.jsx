import React, { useState, useEffect, useRef } from "react";
import "../../styles/common/_animated-counter.scss";

const AnimatedCounter = ({ value, suffix = "", title, className = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  const isTextOnly = isNaN(
    parseInt(value.toString().replace(/[^0-9]/g, ""), 10)
  );
  const targetValue = isTextOnly
    ? value
    : parseInt(value.toString().replace(/[^0-9]/g, ""), 10);

  useEffect(() => {
    if (isTextOnly || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounter();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [counterRef, isTextOnly, hasAnimated, targetValue]);

  const animateCounter = () => {
    if (isTextOnly) {
      setCount(targetValue);
      return;
    }

    let currentCount = 0;

    const duration = 2000;
    const steps = 50;
    const stepValue = Math.ceil(targetValue / steps);
    const stepTime = duration / steps;

    const counter = setInterval(() => {
      currentCount += stepValue;

      if (currentCount >= targetValue) {
        currentCount = targetValue;
        clearInterval(counter);
      }

      setCount(currentCount);
    }, stepTime);
  };

  return (
    <div ref={counterRef} className={`stat-item ${className}`}>
      <span className="stat-number">
        {isTextOnly ? targetValue : count}
        {suffix}
      </span>
      {title && <span className="stat-title">{title}</span>}
    </div>
  );
};

export default AnimatedCounter;
