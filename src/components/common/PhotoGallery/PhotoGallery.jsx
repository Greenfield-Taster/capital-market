import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";
import LazyImage from "../../../utils/LazyImage/LazyImage";
import { getImagePath } from "../../../utils/imageUtils";
import "./PhotoGallery.scss";

const PhotoGallery = ({ photos }) => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const sliderRef = useRef(null);
  const thumbnailsRef = useRef(null);
  const lightboxImageRef = useRef(null);
  const lightboxContainerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setSelectedIndex(0);
  }, [photos]);

  // Блокировка прокрутки страницы при открытом лайтбоксе
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

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

  const nextLightboxPhoto = () => {
    setLightboxIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
    resetZoom();
  };

  const prevLightboxPhoto = () => {
    setLightboxIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
    resetZoom();
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    resetZoom();
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    resetZoom();
  };

  const resetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => {
      const newZoom = Math.max(prev - 0.5, 1);
      if (newZoom === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  // Добавляем обработчик wheel события с { passive: false }
  useEffect(() => {
    const container = lightboxContainerRef.current;
    if (!container || !lightboxOpen) return;

    const wheelHandler = (e) => {
      e.preventDefault();
      handleWheel(e);
    };

    container.addEventListener("wheel", wheelHandler, { passive: false });

    return () => {
      container.removeEventListener("wheel", wheelHandler);
    };
  }, [lightboxOpen, zoom]);

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
      if (lightboxOpen) {
        nextLightboxPhoto();
      } else {
        nextPhoto();
      }
    } else if (isRightSwipe) {
      if (lightboxOpen) {
        prevLightboxPhoto();
      } else {
        prevPhoto();
      }
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      const translateValue = -selectedIndex * 100;
      sliderRef.current.style.transform = `translateX(${translateValue}%)`;
    }
  }, [selectedIndex]);

  // Обработка клавиатуры для лайтбокса
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          prevLightboxPhoto();
          break;
        case "ArrowRight":
          nextLightboxPhoto();
          break;
        case "+":
        case "=":
          handleZoomIn();
          break;
        case "-":
          handleZoomOut();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  const LightboxContent = () => (
    <div className="photo-gallery__lightbox" onClick={closeLightbox}>
      <div
        className="photo-gallery__lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="photo-gallery__lightbox-close"
          onClick={closeLightbox}
          aria-label={t("gallery.close", "Закрити")}
        >
          ×
        </button>

        <div
          ref={lightboxContainerRef}
          className="photo-gallery__lightbox-image-container"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{
            cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "pointer",
          }}
        >
          <img
            ref={lightboxImageRef}
            src={getImagePath(photos[lightboxIndex].url)}
            alt={
              photos[lightboxIndex].alt || t("gallery.photoAlt", "Фото проекту")
            }
            className="photo-gallery__lightbox-image"
            style={{
              transform: `scale(${zoom}) translate(${position.x / zoom}px, ${
                position.y / zoom
              }px)`,
              transition: isDragging ? "none" : "transform 0.3s ease",
            }}
            onClick={(e) => {
              e.stopPropagation();
              if (zoom === 1) {
                handleZoomIn();
              }
            }}
          />
        </div>

        {/* Элементы управления масштабом */}
        <div className="photo-gallery__zoom-controls">
          <button
            className="photo-gallery__zoom-button"
            onClick={handleZoomOut}
            disabled={zoom <= 1}
            aria-label={t("gallery.zoomOut", "Зменшити")}
          >
            −
          </button>
          <span className="photo-gallery__zoom-level">
            {Math.round(zoom * 100)}%
          </span>
          <button
            className="photo-gallery__zoom-button"
            onClick={handleZoomIn}
            disabled={zoom >= 3}
            aria-label={t("gallery.zoomIn", "Збільшити")}
          >
            +
          </button>
        </div>

        {/* Навигация */}
        {photos.length > 1 && (
          <>
            <button
              className="photo-gallery__lightbox-nav photo-gallery__lightbox-nav--prev"
              onClick={(e) => {
                e.stopPropagation();
                prevLightboxPhoto();
              }}
              aria-label={t("gallery.prevPhoto", "Попереднє фото")}
            >
              &#10094;
            </button>
            <button
              className="photo-gallery__lightbox-nav photo-gallery__lightbox-nav--next"
              onClick={(e) => {
                e.stopPropagation();
                nextLightboxPhoto();
              }}
              aria-label={t("gallery.nextPhoto", "Наступне фото")}
            >
              &#10095;
            </button>
          </>
        )}

        {/* Счетчик фото */}
        <div className="photo-gallery__lightbox-counter">
          {lightboxIndex + 1} / {photos.length}
        </div>

        {/* Описание */}
        {photos[lightboxIndex].description && (
          <div className="photo-gallery__lightbox-description">
            <p>{photos[lightboxIndex].description}</p>
          </div>
        )}
      </div>
    </div>
  );

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
              style={{
                "--bg-image": `url(${getImagePath(photo.url)})`,
              }}
              onClick={() => openLightbox(index)}
            >
              <LazyImage
                src={photo.url}
                alt={photo.alt || t("gallery.photoAlt", "Фото проекту")}
                className="photo-gallery__main-image"
                aspectRatio="16/9"
              />
              <div className="photo-gallery__hover-overlay">
                <span className="photo-gallery__hover-text">
                  {t("gallery.openPhoto", "Відкрити")}
                </span>
              </div>
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

      {lightboxOpen && createPortal(<LightboxContent />, document.body)}
    </div>
  );
};

export default PhotoGallery;
