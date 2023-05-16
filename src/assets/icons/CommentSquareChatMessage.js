import * as React from "react";
const SvgCommentSquareChatMessage = ({ title, titleId, ...props }) => (
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
      d="M7 7h10M7 11h4M3 5v15.793a.5.5 0 0 0 .854.353l3.853-3.853A1 1 0 0 1 8.414 17H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"
    />
  </svg>
);
export default SvgCommentSquareChatMessage;
