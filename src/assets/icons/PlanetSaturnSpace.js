import * as React from "react";
const SvgPlanetSaturnSpace = ({ title, titleId, ...props }) => (
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
      d="M18.138 6.785c2.293-.796 3.92-.972 4.288-.335.69 1.196-3.32 4.804-8.956 8.058-5.637 3.255-10.766 4.924-11.457 3.728-.366-.635.593-1.95 2.416-3.531M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
    />
  </svg>
);
export default SvgPlanetSaturnSpace;
