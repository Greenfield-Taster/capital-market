import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { getImagePath } from "../../../utils/imageUtils";
import "./Lightbox.scss";

const Lightbox = ({ photos, initialIndex, onClose }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const lightboxContainerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          prevPhoto();
          break;
        case "ArrowRight":
          nextPhoto();
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
  }, [currentIndex, zoom]);

  useEffect(() => {
    const container = lightboxContainerRef.current;
    if (!container) return;

    const wheelHandler = (e) => {
      e.preventDefault();
      if (e.deltaY < 0) {
        handleZoomIn();
      } else {
        handleZoomOut();
      }
    };

    container.addEventListener("wheel", wheelHandler, { passive: false });
    return () => {
      container.removeEventListener("wheel", wheelHandler);
    };
  }, [zoom]);

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
    resetZoom();
  };

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
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
      e.preventDefault();
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

    if (isLeftSwipe && zoom === 1) {
      nextPhoto();
    } else if (isRightSwipe && zoom === 1) {
      prevPhoto();
    }
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    if (zoom === 1) {
      handleZoomIn();
    } else {
      resetZoom();
    }
  };

  const currentPhoto = photos[currentIndex];

  return createPortal(
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        <button
          className="lightbox__close"
          onClick={onClose}
          aria-label={t("gallery.close", "Закрити")}
        >
          ×
        </button>

        <div
          ref={lightboxContainerRef}
          className="lightbox__image-container"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{
            cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in",
          }}
        >
          <img
            ref={imageRef}
            src={getImagePath(currentPhoto.url)}
            alt={currentPhoto.alt || t("gallery.photoAlt", "Фото проекту")}
            className="lightbox__image"
            style={{
              transform: `scale(${zoom}) translate(${position.x / zoom}px, ${
                position.y / zoom
              }px)`,
              transition: isDragging ? "none" : "transform 0.3s ease",
              cursor: zoom > 1 ? "inherit" : "zoom-in",
            }}
            onClick={handleImageClick}
            draggable={false}
          />
        </div>

        <div className="lightbox__zoom-controls">
          <button
            className="lightbox__zoom-button"
            onClick={handleZoomOut}
            disabled={zoom <= 1}
            aria-label={t("gallery.zoomOut", "Зменшити")}
          >
            −
          </button>
          <span className="lightbox__zoom-level">
            {Math.round(zoom * 100)}%
          </span>
          <button
            className="lightbox__zoom-button"
            onClick={handleZoomIn}
            disabled={zoom >= 3}
            aria-label={t("gallery.zoomIn", "Збільшити")}
          >
            +
          </button>
        </div>

        {photos.length > 1 && (
          <>
            <button
              className="lightbox__nav lightbox__nav--prev"
              onClick={prevPhoto}
              aria-label={t("gallery.prevPhoto", "Попереднє фото")}
            >
              ‹
            </button>
            <button
              className="lightbox__nav lightbox__nav--next"
              onClick={nextPhoto}
              aria-label={t("gallery.nextPhoto", "Наступне фото")}
            >
              ›
            </button>
          </>
        )}

        <div className="lightbox__counter">
          {currentIndex + 1} / {photos.length}
        </div>

        {currentPhoto.description && (
          <div className="lightbox__description">
            <p>{currentPhoto.description}</p>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Lightbox;
