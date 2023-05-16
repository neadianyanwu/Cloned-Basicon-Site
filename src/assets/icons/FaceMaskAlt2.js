import * as React from "react";
const SvgFaceMaskAlt2 = ({ title, titleId, ...props }) => (
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
      d="M5 8h14M5 8v5.5c0 .61.255 1.121.698 1.518l3.048 2.726a4.843 4.843 0 0 0 6.508 0l3.048-2.726c.443-.397.698-.909.698-1.518V8M5 8 2 5m17 3 3-3"
    />
  </svg>
);
export default SvgFaceMaskAlt2;
