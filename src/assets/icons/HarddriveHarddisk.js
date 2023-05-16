import * as React from "react";
const SvgHarddriveHarddisk = ({ title, titleId, ...props }) => (
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
      d="m3.19 15 3.32-8.712A2 2 0 0 1 8.377 5h7.244a2 2 0 0 1 1.869 1.288L20.81 15m-2.794 1.016L18 16M6.375 19h11.25C19.489 19 21 17.657 21 16s-1.511-3-3.375-3H6.375C4.511 13 3 14.343 3 16s1.511 3 3.375 3Z"
    />
  </svg>
);
export default SvgHarddriveHarddisk;
