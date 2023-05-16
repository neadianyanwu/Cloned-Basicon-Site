import * as React from "react";
const SvgUsb = ({ title, titleId, ...props }) => (
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
      d="M7 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6H7V5ZM19 21v-9a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v9M13 8h-2"
    />
  </svg>
);
export default SvgUsb;
