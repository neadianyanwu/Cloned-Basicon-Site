import * as React from "react";
const SvgMicrophoneOffMusicTalk = ({ title, titleId, ...props }) => (
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
      d="M14 12.16c-.53.522-1.232.84-2 .84-1.657 0-3-1.477-3-3.3V7m6 1.5V5.3C15 3.477 13.657 2 12 2c-1.053 0-1.98.597-2.515 1.5M12 17a7 7 0 0 1-7-7m7 7a6.977 6.977 0 0 0 4.899-2M12 17v4m7-11c0 .775-.126 1.52-.359 2.218M15 22H9M4 2l18 18"
    />
  </svg>
);
export default SvgMicrophoneOffMusicTalk;
