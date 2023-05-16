import * as React from "react";
const SvgBluetoothOff = ({ title, titleId, ...props }) => (
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
      d="M12 3v4.5M12 21v-9.5M12 3l7 5M19 8l-3 1.714M5 16l7-4M3 6l19 11M19 16l-7 5"
    />
  </svg>
);
export default SvgBluetoothOff;
