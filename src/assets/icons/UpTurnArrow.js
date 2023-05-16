import * as React from "react";
const SvgUpTurnArrow = ({ title, titleId, ...props }) => (
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
      d="M13 9 9 5m0 0L5 9m4-4v11a3 3 0 0 0 3 3h7"
    />
  </svg>
);
export default SvgUpTurnArrow;
