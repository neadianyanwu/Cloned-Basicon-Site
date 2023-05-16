import * as React from "react";
const SvgRocketLaunch = ({ title, titleId, ...props }) => (
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
      d="M7.5 11H2l4-4h7l2-2c1.125-1.125 2.409-2 4-2h2v2c0 1.5-1 3-2 4l-2 2v7l-4 4v-5.5M11.95 12 7 16.95"
    />
  </svg>
);
export default SvgRocketLaunch;
