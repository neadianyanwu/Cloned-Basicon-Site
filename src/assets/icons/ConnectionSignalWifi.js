import * as React from "react";
const SvgConnectionSignalWifi = ({ title, titleId, ...props }) => (
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
      d="M18 3.708A7.97 7.97 0 0 1 20 9a7.97 7.97 0 0 1-2 5.291M6 3.708A7.97 7.97 0 0 0 4 9a7.97 7.97 0 0 0 2 5.291M15 6.354c.622.705 1 1.632 1 2.646s-.378 1.94-1 2.646M9 6.354C8.378 7.06 8 7.986 8 9s.378 1.94 1 2.646M12 9v11"
    />
  </svg>
);
export default SvgConnectionSignalWifi;
