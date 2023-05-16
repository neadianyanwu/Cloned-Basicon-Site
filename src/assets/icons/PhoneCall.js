import * as React from "react";
const SvgPhoneCall = ({ title, titleId, ...props }) => (
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
      d="m3.51 2 3.64.132A1.961 1.961 0 0 1 8.89 3.37l1.077 2.662c.25.62.183 1.326-.18 1.884l-1.379 2.121c.817 1.173 3.037 3.919 5.388 5.526l1.752-1.079a1.917 1.917 0 0 1 1.483-.226l3.485.894c.927.237 1.551 1.126 1.478 2.103l-.224 2.983c-.078 1.047-.935 1.869-1.952 1.75C6.392 20.429-1.481 2 3.511 2Z"
    />
  </svg>
);
export default SvgPhoneCall;
