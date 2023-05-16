import * as React from "react";
const SvgAlphabetS = ({ title, titleId, ...props }) => (
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
      d="M11.5 12h3a4.5 4.5 0 1 1 0 9H5m7.5-9h-3a4.5 4.5 0 0 1 0-9H19"
    />
  </svg>
);
export default SvgAlphabetS;
