import React, { useEffect } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import CalendarHeader from "./CalendarHeader.jsx";
const CalendarSidebar = (props) => {
  const { data } = props;

  useEffect(() => {
    console.log("this should be data", data)
  },[])
  return (
    <Box flex="1 1 20%" p="15px" borderRadius="4px">
      <CalendarHeader title={"Title"} />
      <List>
        {data.map((event) => (
          <ListItem
            key={event.id}
            sx={{
              margin: "10px 0",
              borderRadius: "2px",
            }}
          >
            <ListItemText
              primary={event.title}
              secondary={
                <Typography>
                  {formatDate(event.start, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CalendarSidebar;
