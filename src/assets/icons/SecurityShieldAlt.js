import * as React from "react";
const SvgSecurityShieldAlt = ({ title, titleId, ...props }) => (
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
      d="M3 13V4.222l1.944-.15A16 16 0 0 0 9.867 2.89L12 2l2.133.889a16 16 0 0 0 4.923 1.183l1.944.15V13a9 9 0 1 1-18 0Z"
    />
  </svg>
);
export default SvgSecurityShieldAlt;
