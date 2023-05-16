import * as React from "react";
const SvgCodeTechDev = ({ title, titleId, ...props }) => (
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
      d="m7 8-4 4 4 4M17 8l4 4-4 4M14 4 9.859 19.455"
    />
  </svg>
);
export default SvgCodeTechDev;
