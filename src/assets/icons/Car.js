import * as React from "react";
const SvgCar = ({ title, titleId, ...props }) => (
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
      d="M18 17h3a1 1 0 0 0 1-1v-3.369a1 1 0 0 0-.637-.932L17 10l-3-5H6l-2 5H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3m12 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m-8 0a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0m0 0h4"
    />
  </svg>
);
export default SvgCar;
