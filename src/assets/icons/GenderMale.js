import * as React from "react";
const SvgGenderMale = ({ title, titleId, ...props }) => (
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
      d="M18.5 8.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0ZM7.5 19h9M12 22v-7"
    />
  </svg>
);
export default SvgGenderMale;
