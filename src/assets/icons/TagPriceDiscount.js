import * as React from "react";
const SvgTagPriceDiscount = ({ title, titleId, ...props }) => (
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
      d="M3 12.393V3h9.393l8.051 8.051a1.898 1.898 0 0 1 0 2.684l-6.71 6.71a1.898 1.898 0 0 1-2.683 0L3 12.392ZM7.016 7.016 7 7"
    />
  </svg>
);
export default SvgTagPriceDiscount;
