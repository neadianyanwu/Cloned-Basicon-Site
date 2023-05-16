import * as React from "react";
const SvgEnterArrowLeft = ({ title, titleId, ...props }) => (
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
      d="m8 11-4 4m0 0 4 4m-4-4h13a3 3 0 0 0 3-3V5"
    />
  </svg>
);
export default SvgEnterArrowLeft;
