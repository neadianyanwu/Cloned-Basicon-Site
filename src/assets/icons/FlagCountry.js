import * as React from "react";
const SvgFlagCountry = ({ title, titleId, ...props }) => (
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
      d="M20 15.023c-1.167.665-4.4 1.699-8 .104-1.5-.83-5.2-2.097-8-.104m0 6.91V2.997c2.8-1.994 6.5-.727 8 .103 3.6 1.595 6.833.56 8-.104v11.96"
    />
  </svg>
);
export default SvgFlagCountry;
