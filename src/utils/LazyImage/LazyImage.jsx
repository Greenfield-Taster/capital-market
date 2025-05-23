import React, { useState, useEffect, useRef } from "react";
import { getImagePath } from "../imageUtils";
import "./LazyImage.scss";

const LazyImage = ({ src, alt, className, aspectRatio, priority = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    console.error("Failed to load image:", src);
    setHasError(true);
    setIsLoaded(true);
  };

  // Получаем правильный путь
  const imageSrc = getImagePath(src);

  const paddingBottom = aspectRatio
    ? `${
        (parseInt(aspectRatio.split("/")[1]) /
          parseInt(aspectRatio.split("/")[0])) *
        100
      }%`
    : "56.25%"; // 16:9 по умолчанию

  return (
    <div
      ref={containerRef}
      className={`lazy-image-container ${className || ""}`}
      style={{ paddingBottom }}
    >
      {!isLoaded && !hasError && (
        <div className="lazy-image-placeholder">
          <div className="lazy-image-loader"></div>
        </div>
      )}

      {hasError && (
        <div className="lazy-image-error">
          <span>Не вдалося завантажити зображення</span>
        </div>
      )}

      {isInView && !hasError && (
        <img
          ref={imgRef}
          src={imageSrc}
          alt={alt}
          className={`lazy-image ${isLoaded ? "lazy-image--loaded" : ""}`}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
};

export default LazyImage;
