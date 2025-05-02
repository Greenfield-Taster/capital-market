import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import useScrollAnimation from "../../utils/useScrollAnimation";
import "../../styles/components/About/_about.scss";

import DecorativeElements from "./DecorativeElements";
import AboutHero from "./AboutHero";
import AboutQuote from "./AboutQuote";
import AboutFeaturedProject from "./AboutFeaturedProject";
import AboutHistory from "./AboutHistory";
import AboutProcess from "./AboutProcess";
import AboutPhilosophy from "./AboutPhilosophy";
import AboutTeam from "./AboutTeam";
import AboutStrategy from "./AboutStrategy";
import AboutCTA from "./AboutCTA";

const About = () => {
  const { t } = useTranslation();

  useScrollAnimation({
    selector: ".animate-on-scroll",
    threshold: 0.8,
    once: true,
  });

  useEffect(() => {
    const handleParallax = () => {
      const parallaxElements = document.querySelectorAll(".parallax");
      const scrollPosition = window.scrollY;

      parallaxElements.forEach((element) => {
        const speed = element.dataset.speed || 0.15;
        element.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleParallax);

    return () => {
      window.removeEventListener("scroll", handleParallax);
    };
  }, []);

  useEffect(() => {
    const imageElements = document.querySelectorAll(
      ".about-image img, .history-image img, .philosophy-image img, .team-image, .value-image img, .featured-project-image img"
    );

    imageElements.forEach((img) => {
      img.addEventListener("load", () => {
        img.classList.add("loaded");
      });

      if (img.complete) {
        img.classList.add("loaded");
      }
    });
  }, []);

  return (
    <div className="about-wrapper">
      <DecorativeElements />

      <div className="container">
        <AboutHero t={t} />
        <AboutQuote t={t} />
        <AboutFeaturedProject t={t} />
        <AboutHistory t={t} />
        <AboutProcess t={t} />
        <AboutPhilosophy t={t} />
        <AboutTeam t={t} />
        <AboutStrategy t={t} />
        <AboutCTA t={t} />
      </div>
    </div>
  );
};

export default About;
