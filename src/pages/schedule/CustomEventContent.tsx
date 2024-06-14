import { EventApi } from "@fullcalendar/core";
import { Box, IconButton, Typography } from "@mui/material";
import { Payment } from "assets/icons";
import dayjs from "dayjs";
import { get } from "lodash";
import React, { FC } from "react";
import { Trans } from "react-i18next";

interface CustomEventContentProps {
  event: EventApi;
}

const CustomEventContent: FC<CustomEventContentProps> = ({ event }) => {
  console.log(event, get(event, "extendedProps.color"));
  return (
    <Box position="relative" p="4px" sx={get(event, "extendedProps.sx", {})}>
      <Typography variant="body1" sx={{ textDecorationThickness: "" }}>
        {dayjs(get(event, "extendedProps.fromTime")).format("HH:mm")}-
        {dayjs(get(event, "extendedProps.toTime")).format("HH:mm")}
      </Typography>
      <Typography variant="caption">
        <Trans>{get(event, "title")}</Trans>
      </Typography>
      {get(event, "extendedProps.isPayment", false) ? (
        <IconButton
          size="small"
          color="error"
          sx={{
            position: "absolute",
            top: "2px",
            right: "2px",
            padding: 0,
          }}
        >
          <Payment />
        </IconButton>
      ) : (
        ""
      )}
    </Box>
  );
};

export default CustomEventContent;
