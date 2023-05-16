import * as React from "react";
const SvgEuroCurrency = ({ title, titleId, ...props }) => (
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
      d="M19 2.832A9.966 9.966 0 0 0 15 2C9.477 2 5 6.477 5 12s4.477 10 10 10a9.966 9.966 0 0 0 4-.832M2 10h13M2 14h13"
    />
  </svg>
);
export default SvgEuroCurrency;
