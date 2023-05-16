import * as React from "react";
const SvgAdAnnouncementMegaphone = ({ title, titleId, ...props }) => (
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
      d="M21.935 15.658 18.638 3.38c-.358-1.335-1.999-1.827-3.035-.91l-2.078 1.84a19.917 19.917 0 0 1-8.054 4.325 4.68 4.68 0 0 0-3.31 5.732 4.691 4.691 0 0 0 5.738 3.313 19.94 19.94 0 0 1 9.142-.274l2.721.556c1.357.277 2.531-.968 2.173-2.303ZM7.717 8 11.5 22"
    />
  </svg>
);
export default SvgAdAnnouncementMegaphone;
