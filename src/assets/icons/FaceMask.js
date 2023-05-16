import * as React from "react";
const SvgFaceMask = ({ title, titleId, ...props }) => (
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
      d="M19 9h1a3 3 0 1 1 0 6h-1M5 9H4a3 3 0 1 0 0 6h1m11-4.5H8m8 3H8M6 17h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1Z"
    />
  </svg>
);
export default SvgFaceMask;
