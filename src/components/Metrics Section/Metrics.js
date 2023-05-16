import "./Metrics.css";
import $ from "jquery";

import React from 'react'

const Metrics = () => {

    $(document).on('click','ul li', function() {
        $(this).addClass('active').siblings().removeClass('active')
      } )

  return (
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
  )
}

export default Metrics;