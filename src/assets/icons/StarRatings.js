import * as React from "react";
const SvgStarRatings = ({ title, titleId, ...props }) => (
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
      d="m12 2 2.36 7.265H22l-6.18 4.49 2.36 7.266-6.18-4.49-6.18 4.49 2.36-7.265L2 9.266h7.64L12 2Z"
    />
  </svg>
);
export default SvgStarRatings;
