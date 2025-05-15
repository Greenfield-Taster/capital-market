import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ImageWithFallback, StylishImage } from "../../../utils/imageUtils";
import "./PhotoGallery.scss";

const PhotoGallery = ({ photos }) => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sliderRef = useRef(null);
  const thumbnailsRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setIsLightboxOpen(true);

    // document.body.style.overflow = "hidden"; // Заблокувати прокрутку сторінки
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const nextPhoto = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevPhoto = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextPhoto();
    } else if (isRightSwipe) {
      prevPhoto();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;

      switch (e.key) {
        case "ArrowRight":
          nextPhoto();
          break;
        case "ArrowLeft":
          prevPhoto();
          break;
        case "Escape":
          closeLightbox();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen]);

  useEffect(() => {
    if (sliderRef.current) {
      const translateValue = -selectedIndex * 100;
      sliderRef.current.style.transform = `translateX(${translateValue}%)`;
    }
  }, [selectedIndex]);

  return (
    <div className={`photo-gallery ${visible ? "visible" : ""}`}>
      <div className="photo-gallery__main-slider-container">
        <div
          className="photo-gallery__main-slider"
          ref={sliderRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {photos.map((photo, index) => (
            <div
              className="photo-gallery__main-slide"
              key={index}
              onClick={() => openLightbox(index)}
            >
              <StylishImage
                src={photo.url}
                alt={photo.alt || t("gallery.photoAlt", "Фото проекту")}
                className="photo-gallery__main-image"
                aspectRatio="16/9"
              />
              {photo.description && (
                <div className="photo-gallery__description">
                  <span>{photo.description}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {photos.length > 1 && (
          <>
            <button
              className="photo-gallery__nav-button photo-gallery__nav-button--prev"
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              aria-label={t("gallery.prevPhoto", "Попереднє фото")}
            >
              <span>&#10094;</span>
            </button>
            <button
              className="photo-gallery__nav-button photo-gallery__nav-button--next"
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              aria-label={t("gallery.nextPhoto", "Наступне фото")}
            >
              <span>&#10095;</span>
            </button>
          </>
        )}

        {photos.length > 1 && (
          <div className="photo-gallery__indicators">
            {photos.map((_, index) => (
              <button
                key={index}
                className={`photo-gallery__indicator ${
                  index === selectedIndex ? "active" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(index);
                }}
                aria-label={
                  t("gallery.goToPhoto", "Перейти до фото") + ` ${index + 1}`
                }
              />
            ))}
          </div>
        )}
      </div>

      {photos.length > 1 && (
        <div className="photo-gallery__thumbnails" ref={thumbnailsRef}>
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`photo-gallery__thumbnail thumbnail-${index} ${
                index === selectedIndex ? "active" : ""
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <ImageWithFallback
                src={photo.url}
                alt=""
                className="photo-gallery__thumbnail-image"
              />
            </div>
          ))}
        </div>
      )}

      {isLightboxOpen && (
        <div className="photo-gallery__lightbox" onClick={closeLightbox}>
          <div
            className="photo-gallery__lightbox-content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <button
              className="photo-gallery__lightbox-close"
              onClick={closeLightbox}
              aria-label={t("gallery.close", "Закрити")}
            >
              &times;
            </button>

            <div className="photo-gallery__lightbox-image-container">
              <ImageWithFallback
                src={photos[selectedIndex].url}
                alt={
                  photos[selectedIndex].alt ||
                  t("gallery.photoAlt", "Фото проекту")
                }
                className="photo-gallery__lightbox-image"
              />
            </div>

            {photos[selectedIndex].description && (
              <div className="photo-gallery__lightbox-description">
                <p>{photos[selectedIndex].description}</p>
              </div>
            )}

            {photos.length > 1 && (
              <>
                <button
                  className="photo-gallery__lightbox-nav photo-gallery__lightbox-nav--prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevPhoto();
                  }}
                  aria-label={t("gallery.prevPhoto", "Попереднє фото")}
                >
                  <span>&#10094;</span>
                </button>
                <button
                  className="photo-gallery__lightbox-nav photo-gallery__lightbox-nav--next"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextPhoto();
                  }}
                  aria-label={t("gallery.nextPhoto", "Наступне фото")}
                >
                  <span>&#10095;</span>
                </button>
              </>
            )}

            <div className="photo-gallery__lightbox-counter">
              {selectedIndex + 1} / {photos.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
