import * as React from "react";
const SvgThunderstormWeather = ({ title, titleId, ...props }) => (
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
      d="M6.341 7A6 6 0 0 1 18 9a4 4 0 0 1 1 7.874M6.32 7.046A5.001 5.001 0 0 0 5 16.584"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 11-3 5h6m0 .05-3 5"
    />
  </svg>
);
export default SvgThunderstormWeather;
