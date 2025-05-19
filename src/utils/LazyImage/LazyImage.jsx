import React, { useState } from "react";
import "./LazyImage.scss";

const LazyImage = ({
  src,
  alt,
  aspectRatio = "16/9",
  className = "",
  priority = true,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  let fixedSrc = src;

  if (!src.startsWith("http") && !src.startsWith("data:")) {
    const cleanPath = src.startsWith("/") ? src.substring(1) : src;

    fixedSrc = `/capital-market/${cleanPath}`;
  }

  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  const handleImageError = () => {
    setIsError(true);

    const possibleCorrections = [
      fixedSrc,
      fixedSrc.replace("/capital-market/", "/"),
      fixedSrc.replace("/capital-market/", "/public/"),
      fixedSrc.replace(".jpg", ".JPG"),
      fixedSrc.replace(".JPG", ".jpg"),
      fixedSrc.replace(".png", ".PNG"),
      fixedSrc.replace(".PNG", ".png"),
    ];

    console.log("Возможные варианты путей:", possibleCorrections);
  };

  const containerStyle = {
    position: "relative",
    paddingBottom:
      aspectRatio === "16/9"
        ? "56.25%"
        : aspectRatio === "4/3"
        ? "75%"
        : aspectRatio === "1/1"
        ? "100%"
        : aspectRatio,
  };

  return (
    <div className={`lazy-image-container ${className}`} style={containerStyle}>
      {!isLoaded && !isError && (
        <div className="lazy-image-placeholder">
          <svg
            className="lazy-image-svg"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="lazy-image-circle"
              cx="12"
              cy="12"
              r="10"
              fill="none"
              strokeWidth="2"
            />
          </svg>
        </div>
      )}

      {isError && (
        <div className="lazy-image-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="48"
            height="48"
            fill="#e74c3c"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
          <div
            style={{
              fontSize: "10px",
              color: "#666",
              marginTop: "5px",
              textAlign: "center",
            }}
          >
            {src.split("/").pop()}
          </div>
        </div>
      )}

      {!isError && (
        <img
          src={fixedSrc}
          alt={alt}
          className={`lazy-image ${isLoaded ? "lazy-image--loaded" : ""}`}
          onLoad={handleImageLoaded}
          onError={handleImageError}
        />
      )}
    </div>
  );
};

export default LazyImage;
