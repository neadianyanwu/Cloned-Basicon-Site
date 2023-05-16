import * as React from "react";
const SvgCalculatorComputeMath = ({ title, titleId, ...props }) => (
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
      d="M16 6v4m2-2h-4m-8 5 2 2m0 0 2 2m-2-2 2-2m-2 2-2 2m12-.5h-4m4-3h-4M10 8H6M5 21.5h14c1.105 0 2.5-1.395 2.5-2.5V5c0-1.105-1.395-2.5-2.5-2.5H5C3.895 2.5 2.5 3.895 2.5 5v14c0 1.105 1.395 2.5 2.5 2.5Z"
    />
  </svg>
);
export default SvgCalculatorComputeMath;
