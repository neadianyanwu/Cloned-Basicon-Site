import * as React from "react";
const SvgAlphabetD = ({ title, titleId, ...props }) => (
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
      d="M4 3h8c4.418 0 8 4.03 8 9s-3.582 9-8 9H4V3Z"
    />
  </svg>
);
export default SvgAlphabetD;
