import * as React from "react";
const SvgYuanCurrencyMoney = ({ title, titleId, ...props }) => (
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
      d="m19 3-7 9m0 0L5 3m7 9v9m-5-9h10M7 16h10"
    />
  </svg>
);
export default SvgYuanCurrencyMoney;
