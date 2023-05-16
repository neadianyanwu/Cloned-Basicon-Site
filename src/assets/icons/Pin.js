import * as React from "react";
const SvgPin = ({ title, titleId, ...props }) => (
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
      d="M15.054 16.803 20.858 6.75a1.055 1.055 0 0 0-.386-1.441l-5.484-3.166a1.055 1.055 0 0 0-1.441.386L7.742 12.582m7.312 4.221-3.656-2.11m3.656 2.11 2.742 1.583M7.742 12.582 5 10.999m2.742 1.583 3.656 2.11m0 0-4.222 7.312"
    />
  </svg>
);
export default SvgPin;
