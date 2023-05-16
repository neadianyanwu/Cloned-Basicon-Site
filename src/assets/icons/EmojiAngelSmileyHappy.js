import * as React from "react";
const SvgEmojiAngelSmileyHappy = ({ title, titleId, ...props }) => (
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
      d="M21.542 9c.298.947.458 1.955.458 3 0 5.523-4.477 10-10 10S2 17.523 2 12c0-1.045.16-2.053.458-3m6.558 1.016L9 10m-1 5s1 2 4 2 4-2 4-2m-.984-4.984L15 10m7-6c0 1.105-4.477 2-10 2S2 5.105 2 4s4.477-2 10-2 10 .895 10 2Z"
    />
  </svg>
);
export default SvgEmojiAngelSmileyHappy;
