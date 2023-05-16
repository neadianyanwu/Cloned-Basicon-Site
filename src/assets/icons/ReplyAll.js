import * as React from "react";
const SvgReplyAll = ({ title, titleId, ...props }) => (
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
      d="m13 5.958-6 5.946 6 5.861v-4.034a6.326 6.326 0 0 1 1.53-.158c3.405 0 6.279 2.293 7.178 5.427A7.56 7.56 0 0 0 22 16.913c0-4.15-3.345-7.514-7.47-7.514-.571 0-.996.022-1.53.144V5.958Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m8 6-6 6 6 6"
    />
  </svg>
);
export default SvgReplyAll;
