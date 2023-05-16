import * as React from "react";
const SvgCalculatorComputeMathAlt = ({ title, titleId, ...props }) => (
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
      d="M17.5 4v5M20 6.5h-5m-10.5 8 2 2m0 0 2 2m-2-2 2-2m-2 2-2 2M20 18h-5m5-3h-5M9 6.5H4"
    />
  </svg>
);
export default SvgCalculatorComputeMathAlt;
