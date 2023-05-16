import * as React from "react";
const SvgDragHorizontal = ({ title, titleId, ...props }) => (
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
      d="M10 3v18M14 3v18M4 12h6M14 12h6M18 9l3 3-3 3M6 9l-3 3 3 3"
    />
  </svg>
);
export default SvgDragHorizontal;
