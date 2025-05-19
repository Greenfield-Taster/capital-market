import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
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

  const forceFinishLoading = () => {
    document.querySelector(".main-preloader")?.classList.add("hide");
    setTimeout(() => {
      setLoading(false);
      setInitialLoadComplete(true);
      document.body.classList.add("content-visible");
    }, 800);
  };

  useEffect(() => {
    if (!initialLoadComplete) {
      const backupTimer = setTimeout(forceFinishLoading, 6000);

      const timer = setTimeout(() => {
        document.querySelector(".main-preloader")?.classList.add("hide");

        setTimeout(() => {
          setLoading(false);
          setInitialLoadComplete(true);
          document.body.classList.add("content-visible");
          clearTimeout(backupTimer);
        }, 800);
      }, 2600);

      return () => {
        clearTimeout(timer);
        clearTimeout(backupTimer);
      };
    } else {
      setLoading(false);
      document.body.classList.add("content-visible");
    }
  }, [initialLoadComplete, setInitialLoadComplete]);

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
          <div className="preloader-content">
            <div className="logo-container">
              <svg
                className="logo-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 485.35 303.29"
              >
                <g id="Layer_1-2" data-name="Layer 1">
                  <g className="grid-elements">
                    <path
                      className="cls-5 grid-path"
                      style={{ "--i": 1 }}
                      d="m130.15,55.26h-22.95c-10.32,0-18.83,7.7-20.13,17.67,3.66-6.15,10.57-10.3,18.5-10.3h24.57v-7.37Z"
                    />
                    <path
                      className="cls-5 grid-path"
                      style={{ "--i": 2 }}
                      d="m175.68,55.26h-38.16v7.37h39.79c7.93,0,14.84,4.15,18.5,10.3-1.3-9.97-9.8-17.67-20.13-17.67Z"
                    />
                    <path
                      className="cls-5 grid-path"
                      style={{ "--i": 3 }}
                      d="m275.55,189.24h-68.38v7.41h70.01c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                    />
                    <path
                      className="cls-5 grid-path"
                      style={{ "--i": 4 }}
                      d="m275.55,81.12h-68.38v7.41h70.01c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                    />
                    <path
                      className="cls-5 grid-path"
                      style={{ "--i": 5 }}
                      d="m275.55,118.36h-68.38v7.41h70.01c7.98,0,14.92,4.17,18.6,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                    />
                    <path
                      className="cls-5 grid-path"
                      style={{ "--i": 6 }}
                      d="m275.55,153.8h-68.38v7.41h70.01c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                    />
                    <g className="grid-path" style={{ "--i": 7 }}>
                      <rect
                        className="cls-5"
                        x="207.17"
                        y="99.74"
                        width="32.74"
                        height="7.41"
                      />
                      <path
                        className="cls-5"
                        d="m275.55,99.74h-28.23v7.41h29.87c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                      />
                    </g>
                    <g className="grid-path" style={{ "--i": 8 }}>
                      <rect
                        className="cls-5"
                        x="207.17"
                        y="136.08"
                        width="9.91"
                        height="7.41"
                      />
                      <path
                        className="cls-5"
                        d="m275.55,136.08h-51.06v7.41h52.69c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                      />
                    </g>
                    <g className="grid-path" style={{ "--i": 9 }}>
                      <rect
                        className="cls-5"
                        x="207.17"
                        y="171.52"
                        width="44.31"
                        height="7.41"
                      />
                      <path
                        className="cls-5"
                        d="m275.55,171.52h-16.66v7.41h18.29c7.98,0,14.92,4.17,18.6,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                      />
                    </g>
                    <g className="grid-path" style={{ "--i": 10 }}>
                      <rect
                        className="cls-5"
                        x="207.17"
                        y="206.96"
                        width="9.91"
                        height="7.41"
                      />
                      <path
                        className="cls-5"
                        d="m275.55,206.96h-51.06v7.41h52.69c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                      />
                    </g>
                    <g className="grid-path" style={{ "--i": 11 }}>
                      <path
                        className="cls-5"
                        d="m275.55,62.5h-46.83v7.41h48.46c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                      />
                      <rect
                        className="cls-5"
                        x="207.17"
                        y="62.5"
                        width="14.14"
                        height="7.41"
                      />
                    </g>
                    <path
                      className="cls-5 grid-path"
                      style={{ "--i": 12 }}
                      d="m307.48,115.58h70.01c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.77-20.24-17.77h-68.38v7.41Z"
                    />
                    <path
                      className="cls-5 grid-path"
                      style={{ "--i": 13 }}
                      d="m375.86,164.03h-68.38v7.41h70.01c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.76-20.24-17.76Z"
                    />
                    <path
                      className="cls-5 grid-path"
                      style={{ "--i": 14 }}
                      d="m375.86,199.47h-68.38v7.41h70.01c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.76-20.24-17.76Z"
                    />
                    <g className="grid-path" style={{ "--i": 15 }}>
                      <rect
                        className="cls-5"
                        x="307.48"
                        y="145.41"
                        width="14.12"
                        height="7.41"
                      />
                      <path
                        className="cls-5"
                        d="m375.86,145.41h-46.85v7.41h48.49c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                      />
                    </g>
                    <g className="grid-path" style={{ "--i": 16 }}>
                      <rect
                        className="cls-5"
                        x="307.48"
                        y="126.79"
                        width="40.6"
                        height="7.41"
                      />
                      <path
                        className="cls-5"
                        d="m375.86,126.79h-20.37v7.41h22c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.76-20.24-17.76Z"
                      />
                    </g>
                    <g className="grid-path" style={{ "--i": 17 }}>
                      <rect
                        className="cls-5"
                        x="307.48"
                        y="181.75"
                        width="40.6"
                        height="7.41"
                      />
                      <path
                        className="cls-5"
                        d="m375.86,181.75h-20.37v7.41h22c7.98,0,14.92,4.17,18.6,10.36-1.31-10.02-9.86-17.76-20.24-17.76Z"
                      />
                    </g>
                    <g className="grid-path" style={{ "--i": 18 }}>
                      <rect
                        className="cls-5"
                        x="307.48"
                        y="217.19"
                        width="14.12"
                        height="7.41"
                      />
                      <path
                        className="cls-5"
                        d="m375.86,217.19h-46.85v7.41h48.49c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.76-20.24-17.76Z"
                      />
                    </g>
                    <g className="grid-path" style={{ "--i": 19 }}>
                      <path
                        className="cls-5"
                        d="m114.27,197.22h-7.25c-10.38,0-18.93,7.75-20.24,17.77,3.68-6.18,10.62-10.36,18.6-10.36h8.89v-7.41Z"
                      />
                      <path
                        className="cls-5"
                        d="m175.87,197.22h-54.19v7.41h55.83c7.98,0,14.93,4.17,18.61,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                      />
                    </g>
                    <g className="grid-path" style={{ "--i": 20 }}>
                      <path
                        className="cls-5"
                        d="m150.31,161.78h-43.29c-10.38,0-18.93,7.74-20.24,17.77,3.68-6.18,10.62-10.36,18.6-10.36h44.93v-7.41Z"
                      />
                      <path
                        className="cls-5"
                        d="m175.87,161.78h-18.15v7.41h19.79c7.98,0,14.93,4.18,18.61,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                      />
                    </g>
                    <g className="grid-path" style={{ "--i": 21 }}>
                      <path
                        className="cls-5"
                        d="m175.68,90.5h-10.98v7.37h12.61c7.93,0,14.84,4.15,18.5,10.3-1.3-9.96-9.8-17.67-20.13-17.67Z"
                      />
                      <path
                        className="cls-5"
                        d="m157.33,90.5h-50.12c-10.32,0-18.83,7.7-20.13,17.67,3.66-6.15,10.57-10.3,18.5-10.3h51.75v-7.37Z"
                      />
                    </g>
                    <g className="grid-path" style={{ "--i": 22 }}>
                      <path
                        className="cls-5"
                        d="m105.36,19.21c-9.48.85-17.06,8.22-18.28,17.58,3.62-6.09,10.44-10.22,18.28-10.29v-7.29Z"
                      />
                      <path
                        className="cls-5"
                        d="m175.68,19.12h-62.95v7.37h64.58c7.93,0,14.84,4.15,18.5,10.3-1.3-9.96-9.8-17.67-20.13-17.67Z"
                      />
                    </g>
                    <g className="grid-path" style={{ "--i": 23 }}>
                      <path
                        className="cls-5"
                        d="m146.6.5h-39.59c-10.38,0-18.93,7.75-20.24,17.77,3.68-6.18,10.62-10.36,18.6-10.36h41.22V.5Z"
                      />
                      <path
                        className="cls-5"
                        d="m175.87.5h-21.86v7.41h23.49c7.98,0,14.93,4.18,18.61,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                      />
                    </g>
                    <path
                      className="cls-2 grid-path"
                      style={{ "--i": 24 }}
                      d="m275.55,206.96h-2.31v7.41h3.94c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                    />
                    <path
                      className="cls-5 grid-path"
                      style={{ "--i": 25 }}
                      d="m105.38,186.91h72.12c7.98,0,14.93,4.18,18.61,10.36-1.31-10.02-9.86-17.77-20.24-17.77h-68.86c-10.38,0-18.93,7.75-20.24,17.77,3.68-6.18,10.62-10.36,18.6-10.36Z"
                    />
                    <path
                      className="cls-5 grid-path"
                      style={{ "--i": 26 }}
                      d="m105.38,151.47h72.12c7.98,0,14.93,4.18,18.61,10.36-1.31-10.02-9.86-17.77-20.24-17.77h-68.86c-10.38,0-18.93,7.75-20.24,17.77,3.68-6.18,10.62-10.36,18.6-10.36Z"
                    />
                    <path
                      className="cls-5 grid-path"
                      style={{ "--i": 27 }}
                      d="m105.38,116.03h72.12c7.98,0,14.93,4.18,18.61,10.36-1.31-10.02-9.86-17.77-20.24-17.77h-68.86c-10.38,0-18.93,7.75-20.24,17.77,3.68-6.18,10.62-10.36,18.6-10.36Z"
                    />
                    <path
                      className="cls-5 grid-path"
                      style={{ "--i": 28 }}
                      d="m105.58,80.25h71.72c7.93,0,14.84,4.15,18.5,10.3-1.3-9.97-9.8-17.67-20.13-17.67h-68.48c-10.32,0-18.83,7.7-20.13,17.67,3.66-6.15,10.57-10.3,18.5-10.3Z"
                    />
                    <path
                      className="cls-5 grid-path"
                      style={{ "--i": 29 }}
                      d="m105.58,45.01h71.72c7.93,0,14.84,4.15,18.5,10.3-1.3-9.97-9.8-17.67-20.13-17.67h-68.48c-10.32,0-18.83,7.7-20.13,17.67,3.66-6.15,10.57-10.3,18.5-10.3Z"
                    />
                    <g className="grid-path" style={{ "--i": 30 }}>
                      <path
                        className="cls-2"
                        d="m175.87,126.34h-2.31v7.41h3.94c7.98,0,14.93,4.18,18.61,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                      />
                      <path
                        className="cls-2"
                        d="m175.87,144.06h-2.31v7.41h3.94c7.98,0,14.93,4.18,18.61,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                      />
                      <path
                        className="cls-2"
                        d="m196.11,197.27c-1.31-10.02-9.86-17.77-20.24-17.77h-2.31v7.41h3.94c7.98,0,14.93,4.18,18.61,10.36Z"
                      />
                      <path
                        className="cls-2"
                        d="m175.87,161.78h-2.31v7.41h3.94c7.98,0,14.93,4.18,18.61,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                      />
                      <path
                        className="cls-2"
                        d="m175.87,90.9h-2.31v7.41h3.94c7.98,0,14.93,4.17,18.61,10.35-1.31-10.02-9.86-17.77-20.24-17.77Z"
                      />
                      <path
                        className="cls-2"
                        d="m175.87,108.62h-2.31v7.41h3.94c7.98,0,14.93,4.18,18.61,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                      />
                      <path
                        className="cls-2"
                        d="m175.87,19.12h-2.31v7.41h3.94c7.98,0,14.93,4.18,18.61,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                      />
                      <path
                        className="cls-2"
                        d="m175.87.5h-2.31v7.41h3.94c7.98,0,14.93,4.18,18.61,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                      />
                      <path
                        className="cls-2"
                        d="m196.11,214.99c-1.31-10.02-9.86-17.77-20.24-17.77h-2.31v7.41h3.94c7.98,0,14.93,4.17,18.61,10.36Z"
                      />
                      <path
                        className="cls-2"
                        d="m175.87,73.18h-2.31v7.41h3.94c7.98,0,14.93,4.18,18.61,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                      />
                      <path
                        className="cls-2"
                        d="m175.87,55.46h-2.31v7.41h3.94c7.98,0,14.93,4.18,18.61,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                      />
                      <path
                        className="cls-2"
                        d="m175.87,37.74h-2.31v7.41h3.94c7.98,0,14.93,4.17,18.61,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                      />
                    </g>
                    <path
                      className="cls-2 grid-path"
                      style={{ "--i": 31 }}
                      d="m275.55,62.5h-2.31v7.41h3.94c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                    />
                    <path
                      className="cls-2 grid-path"
                      style={{ "--i": 32 }}
                      d="m275.55,171.52h-2.31v7.41h3.94c7.98,0,14.92,4.17,18.6,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                    />
                    <path
                      className="cls-2 grid-path"
                      style={{ "--i": 33 }}
                      d="m275.55,189.24h-2.31v7.41h3.94c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                    />
                    <path
                      className="cls-2 grid-path"
                      style={{ "--i": 34 }}
                      d="m275.55,99.74h-2.31v7.41h3.94c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                    />
                    <path
                      className="cls-2 grid-path"
                      style={{ "--i": 35 }}
                      d="m275.55,81.12h-2.31v7.41h3.94c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                    />
                    <path
                      className="cls-2 grid-path"
                      style={{ "--i": 36 }}
                      d="m275.55,153.8h-2.31v7.41h3.94c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                    />
                    <path
                      className="cls-2 grid-path"
                      style={{ "--i": 37 }}
                      d="m275.55,136.08h-2.31v7.41h3.94c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                    />
                    <path
                      className="cls-2 grid-path"
                      style={{ "--i": 38 }}
                      d="m275.55,118.36h-2.31v7.41h3.94c7.98,0,14.92,4.17,18.6,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                    />
                    <path
                      className="cls-2 grid-path"
                      style={{ "--i": 39 }}
                      d="m375.86,108.17h-2.31v7.41h3.94c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                    />
                    <path
                      className="cls-2 grid-path"
                      style={{ "--i": 40 }}
                      d="m375.86,217.19h-2.31v7.41h3.94c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.76-20.24-17.76Z"
                    />
                    <path
                      className="cls-2 grid-path"
                      style={{ "--i": 41 }}
                      d="m375.86,145.41h-2.31v7.41h3.94c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                    />
                    <path
                      className="cls-2 grid-path"
                      style={{ "--i": 42 }}
                      d="m375.86,126.79h-2.31v7.41h3.94c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.76-20.24-17.76Z"
                    />
                    <path
                      className="cls-2 grid-path"
                      style={{ "--i": 43 }}
                      d="m375.86,199.47h-2.31v7.41h3.94c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.76-20.24-17.76Z"
                    />
                    <path
                      className="cls-2 grid-path"
                      style={{ "--i": 44 }}
                      d="m375.86,181.75h-2.31v7.41h3.94c7.98,0,14.92,4.17,18.6,10.36-1.31-10.02-9.86-17.76-20.24-17.76Z"
                    />
                    <path
                      className="cls-2 grid-path"
                      style={{ "--i": 45 }}
                      d="m375.86,164.03h-2.31v7.41h3.94c7.98,0,14.92,4.18,18.6,10.36-1.31-10.02-9.86-17.76-20.24-17.76Z"
                    />
                    <g className="grid-path" style={{ "--i": 26 }}>
                      <path
                        className="cls-5"
                        d="m175.87,126.34h-57.9v7.41h59.53c7.98,0,14.93,4.18,18.61,10.36-1.31-10.02-9.86-17.77-20.24-17.77Z"
                      />
                      <path
                        className="cls-5"
                        d="m110.56,126.34h-3.55c-10.38,0-18.93,7.75-20.24,17.77,3.68-6.18,10.62-10.36,18.6-10.36h5.18v-7.41Z"
                      />
                    </g>
                  </g>

                  <g className="logo-text">
                    <text className="cls-6" transform="translate(0 290.33)">
                      <tspan className="cls-1" x="0" y="0">
                        C
                      </tspan>
                      <tspan className="cls-8" x="37.49" y="0">
                        A
                      </tspan>
                      <tspan className="cls-9" x="77.27" y="0">
                        P
                      </tspan>
                      <tspan className="cls-7" x="114.9" y="0">
                        I
                      </tspan>
                      <tspan className="cls-4" x="133.33" y="0">
                        T
                      </tspan>
                      <tspan className="cls-3" x="164.19" y="0">
                        AL MARKET
                      </tspan>
                    </text>
                  </g>
                </g>
              </svg>
            </div>
            <div className="loader"></div>
          </div>
        </div>
      )}

      <div className={`nav-preloader ${navLoading ? "active" : ""}`}>
        <div className="progress"></div>
      </div>
    </>
  );
};

export default Preloader;
