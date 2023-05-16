import * as React from "react";
const SvgPrint = ({ title, titleId, ...props }) => (
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
      d="M18 16h3a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 12h12v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8ZM6 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4H6V4Z"
    />
  </svg>
);
export default SvgPrint;
