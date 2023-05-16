import * as React from "react";
const SvgPaperFileText = ({ title, titleId, ...props }) => (
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
      d="M6 22h12a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.828-5.828A2 2 0 0 0 12.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 2.5V9h6M8 17h7M8 13h7M8 9h1"
    />
  </svg>
);
export default SvgPaperFileText;
