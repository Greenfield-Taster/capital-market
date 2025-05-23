// Функция для получения правильного пути к изображению
export const getImagePath = (src) => {
  if (!src) return "";

  // Если путь уже абсолютный, возвращаем как есть
  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("//")
  ) {
    return src;
  }

  // Получаем базовый путь из Vite
  const base = import.meta.env.BASE_URL || "/";

  // Проверяем, не содержит ли src уже базовый путь
  if (src.includes(base) && base !== "/") {
    return src; // Уже содержит базовый путь, возвращаем как есть
  }

  // Убираем начальный слеш у src если есть
  const cleanSrc = src.startsWith("/") ? src.slice(1) : src;

  // Убираем конечный слеш у base если есть
  const cleanBase = base.endsWith("/") ? base : base + "/";

  return cleanBase + cleanSrc;
};

// Компонент для изображений с обработкой ошибок
export const ImageWithFallback = ({
  src,
  alt,
  className,
  onError,
  ...props
}) => {
  const handleError = (e) => {
    console.error("Failed to load image:", src);
    if (onError) onError(e);
  };

  return (
    <img
      src={getImagePath(src)}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};
