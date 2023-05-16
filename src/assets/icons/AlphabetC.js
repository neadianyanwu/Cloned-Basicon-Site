import * as React from "react";
const SvgAlphabetC = ({ title, titleId, ...props }) => (
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
      d="M19 4.222A10.68 10.68 0 0 0 12.438 2C6.673 2 2 6.477 2 12s4.673 10 10.438 10A10.68 10.68 0 0 0 19 19.778"
    />
  </svg>
);
export default SvgAlphabetC;
