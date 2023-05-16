import * as React from "react";
const SvgBasketballBallSports = ({ title, titleId, ...props }) => (
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
    <circle
      cx={12}
      cy={12}
      r={10}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 4.858A9.97 9.97 0 0 1 8 12a9.97 9.97 0 0 1-3 7.141M12 2v20M22 12H2M19 4.858A9.97 9.97 0 0 0 16 12a9.97 9.97 0 0 0 3 7.141"
    />
  </svg>
);
export default SvgBasketballBallSports;
