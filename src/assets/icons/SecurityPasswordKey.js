import * as React from "react";
const SvgSecurityPasswordKey = ({ title, titleId, ...props }) => (
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
      d="M13.015 13.656a5.001 5.001 0 1 0-2.828-2.829m2.81 2.847-6.169 6.168-2.592-.235L4 17.014l6.168-6.168m5.381-2.53v-.023"
    />
  </svg>
);
export default SvgSecurityPasswordKey;
