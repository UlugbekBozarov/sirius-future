import { FC } from "react";
import { AppBar, Box, IconButton, Stack } from "@mui/material";

import { Menu } from "assets/icons";

import Notification from "./notification/Notification";
import User from "./user/User";

interface NavbarProps {
  drawerWidth?: number;
  onOpen?: () => void;
}

const Navbar: FC<NavbarProps> = ({ drawerWidth = 240, onOpen }) => {
  return (
    <AppBar
      component="nav"
      sx={{
        height: "68px",
        width: { md: `calc(100% - ${drawerWidth}px)` },
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        ml: { md: `${drawerWidth}px` },
        background: "white",
        borderRadius: "0 0 20px 20px",
        boxShadow:
          "0 42px 12px 0 #8F8FB700, 0 27px 11px 0 #8F8FB703, 0 15px 9px 0 #8F8FB70A, 0 7px 7px 0 #8F8FB70F, 0 2px 4px 0px #8F8FB712",
        padding: "13px 50px 13px 32px",
      }}
    >
      <Box display="flex" alignItems="center">
        <IconButton
          color="primary"
          onClick={onOpen}
          sx={{
            display: { md: "none" },
            mr: 2,
          }}
        >
          <Menu />
        </IconButton>
      </Box>
      <Box width="100%" display="flex" justifyContent="flex-end">
        <Stack direction="row" spacing="16px">
          <Notification />
          <User />
        </Stack>
      </Box>
    </AppBar>
  );
};

export default Navbar;
