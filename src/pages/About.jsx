import React, { useEffect } from "react";
import HeroSection from "../components/about/HeroSection";
import ProcessSection from "../components/about/ProcessSection";
import FeaturedProjectSection from "../components/about/FeaturedProjectSection";
import ValuesSection from "../components/about/ValuesSection";
import QualitySection from "../components/about/QualitySection";
import CTASection from "../components/about/CTASection";
import FooterSection from "../components/about/FooterSection";
import useAboutScrollAnimation from "../utils/useAboutScrollAnimation";
import "../styles/components/about/_about.scss";
import "../styles/common/_about-animations.scss";

const About = () => {
  useAboutScrollAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;

      document.documentElement.style.setProperty("--mouse-x", `${x}%`);
      document.documentElement.style.setProperty("--mouse-y", `${y}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="about-page">
      <HeroSection />
      <QualitySection />
      <ProcessSection />
      <FeaturedProjectSection />
      <ValuesSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default About;
