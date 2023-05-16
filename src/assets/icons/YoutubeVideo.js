import * as React from "react";
const SvgYoutubeVideo = ({ title, titleId, ...props }) => (
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
      d="M2.45 6.993A1.922 1.922 0 0 1 4.227 5.35C6.164 5.212 9.537 5 12 5c2.464 0 5.836.212 7.773.35a1.922 1.922 0 0 1 1.777 1.643C21.75 8.377 22 10.436 22 12c0 1.565-.251 3.623-.45 5.008a1.922 1.922 0 0 1-1.777 1.642c-1.937.138-5.31.35-7.773.35-2.464 0-5.836-.212-7.773-.35a1.922 1.922 0 0 1-1.777-1.642C2.25 15.623 2 13.565 2 12c0-1.564.251-3.623.45-5.007Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16 12-6 3.464V8.536L16 12Z"
    />
    <path stroke="#000" d="M10 15V8.5l6 3.5-6 3Z" />
  </svg>
);
export default SvgYoutubeVideo;
