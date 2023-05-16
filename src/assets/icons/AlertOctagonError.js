import * as React from "react";
const SvgAlertOctagonError = ({ title, titleId, ...props }) => (
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
      d="M16 2H8L2 8v8l6 6h8l6-6V8l-6-6ZM12 8v4M12 16.02V16"
    />
  </svg>
);
export default SvgAlertOctagonError;
