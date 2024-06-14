import { memo } from "react";

const ArrowDown = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="MuiSvgIcon-root"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 10L12 14L16 10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(ArrowDown);
