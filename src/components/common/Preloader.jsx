import { useEffect, useState, useContext, createContext } from "react";
import { useLocation } from "react-router-dom";
import preloaderVideo from "../../assets/preloader-video.mp4";
import "../../styles/common/_preloader.scss";

export const PreloaderContext = createContext({
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
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [fadeOutActive, setFadeOutActive] = useState(false);

  useEffect(() => {
    if (!initialLoadComplete) {
      const timer = setTimeout(() => {
        if (!videoEnded) {
          setFadeOutActive(true);
          setTimeout(() => {
            setLoading(false);
            setInitialLoadComplete(true);
          }, 1000);
        }
      }, 5500);

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [initialLoadComplete, setInitialLoadComplete, videoEnded]);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    setFadeOutActive(true);
    setTimeout(() => {
      setLoading(false);
      setInitialLoadComplete(true);
    }, 1000);
  };

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
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
        <div className={`main-preloader ${fadeOutActive ? "fade-out" : ""}`}>
          {!videoLoaded && (
            <div className="loader-container">
              <div className="loader-spinner"></div>
            </div>
          )}

          <video
            className="preloader-video"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            onLoadedData={handleVideoLoaded}
          >
            <source src={preloaderVideo} type="video/mp4" />
            <source src={preloaderVideo} type="video/quicktime" />
            Ваш браузер не поддерживает видео.
          </video>

          {fadeOutActive && (
            <div className="particles-container">
              {[...Array(30)].map((_, i) => (
                <div key={i} className="particle"></div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className={`nav-preloader ${navLoading ? "active" : ""}`}>
        <div className="progress"></div>
      </div>
    </>
  );
};

export default Preloader;
