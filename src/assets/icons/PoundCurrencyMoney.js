import * as React from "react";
const SvgPoundCurrencyMoney = ({ title, titleId, ...props }) => (
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
      d="M3 21h1.21A3.79 3.79 0 0 0 8 17.21V9.5A6.5 6.5 0 0 1 14.5 3h.5a5.994 5.994 0 0 1 5 2.682M4 21h17M3 13h13"
    />
  </svg>
);
export default SvgPoundCurrencyMoney;
