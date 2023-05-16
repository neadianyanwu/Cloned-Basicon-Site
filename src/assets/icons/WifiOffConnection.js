import * as React from "react";
const SvgWifiOffConnection = ({ title, titleId, ...props }) => (
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
      d="M2 7.926a18.457 18.457 0 0 1 4-1.933m16 1.933a18.447 18.447 0 0 0-11-2.9M5.172 11.705A13.568 13.568 0 0 1 10 10.023m8.828 1.682a13.58 13.58 0 0 0-2.74-1.205M9.074 15.254c.915-.323 1.9-.5 2.926-.5 1.026 0 2.011.177 2.927.5M11.918 19.146l-.016-.016M2 2l20 20"
    />
  </svg>
);
export default SvgWifiOffConnection;
