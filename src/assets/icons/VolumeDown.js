import * as React from "react";
const SvgVolumeDown = ({ title, titleId, ...props }) => (
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
      d="M9.5 8H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5.5l6.5 5V3L9.5 8ZM20 9.354c.622.705 1 1.632 1 2.646s-.378 1.94-1 2.646"
    />
  </svg>
);
export default SvgVolumeDown;
