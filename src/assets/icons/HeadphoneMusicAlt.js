import * as React from "react";
const SvgHeadphoneMusicAlt = ({ title, titleId, ...props }) => (
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
      d="M6.714 22H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h3.714a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1ZM17.286 22H21a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-3.714a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1ZM5 14V9a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v5"
    />
  </svg>
);
export default SvgHeadphoneMusicAlt;
