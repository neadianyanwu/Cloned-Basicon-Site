import * as React from "react";
const SvgLink = ({ title, titleId, ...props }) => (
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
      d="m10.499 7.496 2.252-2.252a4.247 4.247 0 1 1 6.005 6.005l-2.252 2.252M6.5 11.5l-1.256 1.25a4.247 4.247 0 1 0 6.005 6.006L12.5 17.5m-3-3 5-5"
    />
  </svg>
);
export default SvgLink;
