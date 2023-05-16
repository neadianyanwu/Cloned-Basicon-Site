import * as React from "react";
const SvgCompressArrowsConverge = ({ title, titleId, ...props }) => (
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
      d="m15 6-3 3m0 0L9 6m3 3V2m3 16-3-3m0 0-3 3m3-3v7M6 9l3 3m0 0-3 3m3-3H2m16-3-3 3m0 0 3 3m-3-3h7"
    />
  </svg>
);
export default SvgCompressArrowsConverge;
