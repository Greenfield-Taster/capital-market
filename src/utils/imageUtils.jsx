import React from "react";

export const SvgPlaceholder = ({ type = "loading" }) => {
  switch (type) {
    case "image":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="48"
          height="48"
          fill="#cccccc"
        >
          <path d="M19 3H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z" />
        </svg>
      );

    case "error":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="48"
          height="48"
          fill="#e74c3c"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
      );

    case "loading":
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="48"
          height="48"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            fill="none"
            stroke="#1a3c5a"
            strokeWidth="2"
            strokeDasharray="30 120"
            strokeLinecap="round"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 12 12"
              to="360 12 12"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      );
  }
};

export const ImageWithFallback = ({ src, alt, ...props }) => {
  const [imgSrc, setImgSrc] = React.useState(src);
  const [isError, setIsError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setImgSrc(src);
    setIsError(false);
    setIsLoading(false);
  }, [src]);

  const onError = () => {
    setIsError(true);
    setIsLoading(false);
  };

  const onLoad = () => {
    setIsLoading(false);
  };

  if (isError) {
    return (
      <div className="image-error-placeholder" {...props}>
        <SvgPlaceholder type="error" />
      </div>
    );
  }

  return (
    <div className="image-with-fallback" style={{ position: "relative" }}>
      {isLoading && (
        <div
          className="image-loading-placeholder"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f5f5f5",
          }}
        >
          <SvgPlaceholder type="loading" />
        </div>
      )}
      <img
        {...props}
        src={imgSrc}
        alt={alt}
        onError={onError}
        onLoad={onLoad}
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.3s ease",
          ...props.style,
        }}
      />
    </div>
  );
};

export const StylishImage = ({
  src,
  alt,
  aspectRatio = "16/9",
  className = "",
  ...props
}) => {
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
    overflow: "hidden",
    ...props.style,
  };

  const imageStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div
      className={`stylish-image-container ${className}`}
      style={containerStyle}
    >
      <ImageWithFallback src={src} alt={alt} style={imageStyle} {...props} />
    </div>
  );
};

export default {
  SvgPlaceholder,
  ImageWithFallback,
  StylishImage,
};
