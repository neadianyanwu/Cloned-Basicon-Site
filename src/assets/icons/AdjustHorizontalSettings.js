import * as React from "react";
const SvgAdjustHorizontalSettings = ({ title, titleId, ...props }) => (
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
      d="M2 8h11m9 0h-3M22 16H11m-9 0h3"
    />
    <circle
      cx={16}
      cy={8}
      r={3}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <circle
      r={3}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      transform="matrix(-1 0 0 1 8 16)"
    />
  </svg>
);
export default SvgAdjustHorizontalSettings;
