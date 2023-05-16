import * as React from "react";
const SvgShoppingAltBag = ({ title, titleId, ...props }) => (
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
      d="M3 7h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7ZM3 7l1.963-3.49A1 1 0 0 1 5.835 3h12.33a1 1 0 0 1 .872.51L21 7"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 1 1-6 0"
    />
  </svg>
);
export default SvgShoppingAltBag;
