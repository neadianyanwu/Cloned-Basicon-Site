import * as React from "react";
const SvgTiktokSocial = ({ title, titleId, ...props }) => (
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
      d="M21 7.333c-3.47 0-6.98-2.02-6.98-5.333M8.51 11.474C5.467 11.474 3 13.83 3 16.737S5.467 22 8.51 22c3.043 0 5.51-2.356 5.51-5.263V2"
    />
  </svg>
);
export default SvgTiktokSocial;
