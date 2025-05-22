import React from "react";
import "../../styles/components/about/ParallaxBackground.scss";

const ParallaxBackground = () => {
  return (
    <div className="parallax-bg">
      <div className="floating-shapes">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`shape shape-${i + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ParallaxBackground;
