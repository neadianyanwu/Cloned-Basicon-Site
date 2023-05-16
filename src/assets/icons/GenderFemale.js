import * as React from "react";
const SvgGenderFemale = ({ title, titleId, ...props }) => (
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
      d="M15 15.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0ZM15 2h7v7M13.5 10.5 22 2"
    />
  </svg>
);
export default SvgGenderFemale;
