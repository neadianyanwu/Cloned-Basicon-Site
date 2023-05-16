import * as React from "react";
const SvgBikerCycle = ({ title, titleId, ...props }) => (
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
      d="M12 20v-5l-3.5-3.5 4-4L16 11h4.5M20.414 3.586a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828ZM22 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);
export default SvgBikerCycle;
