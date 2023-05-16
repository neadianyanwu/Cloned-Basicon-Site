import * as React from "react";
const SvgShopStore = ({ title, titleId, ...props }) => (
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
      d="M4.222 6h15.556L22 9.5V13H2V9.5L4.222 6ZM10 13h10v7a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-7ZM4 13v8M19 2H5"
    />
  </svg>
);
export default SvgShopStore;
