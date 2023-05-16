import * as React from "react";
const SvgFuelGasStation = ({ title, titleId, ...props }) => (
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
      d="M4 5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v16H4V5ZM13 11.5h5V19a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2V9m-4.5-7 3 2.667m0 0L22 6v3m-1.5-4.333V9H22M15 21H2M10 8H7"
    />
  </svg>
);
export default SvgFuelGasStation;
