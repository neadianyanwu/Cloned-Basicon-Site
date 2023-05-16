import * as React from "react";
const SvgModelDiamond = ({ title, titleId, ...props }) => (
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
      d="m2 10 4-6h12l4 6M2 10l10 10M2 10h20M12 20l10-10M12 20l4-10-4-6-4 6 4 10Z"
    />
  </svg>
);
export default SvgModelDiamond;
