import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import preloaderVideo from "../../assets/preloader-video.mp4";
import "../../styles/common/_preloader.scss";

export const PreloaderContext = React.createContext({
  initialLoadComplete: false,
  setInitialLoadComplete: () => {},
});

export const usePreloader = () => useContext(PreloaderContext);

export const PreloaderProvider = ({ children }) => {
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  return (
    <PreloaderContext.Provider
      value={{ initialLoadComplete, setInitialLoadComplete }}
    >
      {children}
    </PreloaderContext.Provider>
  );
};

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [navLoading, setNavLoading] = useState(false);
  const { initialLoadComplete, setInitialLoadComplete } = usePreloader();
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    if (!initialLoadComplete) {
      const timer = setTimeout(() => {
        if (!videoEnded) {
          setLoading(false);
          setInitialLoadComplete(true);
        }
      }, 7000);

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [initialLoadComplete, setInitialLoadComplete, videoEnded]);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    setTimeout(() => {
      setLoading(false);
      setInitialLoadComplete(true);
    }, 300);
  };

  useEffect(() => {
    if (initialLoadComplete) {
      setNavLoading(true);
      const navTimer = setTimeout(() => {
        setNavLoading(false);
      }, 800);

      return () => clearTimeout(navTimer);
    }
  }, [location.pathname, initialLoadComplete]);

  return (
    <>
      {loading && (
        <div className="main-preloader">
          <video
            className="preloader-video"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
          >
            <source src={preloaderVideo} type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
        </div>
      )}

      <div className={`nav-preloader ${navLoading ? "active" : ""}`}>
        <div className="progress"></div>
      </div>
    </>
  );
};

export default Preloader;
