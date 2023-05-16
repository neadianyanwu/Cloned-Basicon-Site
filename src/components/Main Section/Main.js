// import Metrics from "../Metrics Section/Metrics";
import Metrics from "../Metrics Section/Metrics";
import SearchBar from "../SearchBar Section/SearchBar";
import "./Main.css";
import "../ExportIcons Section/ExportIcons.css";
import { SVG_ICONS } from "../ExportIcons Section/ExportIcons";
import { getSubStringName } from "../../utils";

import React, { useEffect, useState } from 'react'

const Main = () => {

  const [svgSize, setSvgSize] = useState('24px');

  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect (() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [darkMode]);
  
  return (
   <div className="main-section-container">
      <div className="main-section content">
        <div className="main-section logo">
          <a href="#" className="main-section">
            <svg width="134" height="34" viewBox="0 0 134 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.3173 23.4894C24.1142 24.0572 24.4099 24.6821 24.9776 24.8852C25.5454 
              25.0883 26.1703 24.7926 26.3734 24.2249L24.3173 23.4894ZM34.0159 24.2249C34.219 24.7926 34.8439 25.0883 35.4117 24.8852C35.9795 24.6821 36.2751 24.0572 36.072 23.4894L34.0159 
              24.2249ZM27.2851 17.9236C26.6821 17.9236 26.1932 18.4125 26.1932 19.0155C26.1933 19.6185 26.6821 20.1073 27.2851 20.1073L27.2851 17.9236ZM33.1043 20.1072C33.7073 20.1072 34.1961 
              19.6184 34.1961 19.0153C34.1961 18.4123 33.7072 17.9235 33.1042 17.9235L33.1043 20.1072ZM29.2813 12.8538L28.2533 12.4861V12.4861L29.2813 12.8538ZM31.108 12.8538L32.1361 
              12.4861V12.4861L31.108 12.8538ZM50.5617 11.3923C51.1647 11.3923 51.6536 10.9035 51.6536 10.3005C51.6536 9.69746 51.1647 9.20862 50.5617 9.20862V11.3923ZM40.8631 22.7653C40.2601 
              22.7653 39.7713 23.2541 39.7713 23.8571C39.7713 24.4601 40.2601 24.949 40.8631 24.949V22.7653ZM124.271 11.3923C124.874 11.3923 125.363 10.9035 125.363 10.3005C125.363 9.69746 
              124.874 9.20862 124.271 9.20862V11.3923ZM114.572 22.7653C113.969 22.7653 113.481 23.2541 113.481 23.8571C113.481 24.4601 113.969 24.949 114.572 24.949V22.7653ZM58.4426 
              10.3005C58.4426 9.69746 57.9537 9.20862 57.3507 9.20862C56.7477 9.20862 56.2589 9.69746 56.2589 10.3005H58.4426ZM56.2589 23.8571C56.2589 24.4601 56.7477 24.949 57.3507 
              24.949C57.9537 24.949 58.4426 24.4601 58.4426 23.8571H56.2589ZM73.8383 11.3923C74.4413 11.3923 74.9302 10.9035 74.9302 10.3005C74.9302 9.69746 74.4413 9.20862 73.8383 
              9.20862V11.3923ZM73.8383 24.949C74.4413 24.949 74.9302 24.4601 74.9302 23.8571C74.9302 23.2541 74.4413 22.7653 73.8383 22.7653V24.949ZM97.9628 23.8571C97.9628 24.4601 
              98.4516 24.949 99.0546 24.949C99.6577 24.949 100.146 24.4601 100.146 23.8571H97.9628ZM99.0546 10.3005L99.9426 9.66519C99.6666 9.27928 99.1729 9.11586 98.7211 9.26083C98.2692 
              9.40581 97.9628 9.82598 97.9628 10.3005H99.0546ZM108.753 23.8571L107.865 24.4924C108.141 24.8783 108.635 25.0417 109.087 24.8968C109.539 24.7518 109.845 24.3316 109.845 
              23.8571H108.753ZM109.845 10.3005C109.845 9.69746 109.356 9.20862 108.753 9.20862C108.15 9.20862 107.661 9.69746 107.661 10.3005H109.845ZM30.0078 10.823L31.0358 11.1908L30.0078 
              10.823ZM30.3816 10.823L29.3535 11.1908L30.3816 10.823ZM28.9797 10.4553L24.3173 23.4894L26.3734 24.2249L31.0358 11.1908L28.9797 10.4553ZM29.3535 11.1908L34.0159 24.2249L36.072 
              23.4894L31.4097 10.4553L29.3535 11.1908ZM27.2851 20.1073L33.1043 20.1072L33.1042 17.9235L27.2851 17.9236L27.2851 20.1073ZM28.2533 12.4861L24.3173 23.4894L26.3734 24.2249L30.3094
              13.2216L28.2533 12.4861ZM30.08 13.2216L34.0159 24.2249L36.072 23.4894L32.1361 12.4861L30.08 13.2216ZM30.3094 13.2216C30.3059 13.2313 30.289 13.2602 30.256 13.2821C30.2291 13.2999 
              30.2072 13.3031 30.1947 13.3031C30.1822 13.3031 30.1602 13.2999 30.1334 13.2821C30.1003 13.2602 30.0835 13.2313 30.08 13.2216L32.1361 12.4861C31.4842 10.6638 28.9051 10.6638 28.2533 
              12.4861L30.3094 13.2216ZM50.5617 9.20862H44.2576V11.3923H50.5617V9.20862ZM39.7713 13.6896C39.7713 16.1661 41.7815 18.1707 44.2576 18.1707V15.9869C42.9843 15.9869 41.955 14.9568 41.955 
              13.6896H39.7713ZM44.2576 9.20862C41.7815 9.20862 39.7713 11.2132 39.7713 13.6896H41.955C41.955 12.4225 42.9843 11.3923 44.2576 11.3923V9.20862ZM47.1672 22.7653H40.8631V24.949H47.1672V22.7653ZM49.4699 
              20.468C49.4699 21.7351 48.4405 22.7653 47.1672 22.7653V24.949C49.6433 24.949 51.6536 22.9444 51.6536 20.468H49.4699ZM47.1672 18.1707C48.4405 18.1707 49.4699 19.2008 49.4699 20.468H51.6536C51.6536 17.9915 
              49.6433 15.9869 47.1672 15.9869V18.1707ZM124.271 9.20862H117.967V11.3923H124.271V9.20862ZM113.481 13.6896C113.481 16.1661 115.491 18.1707 117.967 18.1707V15.9869C116.694 15.9869 115.664 14.9568 115.664 
              13.6896H113.481ZM117.967 9.20862C115.491 9.20862 113.481 11.2132 113.481 13.6896H115.664C115.664 12.4225 116.694 11.3923 117.967 11.3923V9.20862ZM120.876 22.7653H114.572V24.949H120.876V22.7653ZM123.179 
              20.468C123.179 21.7351 122.15 22.7653 120.876 22.7653V24.949C123.353 24.949 125.363 22.9444 125.363 20.468H123.179ZM120.876 18.1707C122.15 18.1707 123.179 19.2008 123.179 20.468H125.363C125.363 17.9915 
              123.353 15.9869 120.876 15.9869V18.1707ZM10.7975 11.3923H16.1317V9.20862H10.7975V11.3923ZM16.1317 15.9869H9.82764V18.1707H16.1317V15.9869ZM18.4344 13.6896C18.4344 14.9568 17.4051 15.9869 16.1317 15.9869V18.1707C18.6078
              18.1707 20.6181 16.1661 20.6181 13.6896H18.4344ZM16.1317 11.3923C17.4051 11.3923 18.4344 12.4225 18.4344 13.6896H20.6181C20.6181 11.2132 18.6078 9.20862 16.1317 9.20862V11.3923ZM16.1317 22.7653H10.7975V24.949H16.1317V22.7653ZM18.4344 
              20.468C18.4344 21.7351 17.4051 22.7653 16.1317 22.7653V24.949C18.6078 24.949 20.6181 22.9444 20.6181 20.468H18.4344ZM16.1317 18.1707C17.4051 18.1707 18.4344 19.2008 18.4344 20.468H20.6181C20.6181 17.9915 18.6078 15.9869 16.1317 
              15.9869V18.1707ZM8.73578 11.2688V17.0788H10.9195V11.2688H8.73578ZM8.73578 17.0788V22.8888H10.9195V17.0788H8.73578ZM10.7975 22.7653C10.8632 22.7653 10.9195 22.819 10.9195 22.8888H8.73578C8.73578 24.0282 9.66047 24.949 10.7975 24.949V22.7653ZM10.7975 
              9.20862C9.66047 9.20862 8.73578 10.1294 8.73578 11.2688H10.9195C10.9195 11.3386 10.8632 11.3923 10.7975 11.3923V9.20862ZM56.2589 10.3005V23.8571H58.4426V10.3005H56.2589ZM73.8383 9.20862H70.9287V11.3923H73.8383V9.20862ZM70.9287 
              24.949H73.8383V22.7653H70.9287V24.949ZM63.0479 17.0788C63.0479 21.427 66.5779 24.949 70.9287 24.949V22.7653C67.7807 22.7653 65.2316 20.2177 65.2316 17.0788H63.0479ZM70.9287 9.20862C66.5779 9.20862 63.0479 12.7306 63.0479 
              17.0788H65.2316C65.2316 13.9399 67.7807 11.3923 70.9287 11.3923V9.20862ZM92.1436 17.0788C92.1436 20.2177 89.5946 22.7653 86.4465 22.7653V24.949C90.7973 24.949 94.3273 21.427 94.3273 17.0788H92.1436ZM86.4465 22.7653C83.2984 
              22.7653 80.7493 20.2177 80.7493 17.0788H78.5656C78.5656 21.427 82.0956 24.949 86.4465 24.949V22.7653ZM80.7493 17.0788C80.7493 13.9399 83.2984 11.3923 86.4465 11.3923V9.20862C82.0956 9.20862 78.5656 12.7306 78.5656 17.0788H80.7493ZM86.4465 
              11.3923C89.5946 11.3923 92.1436 13.9399 92.1436 17.0788H94.3273C94.3273 12.7306 90.7973 9.20862 86.4465 9.20862V11.3923ZM100.146 23.8571V10.3005H97.9628V23.8571H100.146ZM98.1666 10.9358L107.865 24.4924L109.641 23.2218L99.9426 9.66519L98.1666 
              10.9358ZM109.845 23.8571V10.3005H107.661V23.8571H109.845ZM44.2576 18.1707H47.1672V15.9869H44.2576V18.1707ZM117.967 18.1707H120.876V15.9869H117.967V18.1707ZM31.0358 11.1908C30.7532 11.9807 29.6361 11.9807 29.3535 11.1908L31.4097 10.4553C31.0015 
              9.31426 29.3878 9.31426 28.9797 10.4553L31.0358 11.1908Z" fill="#5a5a5a" fill-opacity="0.95"></path>
            <rect x="1" y="1" width="131.941" height="32" rx="3" stroke="#5a5a5a" stroke-opacity="0.95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect></svg>
          </a>
        </div>
     </div>
    {/* Section: Hero */}
        <div className="hero">
          <div className="hero-content">
            <div className="hero-content display">
              <h1 className="hero-content display-text">Basic icons for product design & development</h1>
              <p className="title-list">326+ icons . Growing collection . 24 x 24 pixel perfect</p>
            </div>
          </div>

          {/* Section: Button */}
          <div className="button-container">
            <a href="https://storage.googleapis.com/basicons-bucket/svg-zip" target="_blank" className="button-link">
              <button className="download-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 14V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V14" stroke="#fff" stroke-width="1.5"
                  strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M12 3V17M12 17L7 11.5555M12 17L17 11.5556" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span className="span-button">Download all</span>
              </button></a>
            <a href="https://github.com/solomon-fibonacci/react-basicons#react-basicons" target="_blank" className="button-link">
              <button className="doc-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="htpp://www.w3.org/2000/svg">
                  <path d="M7 8L3 12L7 16" stroke="rgba(0,0,0,0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M17 8L21 12L17 16" stroke="rgba(0,0,0,0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M14 4L9.8589 19.4548" stroke="rgba(0,0,0,0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span className="span-button">Documentation</span>
              </button>
            </a>
          </div>
        </div>
        
    {/* Section: Small Mobile-Aside */}
      <div className="hr"></div>
      <div className="modify container">
        <div className="modify top">
          <span className="modify-title">Customize</span>
          <div className="customize-control-section">
            <div className="button-control">
              <button onClick={handleDarkModeToggle} className="mode">
                {darkMode ? (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 17.5L19 19M20 12H22M6.5 6.5L5 5M17.5 6.5L19 5M6.5 17.5L5 19M2 12H4M12 2V4M12 20V22M16 12C16 
                14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" 
                stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>) : (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3812 2.04327C7.76937 2.50154 6.2485 3.36519 4.97948 4.63421C1.00684 8.60687 1.00684 
                15.0478 4.97948 19.0205C8.95213 22.9932 15.3931 22.9932 19.3657 19.0205C20.6429 17.7433 21.5095 
                16.211 21.9654 14.5876M9.5384 2C8.6321 5.39377 9.51018 9.16492 12.1726 11.8274C14.8351 14.4899 
                18.6063 15.368 22 14.4617" stroke="rgba(0,0,0,0.95)" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
                </svg>)}
              </button>
              {/* Section: Reset Button */}
              <button className="clear-container">
                <span className="clear-content">Reset</span>
              </button>
            </div>
          </div>
          {/* Section: Metrics Starts */}
            <Metrics />
          {/* Section: Metrics Ends */}
        </div>
      </div>
      
      {/* Section: SearchBar Starts */}
        <SearchBar />
      {/* Section: SearchBar Ends */}

      {/* Section: ExportIcons Starts */}
      <div className="icons">
        {Array.isArray(SVG_ICONS) && SVG_ICONS ?.map((svgIcon) => {
          const Icon =svgIcon ?.icon;

          return (
            <div className="icons-content">
              <Icon width={svgSize} height={svgSize} />
              <span className="icon-font-size">{getSubStringName(svgIcon.slug, 6)}</span>
            </div>
            )
          })}
        </div>
      {/* Section: ExportIcons Ends */}

      {/* Footer Section */}
        <footer className="main-footer">
          <div className="main-footer-content">
            <h5 className="main-content">
             Made in Africa.<a href="https://preciousm.co/" className="link"> Precious & </a><a href="https://www.linkedin.com/in/solomon-omojola-6255198a/" className="link2">Solomon.</a>
            </h5>
          </div>
        </footer>
      
  </div>
)
}

export default Main;