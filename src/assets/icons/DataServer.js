import * as React from "react";
const SvgDataServer = ({ title, titleId, ...props }) => (
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
      d="M5 3.5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-17ZM5 15.5h14M5 8.5h14M9.016 12.016 9 12M9.016 5.016 9 5M9.016 19.016 9 19"
    />
  </svg>
);
export default SvgDataServer;
