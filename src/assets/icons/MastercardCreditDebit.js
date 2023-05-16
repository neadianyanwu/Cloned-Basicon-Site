import * as React from "react";
const SvgMastercardCreditDebit = ({ title, titleId, ...props }) => (
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
    <rect
      width={18}
      height={14}
      x={3}
      y={5}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      rx={2}
    />
    <circle
      cx={15}
      cy={13}
      r={2}
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
      d="M13.323 11.5a2 2 0 1 0 0 3"
    />
  </svg>
);
export default SvgMastercardCreditDebit;
