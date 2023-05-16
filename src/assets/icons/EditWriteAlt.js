import * as React from "react";
const SvgEditWriteAlt = ({ title, titleId, ...props }) => (
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
      d="M3 21h18M4.5 13.5l10-10a2.121 2.121 0 1 1 3 3l-10 10-4 1 1-4Z"
    />
  </svg>
);
export default SvgEditWriteAlt;
