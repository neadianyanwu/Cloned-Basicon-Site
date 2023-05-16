import * as React from "react";
const SvgBasicons = ({ title, titleId, ...props }) => (
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
      stroke="#080808"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.2 12H8m5.2 0c1.546 0 2.8-1.12 2.8-2.5S14.746 7 13.2 7H8v10h5.2c1.546 0 2.8-1.12 2.8-2.5S14.746 12 13.2 12Z"
    />
    <rect
      width={18}
      height={18}
      x={3}
      y={3}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      rx={2}
    />
  </svg>
);
export default SvgBasicons;
