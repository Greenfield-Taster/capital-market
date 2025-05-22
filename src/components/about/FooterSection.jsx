import React from "react";
import "../../styles/components/about/FooterSection.scss";

const FooterSection = ({ data }) => {
  return (
    <footer id="footerAbout" className="footerAbout-section">
      <div className="container">
        <div className="footerAbout-content">
          <div className="footerAbout-quote">
            <blockquote className="quote">"{data.mainQuote}"</blockquote>
            <cite className="quote-author">ТД Столиця Маркет</cite>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
