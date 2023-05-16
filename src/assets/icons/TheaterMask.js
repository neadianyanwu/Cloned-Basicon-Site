import * as React from "react";
const SvgTheaterMask = ({ title, titleId, ...props }) => (
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
      d="M16 6V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8a7 7 0 0 0 6.5 6.982"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a7 7 0 1 1-14 0V7ZM12.016 11.016 12 11M18.016 11.016 18 11"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.236 17c-.55.614-1.348 1-2.236 1a2.994 2.994 0 0 1-2.313-1.09"
    />
  </svg>
);
export default SvgTheaterMask;
