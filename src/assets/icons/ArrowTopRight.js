import * as React from "react";
const SvgArrowTopRight = ({ title, titleId, ...props }) => (
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
      d="M5.636 18.364 18.364 5.636m0 0h-9.9m9.9 0v9.9"
    />
  </svg>
);
export default SvgArrowTopRight;
