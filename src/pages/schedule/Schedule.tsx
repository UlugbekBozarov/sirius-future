import { Autocomplete, Box, TextField } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

const Schedule = () => {
  return (
    <Box>
      <Box>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={[]}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
      </Box>
      <Box>
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
      </Box>
    </Box>
  );
};

export default Schedule;
