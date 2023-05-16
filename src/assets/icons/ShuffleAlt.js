import * as React from "react";
const SvgShuffleAlt = ({ title, titleId, ...props }) => (
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
      d="M21 17h-7L8 7H3m18 10-3-3m3 3-3 3m3-13h-7L8 17H3M21 7l-3-3m3 3-3 3"
    />
  </svg>
);
export default SvgShuffleAlt;
