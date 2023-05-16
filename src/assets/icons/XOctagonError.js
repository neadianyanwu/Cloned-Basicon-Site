import * as React from "react";
const SvgXOctagonError = ({ title, titleId, ...props }) => (
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
      d="m9 9 6 6m0-6-6 6M8 2h8l6 6v8l-6 6H8l-6-6V8l6-6Z"
    />
  </svg>
);
export default SvgXOctagonError;
