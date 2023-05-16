import * as React from "react";
const SvgCrosshairTargetCenter = ({ title, titleId, ...props }) => (
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
      d="M22 12c0 5.523-4.477 10-10 10m10-10c0-5.523-4.477-10-10-10m10 10h-6m-4 10C6.477 22 2 17.523 2 12m10 10v-6M2 12C2 6.477 6.477 2 12 2M2 12h6m4-10v6"
    />
  </svg>
);
export default SvgCrosshairTargetCenter;
