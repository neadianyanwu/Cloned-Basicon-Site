import * as React from "react";
const SvgAlphabetB = ({ title, titleId, ...props }) => (
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
      d="M14.1 12H5m9.1 0c2.706 0 4.9-2.015 4.9-4.5S16.806 3 14.1 3H5v18h9.1c2.706 0 4.9-2.015 4.9-4.5S16.806 12 14.1 12Z"
    />
  </svg>
);
export default SvgAlphabetB;
