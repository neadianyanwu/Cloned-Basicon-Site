import * as React from "react";
const SvgSearch = ({ title, titleId, ...props }) => (
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
      d="m17 17 5 5m-2.5-11.25a8.75 8.75 0 1 1-17.5 0 8.75 8.75 0 0 1 17.5 0Z"
    />
  </svg>
);
export default SvgSearch;
