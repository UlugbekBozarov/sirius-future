import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { Spinner } from "components";

import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

const drawerWidth = 286;

const Layout = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box display="flex">
      <Navbar onOpen={handleOpen} drawerWidth={drawerWidth} />
      <Box
        component="aside"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Sidebar open={open} onClose={handleClose} drawerWidth={drawerWidth} />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { xs: "100vw", md: `calc(100% - ${drawerWidth}px)` },
          height: "calc(100vh - 68px)",
          marginTop: "68px",
        }}
      >
        <Box
          height="100%"
          sx={{
            overflowY: "auto",
            padding: { xs: "0px 10px 20px 10px", md: "20px 50px 50px 32px" },
          }}
        >
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
