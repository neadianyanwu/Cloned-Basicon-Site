import * as React from "react";
const SvgDownload = ({ title, titleId, ...props }) => (
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
      d="M3 14v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6M12 3v14m0 0-5-5.444M12 17l5-5.444"
    />
  </svg>
);
export default SvgDownload;
