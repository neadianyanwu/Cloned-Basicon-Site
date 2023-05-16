import * as React from "react";
const SvgExpandArrows = ({ title, titleId, ...props }) => (
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
      d="m15 19-3 3m0 0-3-3m3 3v-6.5M15 5l-3-3m0 0L9 5m3-3v6.5M5 9l-3 3m0 0 3 3m-3-3h6.5M19 9l3 3m0 0-3 3m3-3h-6.5"
    />
  </svg>
);
export default SvgExpandArrows;
