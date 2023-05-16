import * as React from "react";
const SvgCommentCircleChatMessage = ({ title, titleId, ...props }) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12a9.966 9.966 0 0 0 2.738 6.875l-2.011 2.296a.5.5 0 0 0 .376.829H12ZM7 9h10M7 13h4"
    />
  </svg>
);
export default SvgCommentCircleChatMessage;
