import * as React from "react";
const SvgFacebookSocial = ({ title, titleId, ...props }) => (
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
      d="M15 2h3v4h-2a2 2 0 0 0-2 2v2h4l-1.044 4h-3.13v8H9.652v-8H6v-3.96h4V7a5 5 0 0 1 5-5Z"
    />
  </svg>
);
export default SvgFacebookSocial;
