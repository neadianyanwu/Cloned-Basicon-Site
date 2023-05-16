import * as React from "react";
const SvgLocationPin = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.032 15.287 12 22l5.968-6.713C22.545 10.14 18.889 2 12 2 5.11 2 1.455 10.139 6.032 15.287Z"
    />
    <circle
      cx={12}
      cy={10}
      r={3}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
export default SvgLocationPin;
