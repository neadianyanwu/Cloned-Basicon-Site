import * as React from "react";
const SvgEmojiSmileyBaby = ({ title, titleId, ...props }) => (
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
      d="M15.016 10.016 15 10m-5.984.016L9 10m-1 5s1 2 4 2 4-2 4-2m-3.5-8a2.5 2.5 0 0 1 0-5M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z"
    />
  </svg>
);
export default SvgEmojiSmileyBaby;
