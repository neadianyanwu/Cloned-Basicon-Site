import * as React from "react";
const SvgAccessibilityHandicapDisabilityHandicapWheelchair = ({
  title,
  titleId,
  ...props
}) => (
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
      d="M19 21h-2v-5a1 1 0 0 0-1-1h-3.5a1.5 1.5 0 0 1-1.5-1.5V8l3.5 3.5M14 18a5 5 0 1 1-6-7.584M12 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
  </svg>
);
export default SvgAccessibilityHandicapDisabilityHandicapWheelchair;
