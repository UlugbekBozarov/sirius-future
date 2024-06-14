import { memo } from "react";

const ArrowLeft = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="MuiSvgIcon-root"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12L19 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 7L5 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 17L5 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(ArrowLeft);
