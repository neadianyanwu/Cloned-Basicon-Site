import * as React from "react";
const SvgCoffeeTeaAlt = ({ title, titleId, ...props }) => (
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
      d="M3 3h15v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V3ZM18 4h.91A3.09 3.09 0 0 1 22 7.09v0a3.09 3.09 0 0 1-1.708 2.764L18 11M2 22h20"
    />
  </svg>
);
export default SvgCoffeeTeaAlt;
