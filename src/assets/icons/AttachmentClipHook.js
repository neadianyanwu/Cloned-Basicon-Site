import * as React from "react";
const SvgAttachmentClipHook = ({ title, titleId, ...props }) => (
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
      d="m21 11.027-8.155 8.262a5.714 5.714 0 0 1-8.156 0c-2.252-2.282-2.252-5.98 0-8.263l6.796-6.885a3.81 3.81 0 0 1 5.437 0 3.931 3.931 0 0 1 0 5.508l-6.796 6.886c-.75.76-1.968.76-2.718 0a1.966 1.966 0 0 1 0-2.754l6.796-6.886"
    />
  </svg>
);
export default SvgAttachmentClipHook;
