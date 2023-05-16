import * as React from "react";
const SvgMoreVertical = ({ title, titleId, ...props }) => (
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
    <circle
      cx={12}
      cy={18}
      r={1}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      transform="rotate(-90 12 18)"
    />
    <circle
      cx={12}
      cy={12}
      r={1}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      transform="rotate(-90 12 12)"
    />
    <circle
      cx={12}
      cy={6}
      r={1}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      transform="rotate(-90 12 6)"
    />
  </svg>
);
export default SvgMoreVertical;
