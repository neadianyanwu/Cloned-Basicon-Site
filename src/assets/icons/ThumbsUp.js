import * as React from "react";
const SvgThumbsUp = ({ title, titleId, ...props }) => (
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
      d="m7.084 10.663 3.255-7.424C10.79 2.211 12 1.68 12.981 2.206c1.527.817 1.22 1.584 1.22 6.396h5.765c1.246 0 2.2 1.126 2.01 2.374l-1.408 9.276A2.042 2.042 0 0 1 18.558 22H7.084m0-11.337V22m0-11.337h-3.05C2.91 10.663 2 11.586 2 12.724v7.215C2 21.077 2.91 22 4.034 22h3.05"
    />
  </svg>
);
export default SvgThumbsUp;
