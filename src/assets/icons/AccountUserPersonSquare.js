import * as React from "react";
const SvgAccountUserPersonSquare = ({ title, titleId, ...props }) => (
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
      d="M5.76 19.825A7 7 0 0 1 12 16a7 7 0 0 1 6.213 3.772m-3.88-9.328a2.444 2.444 0 1 1-4.889 0 2.444 2.444 0 0 1 4.89 0ZM12 21c-3.75 0-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 17.625 3 15.749 3 12c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 3.955C6.375 3 8.251 3 12 3c3.75 0 5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 6.375 21 8.251 21 12c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 21 15.749 21 12 21Z"
    />
  </svg>
);
export default SvgAccountUserPersonSquare;
