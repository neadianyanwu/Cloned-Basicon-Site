import * as React from "react";
const SvgSparkleStar = ({ title, titleId, ...props }) => (
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
      d="m11 4 2.43 6.57L20 13l-6.57 2.43L11 22l-2.43-6.57L2 13l6.57-2.43L11 4ZM16.5 2l.405 1.095L18 3.5l-1.095.405L16.5 5l-.405-1.095L15 3.5l1.095-.405L16.5 2ZM21 7l.27.73L22 8l-.73.27L21 9l-.27-.73L20 8l.73-.27L21 7Z"
    />
  </svg>
);
export default SvgSparkleStar;
