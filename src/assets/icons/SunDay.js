import * as React from "react";
const SvgSunDay = ({ title, titleId, ...props }) => (
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
      d="M17.5 17.5 19 19m1-7h2M6.5 6.5 5 5m12.5 1.5L19 5M6.5 17.5 5 19m-3-7h2m8-10v2m0 16v2m4-10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
  </svg>
);
export default SvgSunDay;
