import Code from "../Code Section/Code";
import "./Collect.css";

import React from 'react';

const Collect = () => {
  return (
   <div className="large-container">
    <div className="collect-container">
      <div className="collect-header">
        <span className="collect-title"><h4>Collect</h4></span>
      </div>

      <div className="collect-button">
        <button className="btn btn1">Download</button>
        <button className="btn btn2">Copy</button>
      </div>
    </div>

    {/* Code Section Starts */}
      <Code />
    {/* Code Section Ends */}
   </div>
  )
}

export default Collect