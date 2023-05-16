import * as React from "react";
const SvgFaceMaskAlt = ({ title, titleId, ...props }) => (
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
      d="M6.017 9.755c.238 2.67.24 5.357.005 8.028L6.003 18c-.002.02.009.04.026.05a11.85 11.85 0 0 0 11.942 0 .053.053 0 0 0 .026-.05l-.019-.217a45.52 45.52 0 0 1 .005-8.028m-11.966 0a.226.226 0 0 1 .17-.24l5.32-1.355a2 2 0 0 1 .987 0l5.32 1.356c.107.027.179.128.17.24m-11.967 0S5.5 4.533 3.26 5.033s-1.76 10 2.74 13m11.983-8.279s.473-5.221 2.713-4.721 1.76 10-2.74 13m-3.956-6h-4m4 4h-4"
    />
  </svg>
);
export default SvgFaceMaskAlt;
