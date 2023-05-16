import "./SideFooter.css";

import React, { useState } from 'react'

const SideFooter = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <div className="large-container">
        <footer className="sidebar-footer">
            <div className="sidebar-footer-content">
                <p>Licensed under the MIT licence. 
                    <br/> Copyright &copy; 2020-present.</p>
            </div>

            {/* Floating Menu */}
            <div className="menu-container">
               {click && <nav className="navbar">
                    <ul className="basicons-menu">
                        <li className="nav-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 14V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V14" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                             <path d="M12 3V17M12 17L7 11.5555M12 17L17 11.5556" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <a href="https://storage.gogleapis.com/bucket/svg.zip" target="_blank" className="nav-link">
                                Download 326 icons
                            </a>
                        </li>

                        <li className="nav-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.2 12H8M13.2 12C14.7464 12 16 10.8807 16 9.5C16 8.11929 14.7464 7 13.2 7H8V17H13.2C14.7464 17 16 15.8807 16 14.5C16 13.1193 14.7464 12 13.2 12Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <a href="/?modal=suggest" target="_self" className="nav-link">
                                Suggest an Icon</a>
                        </li>

                        <li className="nav-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="5" width="18" height="14" rx="1" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20 5.5L12 13L4 5.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <a href="/?modal=update" target="_self" className="nav-link">
                                Get updates
                            </a>
                        </li>

                        <li className="nav-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 9H18V19C18 20.6569 16.6569 22 15 22H5C3.34315 22 2 20.6569 2 19V9Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18 11H18.9098C20.6165 11 22 12.3835 22 14.0902V14.0902C22 15.2606 21.3387 16.3307 20.2918 16.8541L18 18" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6 2V5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 2V5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 2V5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <a href="https://www.buymeacoffe.com/basicons" target="_blank" className="nav-link">
                                Buy us a coffee
                            </a>
                        </li>
                    </ul>
                </nav>}
                    {/* <div className="basicons" onClick={handleClick} id="element">
                        {click ? (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 5L19 19M5 19L19 5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>) : (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.2 12H8M13.2 12C14.7464 12 16 10.8807 16 9.5C16 8.11929 14.7464 7 13.2 7H8V17H13.2C14.7464 17 16 15.8807 16 14.5C16 13.1193 14.7464 12 13.2 12Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>)}
                    </div> */}

            </div>

            <div className="basicons" onClick={handleClick} id="element">
                        {click ? (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 5L19 19M5 19L19 5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>) : (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.2 12H8M13.2 12C14.7464 12 16 10.8807 16 9.5C16 8.11929 14.7464 7 13.2 7H8V17H13.2C14.7464 17 16 15.8807 16 14.5C16 13.1193 14.7464 12 13.2 12Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>)}
                    </div>

        </footer>
    </div>
  )
}

export default SideFooter