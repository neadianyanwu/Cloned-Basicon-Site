import * as React from "react";
const SvgAccountUserPersonRound = ({ title, titleId, ...props }) => (
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
      d="M5.76 19.825A7 7 0 0 1 12 16a7 7 0 0 1 6.213 3.772m-3.88-9.328a2.444 2.444 0 1 1-4.889 0 2.444 2.444 0 0 1 4.89 0ZM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z"
    />
  </svg>
);
export default SvgAccountUserPersonRound;
