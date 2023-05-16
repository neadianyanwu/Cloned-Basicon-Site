import * as React from "react";
const SvgWifiConnection = ({ title, titleId, ...props }) => (
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
      d="M2 8a18.12 18.12 0 0 1 10-3 18.12 18.12 0 0 1 10 3M5 11.877c2.06-1.272 4.45-2 7-2s4.94.728 7 2M9.074 15.455a6.858 6.858 0 0 1 3-.7c1.052 0 2.061.247 3 .7M11.918 19.146l-.016-.016"
    />
  </svg>
);
export default SvgWifiConnection;
