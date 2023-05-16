import * as React from "react";
const SvgMoonNight = ({ title, titleId, ...props }) => (
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
      d="M9.381 2.043A10.127 10.127 0 0 0 4.98 4.634c-3.972 3.973-3.972 10.414 0 14.386 3.973 3.973 10.414 3.973 14.387 0a10.126 10.126 0 0 0 2.6-4.432M9.537 2a10.169 10.169 0 0 0 2.635 9.827A10.169 10.169 0 0 0 22 14.462"
    />
  </svg>
);
export default SvgMoonNight;
