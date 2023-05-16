import * as React from "react";
const SvgGift = ({ title, titleId, ...props }) => (
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
      d="M4 13h16v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7ZM2 9h20v4H2V9ZM12 5v17M12 5.5A3.5 3.5 0 1 0 8.5 9M15.5 9A3.5 3.5 0 1 0 12 5.5"
    />
  </svg>
);
export default SvgGift;
