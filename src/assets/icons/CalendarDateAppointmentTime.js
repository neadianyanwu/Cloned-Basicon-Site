import * as React from "react";
const SvgCalendarDateAppointmentTime = ({ title, titleId, ...props }) => (
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
      d="M8 4H5a2 2 0 0 0-2 2v3m5-5h8M8 4V2m0 2v2m8-2h3a2 2 0 0 1 2 2v3H3m13-5V2m0 2v2M3 9v11a2 2 0 0 0 2 2h5m7-6.75V17l1.25 1.25M22 17a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    />
  </svg>
);
export default SvgCalendarDateAppointmentTime;
