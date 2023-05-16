import * as React from "react";
const SvgTramTrainTransport = ({ title, titleId, ...props }) => (
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
      width={14}
      height={15}
      x={5}
      y={5}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      rx={3}
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 2h8M5 12h14M5 16h3M16 16h3M12 5V2M7 22l1-2M17 22l-1-2"
    />
  </svg>
);
export default SvgTramTrainTransport;
