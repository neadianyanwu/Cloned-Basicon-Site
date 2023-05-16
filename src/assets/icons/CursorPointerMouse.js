import * as React from "react";
const SvgCursorPointerMouse = ({ title, titleId, ...props }) => (
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
      d="M6.913 19.435 3 3l16.435 3.913-4.696 3.13L21 16.305 16.304 21l-6.26-6.26-3.131 4.695Z"
    />
  </svg>
);
export default SvgCursorPointerMouse;
