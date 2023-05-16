import * as React from "react";
const SvgMapLocation = ({ title, titleId, ...props }) => (
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
      d="M3 6.6 9 3v14.4L3 21V6.6ZM15 6.6 21 3v14.4L15 21V6.6ZM15 6.6 9 3v14.4l6 3.6V6.6Z"
    />
  </svg>
);
export default SvgMapLocation;
