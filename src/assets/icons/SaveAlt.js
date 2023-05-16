import * as React from "react";
const SvgSaveAlt = ({ title, titleId, ...props }) => (
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
      d="M5 21h14a2 2 0 0 0 2-2V8.828a2 2 0 0 0-.586-1.414l-3.828-3.828A2 2 0 0 0 15.172 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 3v5h8V3M7 21v-6h10v6"
    />
  </svg>
);
export default SvgSaveAlt;
