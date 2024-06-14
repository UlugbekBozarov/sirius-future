import { memo } from "react";

const Menu = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className="MuiSvgIcon-root"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        opacity="0.32"
        d="M15.2798 4.5H4.7202C3.77169 4.5 3 5.06057 3 5.75042C3 6.43943 3.77169 7 4.7202 7H15.2798C16.2283 7 17 6.43943 17 5.75042C17 5.06054 16.2283 4.5 15.2798 4.5Z"
        fill="currentColor"
      />
      <path
        d="M19.2798 10.75H8.7202C7.77169 10.75 7 11.3106 7 12.0004C7 12.6894 7.77169 13.25 8.7202 13.25H19.2798C20.2283 13.25 21 12.6894 21 12.0004C21 11.3105 20.2283 10.75 19.2798 10.75Z"
        fill="currentColor"
      />
      <path
        d="M15.2798 17H4.7202C3.77169 17 3 17.5606 3 18.2504C3 18.9394 3.77169 19.5 4.7202 19.5H15.2798C16.2283 19.5 17 18.9394 17 18.2504C17 17.5606 16.2283 17 15.2798 17Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default memo(Menu);
