import * as React from "react";
const SvgRoadmapTimeline = ({ title, titleId, ...props }) => (
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
      d="M3 3h6v4H3zM3 17h8v4H3zM7 10h14v4H7z"
    />
  </svg>
);
export default SvgRoadmapTimeline;
