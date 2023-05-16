import * as React from "react";
const SvgShuffle = ({ title, titleId, ...props }) => (
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
      d="m4 4 5.5 5.5m5 5L21 21m0 0h-5m5 0v-5M4 20 21 3"
    />
  </svg>
);
export default SvgShuffle;
