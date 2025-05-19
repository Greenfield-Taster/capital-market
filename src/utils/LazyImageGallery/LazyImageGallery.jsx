import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LazyImage from "../LazyImage/LazyImage";
import "./LazyImageGallery.scss";

const LazyImageGallery = ({ photos, containerClassName = "" }) => {
  const { t } = useTranslation();

  if (!photos || photos.length === 0) {
    return (
      <div className="no-photos">{t("gallery.noPhotos", "Нет фотографий")}</div>
    );
  }

  return (
    <div className={`lazy-gallery ${containerClassName}`}>
      <div className="lazy-gallery__grid">
        {photos.map((photo, index) => (
          <div key={index} className="lazy-gallery__item">
            <LazyImage
              src={photo.url}
              alt={photo.alt || t("gallery.photoAlt", "Фото проекту")}
              aspectRatio="3/2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LazyImageGallery;
