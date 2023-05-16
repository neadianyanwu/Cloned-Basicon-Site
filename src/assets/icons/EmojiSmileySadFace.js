import * as React from "react";
const SvgEmojiSmileySadFace = ({ title, titleId, ...props }) => (
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
      d="M15.016 10.016 15 10m-5.984.016L9 10m6.579 6.425C15.04 15.834 13.937 15 12 15c-1.937 0-3.04.834-3.579 1.425M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z"
    />
  </svg>
);
export default SvgEmojiSmileySadFace;
