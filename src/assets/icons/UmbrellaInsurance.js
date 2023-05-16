import * as React from "react";
const SvgUmbrellaInsurance = ({ title, titleId, ...props }) => (
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
      d="M12 3c5.185 0 9.498 3.947 10 9-.606-.156-1.373-.158-2.099-.09-1.926.183-3.532 1.197-3.793 2.368M12 3C6.815 3 2.55 6.947 2.05 12M12 3V2M2.08 12c.606-.156 1.374-.158 2.1-.09 1.926.183 3.531 1.197 3.793 2.368M8 14c.549-1.165 2.258-2 4-2m0 0c1.742 0 3.45.835 4 2m-4-2v7.5a2.5 2.5 0 1 1-5 0V19m5.168-16C14.545 5.62 16 9.136 16 13M11.832 3C9.455 5.62 8 9.136 8 13"
    />
  </svg>
);
export default SvgUmbrellaInsurance;
