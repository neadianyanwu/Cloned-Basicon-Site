import * as React from "react";
const SvgHospitalClinic = ({ title, titleId, ...props }) => (
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
      d="M3 9.011V21a1 1 0 0 0 1 1h4.5a1 1 0 0 0 1-1v-4.5h5V21a1 1 0 0 0 1 1H20a1 1 0 0 0 1-1V9.011a1 1 0 0 0-.415-.81L12 2 3.415 8.2A1 1 0 0 0 3 9.012ZM12 7.5v5M9.5 10h5"
    />
  </svg>
);
export default SvgHospitalClinic;
