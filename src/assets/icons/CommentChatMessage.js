import * as React from "react";
const SvgCommentChatMessage = ({ title, titleId, ...props }) => (
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
      d="M7 7h8M7 11h4M19 3H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3l3.646 3.646a.5.5 0 0 0 .708 0L16 17h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"
    />
  </svg>
);
export default SvgCommentChatMessage;
