import * as React from "react";
const SvgFireTrendHot = ({ title, titleId, ...props }) => (
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
      d="M7 9c4.875-3.5 4.392-5.5 4.392-7C17 6 14.833 10.5 13.5 12.5c1.6-.4 4.5-2.5 5-3.5 5 7.5-.608 12.167-3.608 13-2.4-.4-4.333-3.833-5-5.5-1.2 2.8-.833 4.833-.5 5.5C2.625 19 2.125 12.5 7 9Z"
    />
  </svg>
);
export default SvgFireTrendHot;
