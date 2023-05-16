import * as React from "react";
const SvgCone = ({ title, titleId, ...props }) => (
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
      d="M3 21h18M7 15h10M9 9h6m4 12L13.316 3.949a1.387 1.387 0 0 0-2.632 0L5 21"
    />
  </svg>
);
export default SvgCone;
