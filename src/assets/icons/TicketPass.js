import * as React from "react";
const SvgTicketPass = ({ title, titleId, ...props }) => (
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
      d="M21 5H3a1 1 0 0 0-1 1v3.5h.6a2.5 2.5 0 0 1 0 5H2V18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-3.5h-.1a2.5 2.5 0 0 1 0-5h.1V6a1 1 0 0 0-1-1Z"
    />
    <path
      stroke="#000"
      strokeDasharray="3 3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 5v14"
    />
  </svg>
);
export default SvgTicketPass;
