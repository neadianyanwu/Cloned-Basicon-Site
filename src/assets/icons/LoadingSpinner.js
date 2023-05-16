import * as React from "react";
const SvgLoadingSpinner = ({ title, titleId, ...props }) => (
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
      d="m16 16 3 3m-1-7h4M8 8 5 5m11 3 3-3M8 16l-3 3m-3-7h4m6-10v4m0 12v4"
    />
  </svg>
);
export default SvgLoadingSpinner;
