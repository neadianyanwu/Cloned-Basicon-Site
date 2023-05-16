import * as React from "react";
const SvgCameraPhoto = ({ title, titleId, ...props }) => (
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
      d="M4 21h16a2 2 0 0 0 2-2V8.6a2 2 0 0 0-2-2h-3L14.5 3h-5L7 6.6H4a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2Z"
    />
    <circle
      cx={12}
      cy={13}
      r={4}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
export default SvgCameraPhoto;
