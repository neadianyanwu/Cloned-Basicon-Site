import * as React from "react";
const SvgInboxMail = ({ title, titleId, ...props }) => (
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
      d="M3.048 12h5.396l1.778 2h3.556l1.778-2h5.38M6.71 5.49l-3.43 5.788a2 2 0 0 0-.28 1.02V17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4.702a2 2 0 0 0-.28-1.02L17.29 5.49a1 1 0 0 0-.86-.49H7.57a1 1 0 0 0-.86.49Z"
    />
  </svg>
);
export default SvgInboxMail;
