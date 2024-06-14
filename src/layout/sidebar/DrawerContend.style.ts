import { ListItemButton, styled } from "@mui/material";
import { get } from "lodash";

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  position: "relative",
  backgroundColor: "transparent !important",
  paddingTop: "4px",
  paddingBottom: "4px",
  "& .MuiListItemIcon-root .MuiSvgIcon-root": {
    "& [fill=currentColor]": {
      fill: get(theme, "palette.primary.main", ""),
    },
    "& [stroke=currentColor]": {
      stroke: get(theme, "palette.primary.main", ""),
    },
  },
  "& .MuiListItemIcon-root, .MuiListItemText-root": {
    zIndex: 1,
    color: get(theme, "palette.primary.main", ""),
  },
  "&::after": {
    position: "absolute",
    content: '""',
    top: 0,
    left: 0,
    height: "100%",
    width: "0",
    backgroundColor: get(theme, "palette.primary.main", ""),
    borderRadius: "0 30px 30px 0",
    transition: "all 0.2s",
    zIndex: 0,
  },
  "&.Mui-selected": {
    color: get(theme, "palette.primary.contrastText", ""),
    "& .MuiListItemIcon-root .MuiSvgIcon-root": {
      "& [fill=currentColor]": {
        fill: get(theme, "palette.primary.contrastText", ""),
      },
      "& [stroke=currentColor]": {
        stroke: get(theme, "palette.primary.contrastText", ""),
      },
    },
    "&  .MuiListItemText-root": {
      zIndex: 1,
      color: get(theme, "palette.primary.contrastText", ""),
    },
    "&::after": {
      width: "calc(100% - 20px)",
    },
  },
}));
