import * as React from "react";
const SvgMagicWand = ({ title, titleId, ...props }) => (
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
      d="M18.5 12H22M7.5 7.5 5 5m11.5 2.5L19 5M7.5 16.5 5 19m-3-7h3.5M12 2v3m0 13.5V22m10.439-.884-8.586-8.587-2.728-1.313 1.313 2.727 8.587 8.587a1 1 0 1 0 1.414-1.415Z"
    />
  </svg>
);
export default SvgMagicWand;
