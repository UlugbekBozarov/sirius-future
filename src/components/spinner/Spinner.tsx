import { FC, memo } from "react";
import { Box, BoxProps, CircularProgress } from "@mui/material";

const Spinner: FC<BoxProps> = (props) => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      <CircularProgress />
    </Box>
  );
};

export default memo(Spinner);
