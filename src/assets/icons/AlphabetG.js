import * as React from "react";
const SvgAlphabetG = ({ title, titleId, ...props }) => (
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
      d="M13 13h6v3a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6h2a6.002 6.002 0 0 1 5.917 5"
    />
  </svg>
);
export default SvgAlphabetG;
