import * as React from "react";
const SvgCoffeeTea = ({ title, titleId, ...props }) => (
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
      d="M2 9h16v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9ZM18 11h.91A3.09 3.09 0 0 1 22 14.09v0a3.09 3.09 0 0 1-1.708 2.764L18 18M6 2v3M10 2v3M14 2v3"
    />
  </svg>
);
export default SvgCoffeeTea;
