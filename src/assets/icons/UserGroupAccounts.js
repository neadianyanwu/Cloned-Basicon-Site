import * as React from "react";
const SvgUserGroupAccounts = ({ title, titleId, ...props }) => (
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
      cx={9}
      cy={7}
      r={4}
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
      d="M2 21v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M16 3a4 4 0 0 1 0 7.75M19 15h1a2 2 0 0 1 2 2v4"
    />
  </svg>
);
export default SvgUserGroupAccounts;
