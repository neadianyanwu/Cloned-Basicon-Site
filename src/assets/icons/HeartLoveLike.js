import * as React from "react";
const SvgHeartLoveLike = ({ title, titleId, ...props }) => (
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
      d="m11.445 20.76-7.869-8.194C1.36 10.258 1.5 6.474 3.88 4.35c2.361-2.107 5.941-1.698 7.807.893l.314.435.314-.435c1.866-2.591 5.446-3 7.807-.893 2.38 2.125 2.52 5.91.303 8.217l-7.87 8.195a.763.763 0 0 1-1.109 0Z"
    />
  </svg>
);
export default SvgHeartLoveLike;
