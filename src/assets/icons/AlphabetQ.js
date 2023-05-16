import * as React from "react";
const SvgAlphabetQ = ({ title, titleId, ...props }) => (
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
      d="m13 13 8.142 8.142M20 11.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z"
    />
  </svg>
);
export default SvgAlphabetQ;
