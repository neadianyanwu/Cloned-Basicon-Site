import * as React from "react";
const SvgThumbsDown = ({ title, titleId, ...props }) => (
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
      d="m16.916 13.337-3.255 7.424c-.451 1.028-1.66 1.559-2.642 1.033-1.527-.817-1.22-1.584-1.22-6.396H4.033c-1.246 0-2.2-1.126-2.01-2.374l1.408-9.276A2.042 2.042 0 0 1 5.442 2h11.474m0 11.337V2m0 11.337h3.05c1.123 0 2.034-.923 2.034-2.061V4.06C22 2.923 21.09 2 19.966 2h-3.05"
    />
  </svg>
);
export default SvgThumbsDown;
