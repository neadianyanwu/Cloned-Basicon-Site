import * as React from "react";
const SvgHomeHouse = ({ title, titleId, ...props }) => (
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
      d="M3 10.25V20a1 1 0 0 0 1 1h4.429a1 1 0 0 0 1-1v-6.714h5.142V20a1 1 0 0 0 1 1H20a1 1 0 0 0 1-1v-9.75a1 1 0 0 0-.4-.8L12 3 3.4 9.45a1 1 0 0 0-.4.8Z"
    />
  </svg>
);
export default SvgHomeHouse;
