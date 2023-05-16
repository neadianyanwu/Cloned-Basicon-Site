import * as React from "react";
const SvgVolumeMute = ({ title, titleId, ...props }) => (
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
      d="m22 10-2 2m0 0-2 2m2-2-2-2m2 2 2 2M8.5 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5.5l6.5 5V3L8.5 8Z"
    />
  </svg>
);
export default SvgVolumeMute;
