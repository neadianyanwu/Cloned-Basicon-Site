import * as React from "react";
const SvgBedSingleHotel = ({ title, titleId, ...props }) => (
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
      d="M6 9h4M3 3v18m18-4v4m0-4H3m18 0v-3a2 2 0 0 0-2-2H3"
    />
  </svg>
);
export default SvgBedSingleHotel;
