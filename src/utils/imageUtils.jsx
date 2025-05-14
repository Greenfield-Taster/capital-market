import React from "react";

/**
 * Утиліта для управління зображеннями
 */

// Визначення базового URL для застосунку
const BASE_URL = "/capital-market/";

/**
 * Функція для отримання правильного шляху до зображення
 * @param {string} imagePath - Шлях до зображення у форматі "assets/path/to/image.jpg"
 * @returns {string} Повний шлях до зображення
 */
export const getImageUrl = (imagePath) => {
  // Якщо шлях не передано, повертаємо шлях до заглушки
  if (!imagePath) {
    return `${BASE_URL}assets/main-bg.png`;
  }

  // Додаємо BASE_URL до шляху зображення
  return `${BASE_URL}${imagePath}`;
};

/**
 * Компонент обгортки для зображень з обробкою помилок
 */
export const ImageWithFallback = ({ src, alt, className, ...rest }) => {
  const handleError = (e) => {
    console.error(`Failed to load image: ${src}`);
    e.target.src = `${BASE_URL}assets/main-bg.png`;
  };

  return (
    <img
      src={getImageUrl(src)}
      alt={alt || "Зображення"}
      className={className || ""}
      onError={handleError}
      loading="lazy" // Додаємо ліниве завантаження для оптимізації продуктивності
      {...rest}
    />
  );
};

/**
 * Компонент стильної обгортки для зображень зі спец-ефектами
 * Додає ефект розмиття та поступового завантаження
 */
export const StylishImage = ({
  src,
  alt,
  className,
  aspectRatio = "4/3",
  ...rest
}) => {
  const [loaded, setLoaded] = React.useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = (e) => {
    console.error(`Failed to load image: ${src}`);
    e.target.src = `${BASE_URL}assets/main-bg.png`;
    setLoaded(true);
  };

  return (
    <div
      className={`image-container ${className || ""}`}
      style={{
        position: "relative",
        overflow: "hidden",
        aspectRatio,
        background: "#f5f5f5",
      }}
    >
      {!loaded && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
          }}
        >
          <div className="image-loader"></div>
        </div>
      )}
      <img
        src={getImageUrl(src)}
        alt={alt || "Зображення"}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 0.5s ease, transform 0.5s ease",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "scale(1)" : "scale(1.05)",
        }}
        {...rest}
      />
    </div>
  );
};

export default {
  getImageUrl,
  ImageWithFallback,
  StylishImage,
};
