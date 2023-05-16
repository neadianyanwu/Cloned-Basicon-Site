import * as React from "react";
const SvgFaceId = ({ title, titleId, ...props }) => (
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
      d="M22 7.556V4.222A2.222 2.222 0 0 0 19.778 2h-3.334M22 16.444v3.334A2.222 2.222 0 0 1 19.778 22h-3.334M2 16.444v3.334C2 21.005 2.995 22 4.222 22h3.334M2 7.556V4.222C2 2.995 2.995 2 4.222 2h3.334M8 9V8M12.5 8v3.5a2 2 0 0 1-2 2H10M16 9V8M15.5 16.5l-.5.596c-.63.466-1.596.904-3 .904s-2.37-.438-3-.904l-.5-.596"
    />
  </svg>
);
export default SvgFaceId;
