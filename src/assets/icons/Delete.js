import * as React from "react";
const SvgDelete = ({ title, titleId, ...props }) => (
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
      d="m12 9 6 6m0-6-6 6M8.364 5 2 12l6.364 7H20a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H8.364Z"
    />
  </svg>
);
export default SvgDelete;
