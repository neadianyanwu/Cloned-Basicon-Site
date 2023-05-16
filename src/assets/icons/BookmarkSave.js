import * as React from "react";
const SvgBookmarkSave = ({ title, titleId, ...props }) => (
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
      d="M5 22V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v19l-7-6.111L5 22Z"
    />
  </svg>
);
export default SvgBookmarkSave;
