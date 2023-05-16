import * as React from "react";
const SvgDownloadAlt = ({ title, titleId, ...props }) => (
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
      d="M10 2h4a1 1 0 0 1 1 1v10l4 1-7 8-7-8 4-1V3a1 1 0 0 1 1-1Z"
    />
  </svg>
);
export default SvgDownloadAlt;
