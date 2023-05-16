import * as React from "react";
const SvgHeadphoneMusic = ({ title, titleId, ...props }) => (
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
      d="M2 14.5V21a1 1 0 0 0 1 1h3.714a1 1 0 0 0 1-1v-5.5a1 1 0 0 0-1-1H2Zm0 0V12C2 6.477 6.477 2 12 2v0c5.523 0 10 4.477 10 10v2.5m0 0V21a1 1 0 0 1-1 1h-3.714a1 1 0 0 1-1-1v-5.5a1 1 0 0 1 1-1H22Z"
    />
  </svg>
);
export default SvgHeadphoneMusic;
