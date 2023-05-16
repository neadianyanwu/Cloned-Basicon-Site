import * as React from "react";
const SvgSendMessageDm = ({ title, titleId, ...props }) => (
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
      d="M22 2 2 8.667l9.583 3.75M22 2l-6.667 20-3.75-9.583M22 2 11.583 12.417"
    />
  </svg>
);
export default SvgSendMessageDm;
