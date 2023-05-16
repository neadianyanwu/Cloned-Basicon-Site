import * as React from "react";
const SvgMusicNote = ({ title, titleId, ...props }) => (
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
      d="M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0V5.835a1 1 0 0 1 .821-.984l9.59-1.744A.5.5 0 0 1 20 3.6V16m0 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);
export default SvgMusicNote;
