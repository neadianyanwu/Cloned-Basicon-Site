import * as React from "react";
const SvgGlobeWorldEarth = ({ title, titleId, ...props }) => (
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
    <circle
      cx={12}
      cy={12}
      r={10}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12h19M12 2.202c2.474 2.525 4 5.983 4 9.798 0 3.815-1.526 7.273-4 9.798"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2.202A13.955 13.955 0 0 0 8 12c0 3.815 1.526 7.273 4 9.798"
    />
  </svg>
);
export default SvgGlobeWorldEarth;
