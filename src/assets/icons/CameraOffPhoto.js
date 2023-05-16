import * as React from "react";
const SvgCameraOffPhoto = ({ title, titleId, ...props }) => (
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
      d="M21 21H4a2 2 0 0 1-2-2V8.6a2 2 0 0 1 2-2h2M9.5 3h5L17 6.6h3a2 2 0 0 1 2 2V16"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.665 9.752a4 4 0 1 0 5.458 5.748M2 2l20 20"
    />
  </svg>
);
export default SvgCameraOffPhoto;
