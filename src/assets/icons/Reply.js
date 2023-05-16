import * as React from "react";
const SvgReply = ({ title, titleId, ...props }) => (
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
      d="M10 9.215V4.929L2.929 12 10 19.071V14.24m0-5.016A9 9 0 0 1 20.648 20.5 9.004 9.004 0 0 0 10 14.223"
    />
  </svg>
);
export default SvgReply;
