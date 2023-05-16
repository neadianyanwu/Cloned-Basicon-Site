import * as React from "react";
const SvgArrowBottomRight = ({ title, titleId, ...props }) => (
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
      d="m5.636 5.636 12.728 12.728m0 0h-9.9m9.9 0v-9.9"
    />
  </svg>
);
export default SvgArrowBottomRight;
