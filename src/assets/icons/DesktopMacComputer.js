import * as React from "react";
const SvgDesktopMacComputer = ({ title, titleId, ...props }) => (
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
      d="M5 22h8m4 0h2M9 12 6 22M5 2l6.5 15.5"
    />
  </svg>
);
export default SvgDesktopMacComputer;
