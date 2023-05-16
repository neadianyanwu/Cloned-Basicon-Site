import * as React from "react";
const SvgSnowflakesWeatherCold = ({ title, titleId, ...props }) => (
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
      d="M12 2v20M9.5 3.5 12 6l2.5-2.5m-5 17L12 18l2.5 2.5M3.34 7l17.32 10M3.39 9.915 6.804 9l-.915-3.415m12.222 12.83L17.196 15l3.415-.915m.139-7.25-17.32 10M20.7 9.75l-3.415-.915.915-3.415M5.979 18.25l.915-3.415-3.415-.915"
    />
  </svg>
);
export default SvgSnowflakesWeatherCold;
