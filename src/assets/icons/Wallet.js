import * as React from "react";
const SvgWallet = ({ title, titleId, ...props }) => (
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
      d="M20 9.714V6.286C20 5.023 19.105 4 18 4H4C2.895 4 2 5.023 2 6.286v11.428C2 18.977 2.895 20 4 20h14c1.105 0 2-1.023 2-2.286v-3.428m2-4.572h-6c-1.105 0-2 1.024-2 2.286s.895 2.286 2 2.286h6V9.714Z"
    />
  </svg>
);
export default SvgWallet;
