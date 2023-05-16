import * as React from "react";
const SvgAlertError = ({ title, titleId, ...props }) => (
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
      d="m2.202 18.47 7.962-14.465c.738-1.34 2.934-1.34 3.672 0l7.962 14.465c.646 1.173-.338 2.53-1.835 2.53H4.037c-1.497 0-2.481-1.357-1.835-2.53ZM12 9v4M12 17.02V17"
    />
  </svg>
);
export default SvgAlertError;
