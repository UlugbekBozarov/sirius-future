import { FC, Fragment } from "react";
import { Drawer } from "@mui/material";

import {} from "assets/icons";

import DrawerContend from "./DrawerContend";

interface SidebarProps {
  drawerWidth?: number;
  open?: boolean;
  onClose?: () => void;
}

const Sidebar: FC<SidebarProps> = ({ drawerWidth = 286, open, onClose }) => {
  return (
    <Fragment>
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <DrawerContend />
      </Drawer>
      <Drawer
        variant="permanent"
        className="salomjonlar"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
          "& .MuiPaper-root": {
            border: "none",
          },
        }}
        open
      >
        <DrawerContend />
      </Drawer>
    </Fragment>
  );
};

export default Sidebar;
