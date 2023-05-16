import * as React from "react";
const SvgBedDoubleHotel = ({ title, titleId, ...props }) => (
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
      d="M6 9h4M14 9h4M21 17v4m0-4H3m18 0v-3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v7M3 9V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v5"
    />
  </svg>
);
export default SvgBedDoubleHotel;
