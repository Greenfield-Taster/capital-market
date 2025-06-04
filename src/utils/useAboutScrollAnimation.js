import { useEffect } from "react";

const useAboutScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    const addAnimationToElements = () => {
      const animatedElements = document.querySelectorAll(
        [
          ".hero-title",
          ".hero-subtitle",
          ".hero-description",
          ".hero-cta",
          ".hero-image",
          ".quality-content", // ДОБАВИЛИ НОВЫЙ ЭЛЕМЕНТ
          ".section-title",
          ".process-card",
          ".content-text",
          ".content-image",
          ".project-text",
          ".project-image",
          ".value-card",
          ".cta-content",
          ".cta-stats",
          ".footerAbout-quote",
          ".text-block",
          ".features",
          ".project-features",
          ".project-cta",
        ].join(", ")
      );

      animatedElements.forEach((element, index) => {
        element.classList.add("animate-on-scroll");

        if (element.classList.contains("hero-title")) {
          element.classList.add("fade-in-up");
          element.style.setProperty("--animation-delay", "100ms");
        } else if (element.classList.contains("hero-subtitle")) {
          element.classList.add("fade-in-up");
          element.style.setProperty("--animation-delay", "200ms");
        } else if (element.classList.contains("hero-description")) {
          element.classList.add("fade-in-up");
          element.style.setProperty("--animation-delay", "300ms");
        } else if (element.classList.contains("hero-cta")) {
          element.classList.add("fade-in-up");
          element.style.setProperty("--animation-delay", "400ms");
        } else if (element.classList.contains("hero-image")) {
          element.classList.add("fade-in-right");
          element.style.setProperty("--animation-delay", "500ms");
        } else if (element.classList.contains("quality-content")) {
          // ДОБАВИЛИ ОБРАБОТКУ НОВОГО ЭЛЕМЕНТА
          element.classList.add("fade-in-up");
          element.style.setProperty("--animation-delay", "200ms");
        } else if (element.classList.contains("section-title")) {
          element.classList.add("fade-in-up");
          element.style.setProperty("--animation-delay", "100ms");
        } else if (element.classList.contains("process-card")) {
          element.classList.add("fade-in-up");
          const cardIndex = Array.from(element.parentElement.children).indexOf(
            element
          );
          element.style.setProperty(
            "--animation-delay",
            `${cardIndex * 150}ms`
          );
        } else if (element.classList.contains("content-text")) {
          element.classList.add("fade-in-left");
          element.style.setProperty("--animation-delay", "200ms");
        } else if (element.classList.contains("content-image")) {
          element.classList.add("fade-in-right");
          element.style.setProperty("--animation-delay", "300ms");
        } else if (element.classList.contains("project-text")) {
          element.classList.add("fade-in-left");
          element.style.setProperty("--animation-delay", "200ms");
        } else if (element.classList.contains("project-image")) {
          element.classList.add("fade-in-right");
          element.style.setProperty("--animation-delay", "300ms");
        } else if (element.classList.contains("value-card")) {
          const cardIndex = Array.from(element.parentElement.children).indexOf(
            element
          );
          element.classList.add("fade-in-up");
          element.style.setProperty(
            "--animation-delay",
            `${cardIndex * 200}ms`
          );
        } else if (element.classList.contains("cta-content")) {
          element.classList.add("fade-in-up");
          element.style.setProperty("--animation-delay", "100ms");
        } else if (element.classList.contains("cta-stats")) {
          element.classList.add("fade-in-up");
          element.style.setProperty("--animation-delay", "300ms");
        } else if (element.classList.contains("footerAbout-quote")) {
          element.classList.add("fade-in-up");
          element.style.setProperty("--animation-delay", "200ms");
        } else if (element.classList.contains("text-block")) {
          const blockIndex = Array.from(element.parentElement.children).indexOf(
            element
          );
          element.classList.add("fade-in-left");
          element.style.setProperty(
            "--animation-delay",
            `${blockIndex * 100}ms`
          );
        } else if (element.classList.contains("features")) {
          element.classList.add("fade-in-left");
          element.style.setProperty("--animation-delay", "400ms");
        } else if (element.classList.contains("project-features")) {
          element.classList.add("fade-in-left");
          element.style.setProperty("--animation-delay", "500ms");
        } else if (element.classList.contains("project-cta")) {
          element.classList.add("fade-in-left");
          element.style.setProperty("--animation-delay", "600ms");
        } else {
          element.classList.add("fade-in-up");
          element.style.setProperty("--animation-delay", `${index * 50}ms`);
        }

        observer.observe(element);
      });

      const featureItems = document.querySelectorAll(".feature");
      featureItems.forEach((feature, index) => {
        feature.classList.add("animate-on-scroll", "fade-in-left");
        feature.style.setProperty("--animation-delay", `${index * 100}ms`);
        observer.observe(feature);
      });

      const ctaStats = document.querySelectorAll(".cta-stat");
      ctaStats.forEach((stat, index) => {
        stat.classList.add("animate-on-scroll", "fade-in-up");
        stat.style.setProperty("--animation-delay", `${index * 150}ms`);
        observer.observe(stat);
      });
    };

    const timeoutId = setTimeout(addAnimationToElements, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);
};

export default useAboutScrollAnimation;
