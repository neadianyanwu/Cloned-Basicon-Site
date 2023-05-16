import * as React from "react";
const SvgChatbot = ({ title, titleId, ...props }) => (
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
      d="M3 5v15.793a.5.5 0 0 0 .854.353l3.853-3.853A1 1 0 0 1 8.414 17H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12c-.8.622-1.85 1-3 1s-2.2-.378-3-1M9 8.02V8M15 8.02V8"
    />
  </svg>
);
export default SvgChatbot;
