import * as React from "react";
const SvgHashtagTrendingNumber = ({ title, titleId, ...props }) => (
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
      d="M4 9h16M4 15h16M10 3 7 21M17 3l-3 18"
    />
  </svg>
);
export default SvgHashtagTrendingNumber;
