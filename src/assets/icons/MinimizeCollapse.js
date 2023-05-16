import * as React from "react";
const SvgMinimizeCollapse = ({ title, titleId, ...props }) => (
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
      d="M10.5 13.5 3 21m7.5-7.5v5.6m0-5.6H4.9M13.5 10.5 21 3m-7.5 7.5V4.843m0 5.657h5.657"
    />
  </svg>
);
export default SvgMinimizeCollapse;
