import * as React from "react";
const SvgSketchDiamond = ({ title, titleId, ...props }) => (
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
      d="M6.5 3.5 12 3l5.5.5m-11 0L2 8m4.5-4.5L12 21M2 8l10 13M2 8h20M12 21 22 8M12 21l5.5-17.5M22 8l-4.5-4.5"
    />
  </svg>
);
export default SvgSketchDiamond;
