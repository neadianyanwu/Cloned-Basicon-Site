import * as React from "react";
const SvgUploadCloud = ({ title, titleId, ...props }) => (
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
      d="M6.341 6.159C7.165 3.736 9.388 2 12 2c3.314 0 6 2.793 6 6.238 2.21 0 4 1.863 4 4.16 0 1.539-.804 2.883-2 3.602M6.32 6.206C3.88 6.551 2 8.726 2 11.358c0 1.7.785 3.21 2 4.159M8 16l4-4m0 0 4 4m-4-4v10"
    />
  </svg>
);
export default SvgUploadCloud;
