import * as React from "react";
const SvgCursorAltPointerMouse = ({ title, titleId, ...props }) => (
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
      d="M22 10.207 3 3l7.207 19 3.276-8.517L22 10.207Z"
    />
  </svg>
);
export default SvgCursorAltPointerMouse;
