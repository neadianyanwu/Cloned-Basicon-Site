import * as React from "react";
const SvgShareAlt = ({ title, titleId, ...props }) => (
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
      d="M13.929 9.215V4.929L21 12l-7.071 7.071V14.24m0-5.016A9 9 0 0 0 3.28 20.5a9.004 9.004 0 0 1 10.648-6.277"
    />
  </svg>
);
export default SvgShareAlt;
