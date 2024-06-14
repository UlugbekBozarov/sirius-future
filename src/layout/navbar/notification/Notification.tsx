import { IconButton } from "@mui/material";

import { Message } from "assets/icons";

import { StyledBadge } from "./Notification.style";

const Notification = () => {
  return (
    <StyledBadge
      badgeContent={4}
      color="error"
      sx={{ width: "42px", height: "42px" }}
    >
      <IconButton color="primary" sx={{ height: "42px", border: "1px solid" }}>
        <Message />
      </IconButton>
    </StyledBadge>
  );
};

export default Notification;
