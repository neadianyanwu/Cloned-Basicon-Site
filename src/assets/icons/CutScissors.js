import * as React from "react";
const SvgCutScissors = ({ title, titleId, ...props }) => (
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
      d="M19.722 8.696a3 3 0 1 0-3-5.196 3 3 0 0 0 3 5.196Zm0 0L3 18m16.723-2.433a3 3 0 1 1-3 5.196 3 3 0 0 1 3-5.196Zm0 0L3 6.264"
    />
  </svg>
);
export default SvgCutScissors;
