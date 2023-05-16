import "./Customize.css"
import $ from "jquery";

// import { SunDay } from "react-basicons";
import React, { useEffect, useState } from 'react'

const Customize = () => {
  $(document).on('click','ul li', function() {
    $(this).addClass('active').siblings().removeClass('active')
  } )
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
    <div className="customize-container">
      <div className="content-container">
        <label className="content-title">Customize</label>
        <div className="customize-button-section">
          <div className="customize-button">
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
            <button className="reset-container">
              <span className="reset-content">Reset</span>
            </button>
          </div>
        </div>
      </div>

      {/* Section Metrics */}
       {/* <div className="statistics-container">
          <div className="size-config">
            <div className="size-container">
              <div className="statistics-content">
                <span className="size-header"><h3>Size</h3></span>
                <ul className="label">
                  <li className="active">
                    <a href="#">16</a>
                  </li>
                  <li>
                    <a href="#">24</a>
                  </li>
                  <li>
                    <a href="#">32</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="statistics-content">
                <span className="size-header"><h3>Stroke</h3></span>
                <ul className="label">
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">1.5</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                </ul>
              </div>
          </div>
       </div> */}

      {/* <div className="statistics-container">
        <div className="radio-groups">
          <div className="size-config">
            <div className="size-container">
              <span className="size-header"><h3>Size</h3></span>
              <ul className="body-label">
                <li className="active">
                  <a href="#">16</a>
                </li>
                <li>
                  <a href="#">24</a>
                </li>
                <li>
                  <a href="#">32</a>
                </li>
              </ul>
            </div>
            
            <div className="size-container">
              <span className="size-header"><h3>Stroke</h3></span>
              <ul className="body-label">
                <li className="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">1.5</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div> */}

      <div className="statistics-container">
        <label className="label-content">Size</label>
        <ul className="btn-group">
          <li className="active">
            <button>16</button>
          </li>
          <li>
            <button>24</button>
          </li>
          <li>
            <button>32</button>
          </li>
        </ul>

        <label className="label-content">Stroke</label>
        <ul className="btn-group">
          <li className="active">
            <button>1</button>
          </li>
          <li>
            <button>1.5</button>
          </li>
          <li>
            <button>2</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Customize;