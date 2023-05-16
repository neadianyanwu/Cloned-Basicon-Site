import * as React from "react";
const SvgBadgeVerified = ({ title, titleId, ...props }) => (
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
      d="m9 12 2 2 4-4M7.946 4.25l-1.694-.013a2 2 0 0 0-2.015 2.015l.013 1.694a2 2 0 0 1-.597 1.44l-1.207 1.19a2 2 0 0 0 0 2.849l1.207 1.189a2 2 0 0 1 .597 1.44l-.013 1.694a2 2 0 0 0 2.015 2.015l1.694-.013a2 2 0 0 1 1.44.597l1.19 1.207a2 2 0 0 0 2.849 0l1.189-1.207a2 2 0 0 1 1.44-.597l1.694.013a2 2 0 0 0 2.015-2.015l-.013-1.694a2 2 0 0 1 .597-1.44l1.207-1.19a2 2 0 0 0 0-2.849l-1.207-1.189a2 2 0 0 1-.597-1.44l.013-1.694a2 2 0 0 0-2.015-2.015l-1.694.013a2 2 0 0 1-1.44-.597l-1.19-1.207a2 2 0 0 0-2.849 0L9.386 3.653a2 2 0 0 1-1.44.597Z"
    />
  </svg>
);
export default SvgBadgeVerified;
