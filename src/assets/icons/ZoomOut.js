import * as React from "react";
const SvgZoomOut = ({ title, titleId, ...props }) => (
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
      d="M14 11H8m13 10-4-4m2-6a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
    />
  </svg>
);
export default SvgZoomOut;
