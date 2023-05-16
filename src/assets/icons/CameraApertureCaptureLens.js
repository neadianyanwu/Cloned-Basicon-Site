import * as React from "react";
const SvgCameraApertureCaptureLens = ({ title, titleId, ...props }) => (
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
      d="M9.5 16 4.33 5.66l-.022-.05M14.5 8l5.182 10.364M12.5 2l-5 10m9 0-5 10m9.668-14H9.5m5 8H2.832M4.308 5.61A9.96 9.96 0 0 0 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2a9.98 9.98 0 0 0-7.692 3.61Z"
    />
  </svg>
);
export default SvgCameraApertureCaptureLens;
