import * as React from "react";
const SvgNotificationOffBellAlarm = ({ title, titleId, ...props }) => (
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
      d="M16.744 17H3l.673-1.06a12.094 12.094 0 0 0 1.88-6.482V8.4c0-.785.138-1.537.392-2.232M8.462 3a6.17 6.17 0 0 1 3.373-1c3.47 0 6.283 2.865 6.283 6.4v1.058c0 1.565.302 3.108.882 4.542M11 20.889v0a1.345 1.345 0 0 0 2 0v0M2 2l20 20"
    />
  </svg>
);
export default SvgNotificationOffBellAlarm;
