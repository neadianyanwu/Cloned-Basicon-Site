import * as React from "react";
const SvgLinkedinSocial = ({ title, titleId, ...props }) => (
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
    <circle
      cx={4}
      cy={4}
      r={2}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 9h4v13H2zM10 22h4v-7a2 2 0 1 1 4 0v7h4v-7a6 6 0 0 0-12 0v7Z"
    />
  </svg>
);
export default SvgLinkedinSocial;
