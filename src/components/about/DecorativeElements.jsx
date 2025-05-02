import React from "react";
import "../../styles/components/About/_decorative.scss";

const DecorativeElements = () => {
  return (
    <>
      <div
        className="decorative-circle circle-1 parallax"
        data-speed="0.05"
      ></div>
      <div
        className="decorative-circle circle-2 parallax"
        data-speed="0.1"
      ></div>
      <div
        className="decorative-circle circle-3 parallax"
        data-speed="0.08"
      ></div>
      <div className="decorative-line line-1 parallax" data-speed="0.06"></div>
      <div className="decorative-line line-2 parallax" data-speed="0.07"></div>
      <div className="decorative-text parallax" data-speed="0.04">
        ТД СТОЛИЦЯ МАРКЕТ
      </div>
    </>
  );
};

export default DecorativeElements;
