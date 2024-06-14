import { useRef, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import { CalendarApi } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import { get } from "lodash";
import dayjs from "dayjs";

import { ArrowLeft, ArrowRight, Questions } from "assets/icons";
import { getLanguage } from "services/storage/custom";
import { EventsStateType, selectEvents } from "providers/redux";
import CustomEventContent from "./CustomEventContent";

const Schedule = () => {
  const { t } = useTranslation();

  const eventsData: EventsStateType = useSelector(selectEvents);
  console.log(eventsData);

  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const calendarRef = useRef<FullCalendar | null>(null);

  const handleDateChange = (newDate: Date) => {
    setCurrentDate(newDate);
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi() as CalendarApi;
      calendarApi.gotoDate(newDate);
    }
  };

  const prevMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      handleDateChange(newDate);
      return newDate;
    });
  };

  const nextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      handleDateChange(newDate);
      return newDate;
    });
  };

  const goToToday = () => {
    setCurrentDate(() => {
      const newDate = new Date();
      handleDateChange(newDate);
      return newDate;
    });
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" gap="20px" mb="27px">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={[]}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label={t("Select item")} />
          )}
        />
        <Button sx={{ width: "344px" }}>
          <Trans>Change schedule</Trans>
        </Button>
      </Box>
      <Box>
        <Box mb="12px">
          <Stack direction="row" spacing="32px">
            <Stack direction="row" alignItems="center" spacing="16px">
              <IconButton onClick={prevMonth} sx={{ color: "#79747F" }}>
                <ArrowLeft />
              </IconButton>
              <Typography width="110px" textAlign="center">
                <Trans>{dayjs(currentDate).format("MMMM")}</Trans>&nbsp;
                {dayjs(currentDate).format("YYYY")}
              </Typography>
              <IconButton onClick={nextMonth} sx={{ color: "#79747F" }}>
                <ArrowRight />
              </IconButton>
            </Stack>
            <Stack direction="row" alignItems="center" spacing="16px">
              <Button size="small" variant="outlined" onClick={goToToday}>
                <Trans>Today</Trans>
              </Button>
              <IconButton color="primary">
                <Questions />
              </IconButton>
            </Stack>
          </Stack>
        </Box>

        <Box
          sx={{
            "& .fc-header-toolbar.fc-toolbar": {
              margin: 0,
            },
            "& .fc-col-header-cell.fc-day": {
              textAlign: "right",
              borderTop: "none",
              "& .fc-col-header-cell-cushion": {
                textTransform: "capitalize",
                fontFamily: "Circe Rounded",
                fontWeight: 400,
              },
            },
            "& .fc-event-main": {
              color: "#323854",
            },
            "& .fc-daygrid-event": {
              whiteSpace: "initial",
              wordBreak: "break-word",
            },
          }}
        >
          <FullCalendar
            ref={calendarRef}
            firstDay={1}
            plugins={[dayGridPlugin]}
            locale={getLanguage()}
            initialDate={currentDate}
            headerToolbar={{
              start: "",
              center: "",
              end: "",
            }}
            eventContent={CustomEventContent}
            events={get(eventsData, "data", [])}
            initialView="dayGridMonth"
            height="calc(100vh - 230px)"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Schedule;
