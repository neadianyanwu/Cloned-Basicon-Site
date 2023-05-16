import * as React from "react";
const SvgFolderFileProject = ({ title, titleId, ...props }) => (
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
      d="M4 21h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-9L9.297 3.445A1 1 0 0 0 8.465 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"
    />
  </svg>
);
export default SvgFolderFileProject;
