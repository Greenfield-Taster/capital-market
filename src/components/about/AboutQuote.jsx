import React from "react";
import "../../styles/components/About/_quote.scss";

const AboutQuote = ({ t }) => {
  return (
    <section className="quote-section animate-on-scroll fade-in">
      <div className="main-quote">
        <svg className="quote-icon" viewBox="0 0 24 24" width="48" height="48">
          <path d="M7.17 22C5.4 22 4 20.6 4 18.83V14c0-3.31 2.69-6 6-6h.17V6.83C10.17 5.4 8.77 4 7 4H6c-.55 0-1-.45-1-1s.45-1 1-1h1c2.76 0 5 2.24 5 5v2c0 2.21-1.79 4-4 4h-2v5.83c0 .28.22.5.5.5h.5c.55 0 1 .45 1 1s-.45 1-1 1h-.83zm8 0c-1.76 0-3.17-1.4-3.17-3.17V14c0-3.31 2.69-6 6-6h.17V6.83C18.17 5.4 16.77 4 15 4h-1c-.55 0-1-.45-1-1s.45-1 1-1h1c2.76 0 5 2.24 5 5v2c0 2.21-1.79 4-4 4h-2v5.83c0 .28.22.5.5.5h.5c.55 0 1 .45 1 1s-.45 1-1 1h-.83z" />
        </svg>
        <blockquote>
          <p>{t("about.mainQuote")}</p>
        </blockquote>
        <svg
          className="quote-icon quote-close"
          viewBox="0 0 24 24"
          width="48"
          height="48"
        >
          <path d="M16.83 2C18.6 2 20 3.4 20 5.17V10c0 3.31-2.69 6-6 6h-.17v1.17c0 1.43 1.4 2.83 3.17 2.83h1c.55 0 1 .45 1 1s-.45 1-1 1h-1c-2.76 0-5-2.24-5-5v-2c0-2.21 1.79-4 4-4h2V5.17c0-.28-.22-.5-.5-.5h-.5c-.55 0-1-.45-1-1s.45-1 1-1h.83zm-8 0C10.6 2 12 3.4 12 5.17V10c0 3.31-2.69 6-6 6h-.17v1.17c0 1.43 1.4 2.83 3.17 2.83h1c.55 0 1 .45 1 1s-.45 1-1 1h-1c-2.76 0-5-2.24-5-5v-2c0-2.21 1.79-4 4-4h2V5.17c0-.28-.22-.5-.5-.5h-.5c-.55 0-1-.45-1-1s.45-1 1-1h.83z" />
        </svg>
      </div>
    </section>
  );
};

export default AboutQuote;
