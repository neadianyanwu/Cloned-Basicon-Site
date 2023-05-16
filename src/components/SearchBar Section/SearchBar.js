import "./SearchBar.css";

import React from 'react'

const SearchBar = () => {
  return (
    <div className="sticky-strip">
      <div className="search-box">
        <form action="" className="search-bar">
            <div className="search-svg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 17L22 22M19.5 10.75C19.5 15.5825 15.5825 19.5 10.75 19.5C5.91751 19.5 2 15.5825 2 
                10.75C2 5.91751 5.91751 2 10.75 2C15.5825 2 19.5 5.91751 19.5 10.75Z" stroke="#a5a5a5" 
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
            <input type="text" placeholder="Search 326 icons" />
            <span className="span">
              <a href="https://solutions.lykdat.com/new-features#text-search" target="_blank" 
              class="jsx-289565004">Search powered by Lykdat</a>
            </span>
        </form>
      </div>
    </div>
  )
}

export default SearchBar;