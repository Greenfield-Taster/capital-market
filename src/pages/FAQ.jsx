import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  ChevronDown,
  Search,
  HelpCircle,
  MessageSquare,
  Lightbulb,
  Shield,
} from "lucide-react";
import useScrollAnimation from "../utils/useScrollAnimation";
import faqData from "../data/FAQ-Data.json";
import "../styles/pages/_FAQ.scss";
import { Link } from "react-router-dom";

const FAQ = () => {
  useScrollAnimation();

  const { i18n } = useTranslation();
  const [activeItem, setActiveItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(false);
  const { t } = useTranslation();

  const currentLanguage = i18n.language || "uk";
  const faqItems = faqData;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const itemsTimer = setTimeout(() => {
      setItemsVisible(true);
    }, 800);
    return () => clearTimeout(itemsTimer);
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = faqItems.filter((item) => {
        const question = item.question[currentLanguage] || item.question.uk;
        const answer = item.answer
          ? item.answer[currentLanguage] || item.answer.uk
          : "";

        return (
          question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          answer.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setFilteredItems(filtered);
    } else {
      setFilteredItems(faqItems);
    }
  }, [searchTerm, faqItems, currentLanguage]);

  const toggleFAQItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  const renderListItems = (item) => {
    if (!item.listItems) return null;

    const listItems =
      item.listItems[currentLanguage] || item.listItems.uk || [];

    return (
      <ul className="faq__list">
        {listItems.map((listItem, index) => (
          <li key={index} className="faq__list-item">
            <span className="faq__list-bullet"></span>
            {listItem}
          </li>
        ))}
      </ul>
    );
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "general":
        return <HelpCircle size={24} />;
      case "quality":
        return <Shield size={24} />;
      case "business":
        return <MessageSquare size={24} />;
      case "innovation":
        return <Lightbulb size={24} />;
      default:
        return <HelpCircle size={24} />;
    }
  };

  const getCategoryClass = (category) => {
    return `category-${category}`;
  };

  return (
    <section className="faq">
      <div className="faq__bg-elements">
        <div className="faq__bg-circle faq__bg-circle--1"></div>
        <div className="faq__bg-circle faq__bg-circle--2"></div>
        <div className="faq__bg-line faq__bg-line--1"></div>
        <div className="faq__bg-line faq__bg-line--2"></div>
      </div>

      <div className="container">
        <div className={`faq__header ${isVisible ? "visible" : ""}`}>
          <div className="faq__title-container">
            <h1 className="faq__title">{t("faq.title")}</h1>
            <div className="faq__title-decoration"></div>
          </div>
          <p className="faq__subtitle">{t("faq.subtitle")}</p>
        </div>

        <div className="faq__content">
          <div className={`faq__items ${itemsVisible ? "items-visible" : ""}`}>
            {filteredItems.map((item, index) => {
              const question =
                item.question[currentLanguage] || item.question.uk;
              const answer = item.answer
                ? item.answer[currentLanguage] || item.answer.uk
                : "";
              const additionalInfo = item.additionalInfo
                ? item.additionalInfo[currentLanguage] || item.additionalInfo.uk
                : "";

              return (
                <div
                  key={item.id}
                  className={`faq__item ${
                    activeItem === item.id ? "active" : ""
                  } ${getCategoryClass(item.category)} fade-in-item`}
                  style={{ "--animation-delay": `${index * 150}ms` }}
                >
                  <div
                    className="faq__question"
                    onClick={() => toggleFAQItem(item.id)}
                  >
                    <div className="faq__question-content">
                      <div className="faq__question-icon">
                        {getCategoryIcon(item.category)}
                      </div>
                      <h3 className="faq__question-text">{question}</h3>
                    </div>
                    <div className="faq__toggle">
                      <ChevronDown
                        className={`faq__toggle-icon ${
                          activeItem === item.id ? "rotated" : ""
                        }`}
                        size={20}
                      />
                    </div>
                  </div>

                  <div className="faq__answer">
                    <div className="faq__answer-content">
                      {answer && <p className="faq__answer-text">{answer}</p>}
                      {renderListItems(item)}
                      {additionalInfo && (
                        <div className="faq__additional-info">
                          <div className="faq__info-icon">
                            <Lightbulb size={16} />
                          </div>
                          <p>{additionalInfo}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`faq__cta ${isVisible ? "visible" : ""}`}>
          <div className="faq__cta-content">
            <h3 className="faq__cta-title">{t("faq.ctaTitle")}</h3>
            <p className="faq__cta-text">{t("faq.ctaText")}</p>
            <Link to="/contact" className="faq__cta-button">
              <MessageSquare size={20} />
              {t("faq.contactUs")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
