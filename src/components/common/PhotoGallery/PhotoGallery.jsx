import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import LazyImage from "../../../utils/LazyImage/LazyImage";
import "./PhotoGallery.scss";

const PhotoGallery = ({ photos }) => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sliderRef = useRef(null);
  const thumbnailsRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setSelectedIndex(0);
  }, [photos]);

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
            <div className="photo-gallery__main-slide" key={index}>
              <LazyImage
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
              <LazyImage
                src={photo.url}
                alt=""
                className="photo-gallery__thumbnail-image"
                aspectRatio="1/1"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
