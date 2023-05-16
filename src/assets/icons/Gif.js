import * as React from "react";
const SvgGif = ({ title, titleId, ...props }) => (
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
      d="M13 7v10m4 0V7h4m-4 5h3m-13.5.5H9v1.375C9 15.601 7.657 17 6 17s-3-1.4-3-3.125v-3.75C3 8.399 4.343 7 6 7c1.152 0 2.152.676 2.655 1.669"
    />
  </svg>
);
export default SvgGif;
