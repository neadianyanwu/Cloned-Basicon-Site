import * as React from "react";
const SvgMaximizeExpand = ({ title, titleId, ...props }) => (
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
      d="m3 21 7.5-7.5M3 21v-5.6M3 21h5.6M21.071 3 13.5 10.5M21.071 3v5.657m0-5.657h-5.657"
    />
  </svg>
);
export default SvgMaximizeExpand;
