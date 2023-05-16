import * as React from "react";
const SvgArrowDropdownCaretSortSelectArrow = ({ title, titleId, ...props }) => (
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
      d="m16 10-4 4-4-4"
    />
  </svg>
);
export default SvgArrowDropdownCaretSortSelectArrow;
