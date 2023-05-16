import * as React from "react";
const SvgMicrophoneMusicTalk = ({ title, titleId, ...props }) => (
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
      d="M12 17a7 7 0 0 1-7-7m7 7a7 7 0 0 0 7-7m-7 7v4m3 1H9m3-9c-1.657 0-3-1.477-3-3.3V5.3C9 3.477 10.343 2 12 2s3 1.477 3 3.3v4.4c0 1.823-1.343 3.3-3 3.3Z"
    />
  </svg>
);
export default SvgMicrophoneMusicTalk;
