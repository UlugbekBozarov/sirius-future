import { memo } from "react";
import { Box } from "@mui/material";

import { NotFound as NotFoundImage } from "assets/icons";

const NotFound = ({ height = "100vh", maxHeight = "100vh" }) => {
  return (
    <Box
      maxWidth="100%"
      height={height}
      maxHeight={maxHeight}
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ padding: { xs: "20px", sm: "50px", md: "100px", lg: "150px" } }}
    >
      <NotFoundImage />
    </Box>
  );
};

export default memo(NotFound);
