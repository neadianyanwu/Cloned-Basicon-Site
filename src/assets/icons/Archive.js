import * as React from "react";
const SvgArchive = ({ title, titleId, ...props }) => (
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
      d="M2 3h20v6H2zM4 9v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9M10 13h4"
    />
  </svg>
);
export default SvgArchive;
