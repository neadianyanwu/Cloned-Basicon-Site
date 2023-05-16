import * as React from "react";
const SvgFocusCameraPlusAdd = ({ title, titleId, ...props }) => (
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
      d="M21 9V5a2 2 0 0 0-2-2h-4m6 12v4a2 2 0 0 1-2 2h-4M3 15v4a2 2 0 0 0 2 2h4M3 9V5a2 2 0 0 1 2-2h4m3 6v3m0 0v3m0-3H9m3 0h3"
    />
  </svg>
);
export default SvgFocusCameraPlusAdd;
