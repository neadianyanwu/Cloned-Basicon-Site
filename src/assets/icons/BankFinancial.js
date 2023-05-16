import * as React from "react";
const SvgBankFinancial = ({ title, titleId, ...props }) => (
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
      d="M10 14v3M14 14v3M5 10v11M19 10v11M3 21h18M3 10h18M19 7l-7-4M5 7l7-4"
    />
  </svg>
);
export default SvgBankFinancial;
