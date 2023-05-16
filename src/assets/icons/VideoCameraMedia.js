import * as React from "react";
const SvgVideoCameraMedia = ({ title, titleId, ...props }) => (
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
      d="M16.118 12 22 7.333v9.334L16.118 12Zm0 0V7.333A2.343 2.343 0 0 0 13.765 5H4.353A2.343 2.343 0 0 0 2 7.333v9.334A2.343 2.343 0 0 0 4.353 19h9.412c1.3 0 2.353-1.045 2.353-2.333V12Z"
    />
  </svg>
);
export default SvgVideoCameraMedia;
