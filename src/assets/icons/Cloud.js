import * as React from "react";
const SvgCloud = ({ title, titleId, ...props }) => (
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
      d="M6.341 9A6 6 0 0 1 18 11a4 4 0 0 1 0 8H7a5 5 0 0 1-.68-9.954"
    />
  </svg>
);
export default SvgCloud;
