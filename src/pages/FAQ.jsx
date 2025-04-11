import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/pages/_FAQ.scss";

const FAQ = () => {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState(null);

  const faqItems = t("faq.items", { returnObjects: true });

  const toggleFAQItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  const renderListItems = (item) => {
    if (!item.listItems) return null;

    return (
      <ul className="faq__list">
        {item.listItems.map((listItem, index) => (
          <li key={index} className="faq__list-item">
            {listItem}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="faq__header">
          <h2 className="faq__title">{t("faq.title")}</h2>
        </div>

        <div className="faq__content">
          <div className="faq__items">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className={`faq__item ${
                  activeItem === item.id ? "active" : ""
                }`}
              >
                <div
                  className="faq__question"
                  onClick={() => toggleFAQItem(item.id)}
                >
                  <h3 className="faq__question-text">{item.question}</h3>
                  <div className="faq__toggle">
                    <span className="faq__toggle-icon"></span>
                  </div>
                </div>
                <div className="faq__answer">
                  <div className="faq__answer-content">
                    {item.answer && (
                      <p className="faq__answer-text">{item.answer}</p>
                    )}
                    {renderListItems(item)}
                    {item.additionalInfo && (
                      <p className="faq__additional-info">
                        {item.additionalInfo}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
