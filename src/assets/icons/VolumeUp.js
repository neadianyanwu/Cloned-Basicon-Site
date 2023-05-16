import * as React from "react";
const SvgVolumeUp = ({ title, titleId, ...props }) => (
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
      d="M8 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5l6 5V3L8 8ZM17 9.354c.622.705 1 1.632 1 2.646s-.378 1.94-1 2.646M21 8c.622 1.066 1 2.466 1 4 0 1.534-.378 2.934-1 4"
    />
  </svg>
);
export default SvgVolumeUp;
