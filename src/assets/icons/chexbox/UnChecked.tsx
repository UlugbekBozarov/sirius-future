import { memo } from "react";

const UnChecked = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 20H6.5C5.395 20 4.5 19.105 4.5 18V6C4.5 4.895 5.395 4 6.5 4H18.5C19.605 4 20.5 4.895 20.5 6V18C20.5 19.105 19.605 20 18.5 20Z"
        fill="white"
        stroke="#C8C5CD"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(UnChecked);
