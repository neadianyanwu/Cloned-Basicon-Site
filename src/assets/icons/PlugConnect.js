import * as React from "react";
const SvgPlugConnect = ({ title, titleId, ...props }) => (
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
      d="M6 7h12v5a6 6 0 0 1-6 6v0a6 6 0 0 1-6-6V7ZM15 2v5M12 18v4M9 2v5"
    />
  </svg>
);
export default SvgPlugConnect;
