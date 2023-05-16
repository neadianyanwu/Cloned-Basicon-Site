import * as React from "react";
const SvgShoppingCart = ({ title, titleId, ...props }) => (
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
      cx={10}
      cy={20}
      r={1}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <circle
      cx={18}
      cy={20}
      r={1}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 3h3.5a2319506.782 2319506.782 0 0 0 2.358 10.443A1.998 1.998 0 0 0 9.808 15h8.588a2 2 0 0 0 1.952-1.566L22 6M22 6H6.5"
    />
  </svg>
);
export default SvgShoppingCart;
