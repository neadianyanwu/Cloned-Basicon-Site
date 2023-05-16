import * as React from "react";
const SvgLockPrivacy = ({ title, titleId, ...props }) => (
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
    <rect
      width={18}
      height={11}
      x={3}
      y={11}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      rx={2}
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 11V7a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v4"
    />
  </svg>
);
export default SvgLockPrivacy;
