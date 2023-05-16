import * as React from "react";
const SvgLightningEnergy = ({ title, titleId, ...props }) => (
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
      d="m6 12 2-9h7.5L14 9h4L9 21l1.5-9H6Z"
    />
  </svg>
);
export default SvgLightningEnergy;
