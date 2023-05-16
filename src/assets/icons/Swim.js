import * as React from "react";
const SvgSwim = ({ title, titleId, ...props }) => (
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
      strokeWidth={2}
      d="M1 19h1.544c.764 0 1.489-.296 1.978-.808l.603-.63c.716-.75 2.034-.75 2.75 0 .716.748 2.034.748 2.75 0 .716-.75 2.034-.75 2.75 0 .716.748 2.034.748 2.75 0 .716-.75 2.034-.75 2.75 0l.603.63c.49.512 1.214.808 1.978.808H23"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.414 5.586a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828ZM4 7h6l7.5 6.5M13 10l-3.5 3.5"
    />
  </svg>
);
export default SvgSwim;
