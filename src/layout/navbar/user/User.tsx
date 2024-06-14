import React from "react";
import { Trans } from "react-i18next";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { get } from "lodash";

import { ArrowDown, Close, Logout } from "assets/icons";
import { clearCookie } from "services/storage";

interface AccountType {
  id: string;
  name: string;
  image?: string;
}

const accounts: Array<AccountType> = [
  {
    id: "profile-1",
    name: "Михаил",
    image: "/images/profile1.jpg",
  },
  {
    id: "profile-2",
    name: "Анна",
    image: "/images/profile2.jpg",
  },
];

const User = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [activeProfile, setActiveProfile] = React.useState<AccountType>(
    accounts[0]
  );

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    clearCookie();

    window.location.href = "/";
  };

  const handleChangeAccount = (account: AccountType) => () => {
    if (get(account, "id") !== get(activeProfile, "id")) {
      setActiveProfile(account);
      handleClose();
    }
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleClick}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        endIcon={<ArrowDown />}
        sx={{
          padding: 0,
          borderRadius: "21px",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Avatar
          alt={get(activeProfile, "name")}
          src={get(activeProfile, "image")}
          sx={{ border: "1px solid", borderColor: "primary.main" }}
        />
      </Button>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: "250px",
            overflow: "visible",
            border: `1px solid`,
            borderColor: "primary.main",
            mt: 1.5,
            padding: "30px",
            borderRadius: "12px",
            "& .MuiList-root": {
              padding: 0,
            },
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 5,
              right: 40,
              width: 20,
              height: 10,
              bgcolor: "white",
              transform: "translateY(-50%)",
              zIndex: -1,
            },
            "&::after": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 44,
              width: 10,
              height: 10,
              bgcolor: "primary.main",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: -2,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Box position="relative" component="li" pb="12px">
          <Typography fontSize="16px">
            <Trans>Change user</Trans>
          </Typography>
          <IconButton
            color="error"
            onClick={handleClose}
            sx={{ position: "absolute", top: "-25px", right: "-25px" }}
          >
            <Close />
          </IconButton>
        </Box>
        {accounts?.map((account) => {
          const isActive = get(account, "id") === get(activeProfile, "id");
          return (
            <MenuItem
              selected={isActive}
              onClick={handleChangeAccount(account)}
              sx={{
                height: "48px",
                borderRadius: "12px",
                backgroundColor: isActive ? "#EEEEFF !important" : undefined,
                mb: "8px",
              }}
              key={get(account, "id")}
            >
              <Avatar src={get(account, "image")} alt={get(account, "name")} />
              <Box>
                <Typography
                  fontSize="12px"
                  fontWeight={400}
                  lineHeight="16px"
                  mb="2px"
                >
                  {get(account, "name")}
                </Typography>
                {isActive ? (
                  <Typography
                    fontSize="10px"
                    fontWeight={300}
                    lineHeight="12px"
                  >
                    <Trans>It is you</Trans>
                  </Typography>
                ) : (
                  ""
                )}
              </Box>
            </MenuItem>
          );
        })}
        <Divider />
        <MenuItem
          onClick={handleLogout}
          sx={{
            height: "48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "12px",
            color: "#008AFF",
          }}
        >
          <Typography>
            <Trans>Exit</Trans>
          </Typography>
          <Logout />
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default User;
