import * as React from "react";
const SvgReceiptPayment = ({ title, titleId, ...props }) => (
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
      d="M18 2H6a1 1 0 0 0-1 1v19l2.5-2 2 2 2.5-2 2.5 2 2-2 2.5 2V3a1 1 0 0 0-1-1ZM9 6h6M9 10h6M9 14h1"
    />
  </svg>
);
export default SvgReceiptPayment;
