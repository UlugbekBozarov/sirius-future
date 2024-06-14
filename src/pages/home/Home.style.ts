import { Box, styled } from "@mui/material";

export const StyledScroll = styled(Box)({
  "&::-webkit-scrollbar": {
    width: "8px",
  },

  /* Track */
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },

  /* Handle */
  "&::-webkit-scrollbar-thumb": {
    border: "2px solid white",
    background: "#EEEEFF",
    borderRadius: "4px",
    transition: "all 0.3s",
  },

  "&:hover::-webkit-scrollbar-thumb": {
    border: "0px",
    background: "#8D7FC7",
  },

  /* Handle on hover */
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#323854",
  },
});
