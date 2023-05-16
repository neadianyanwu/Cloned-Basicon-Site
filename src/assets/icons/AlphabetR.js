import * as React from "react";
const SvgAlphabetR = ({ title, titleId, ...props }) => (
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
      d="M5 12V3h9.5a4.5 4.5 0 1 1 0 9H5Zm0 0v9m6-9 8 9"
    />
  </svg>
);
export default SvgAlphabetR;
