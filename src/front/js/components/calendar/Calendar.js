import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import esLocale from "@fullcalendar/core/locales/es";
import allLocales from "@fullcalendar/core/locales-all";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { useContext } from "react";
import { Context } from "../../store/appContext.js";

//components imports >>>>
import CalendarSidebar from "./comps/CalendarSidebar.jsx";
import FlexBetween from "../../features/styled/FlexBetween.js";
import AppointmentModal from "./comps/AppointmentModal.js";
//<<<< components imports

//>>> styles and misc imports
import styles from "./calendar.module.css";
//<<< styles and misc imports
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
const Calendar = () => {
  const { actions, store } = useContext(Context);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(true);
  const closeREF = useRef(null);

  const initialSample = [
    {
      title: "All-day event",
      start: "2023-02-14",
    },
    {
      title: "Timed event",
      start: "2023-02-28",
    },
  ];
  const language = store.language;

  const handleDateClick = (selected) => {
    const title = prompt("New title");
    const start = prompt("New date, please use YYYY-MM-DD format");
    actions.newCita(title, start);
    // const title = prompt("Enter Title");
    // const calendarApi = selected.view.calendar;
    // calendarApi.unselect();
    // const idPrefix = Math.floor(Math.random() * 10000);
    // if (title) {
    //   calendarApi.addEvent({
    //     title,
    //     description: "Hola",
    //     start: selected.startStr,
    //     end: selected.endStr,
    //     allDay: selected.allDay,
    //   });
    //   actions.createAppointment(
    //     `${idPrefix}-${title}`,
    //     title,
    //     selected.startStr,
    //     selected.endStr,
    //     selected.allDay
    //   );
    // }
  };

  console.log(store.appointments);
  const handleEventClick = (selected) => {
    setOpen(true);
    console.log(selected.event.title);
  };

  const fetchAppointments = async () => {
    console.log("fetching...");
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/createappointment`,
      options
    );
    const data = await response.json();
    console.log("data from back", data);
    setCurrentEvents(data);
  };

  const closeOnClickOutside = (e) => {
    console.log("i was called");
    if (closeREF.current && !closeREF.current.contains(e.target)) {
      setOpen(false);
    }
  };


  useLayoutEffect(() => {
    fetchAppointments();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [currentEvents]);
  return isLoading === false ? (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <AppointmentModal
          open={open}
          close={() => setOpen(false)}
          closeREF={closeREF}
          closeOutside={closeOnClickOutside}
        />

        {/* CALENDAR */}
        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          {currentEvents ? (
            <FullCalendar
              locale={language === "spanish" ? esLocale : null}
              height="50vh"
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
              }}
              initialView="timeGridWeek"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              events={currentEvents}
            />
          ) : (
            <Typography variant="h5" align="center">
              {language === "spanish" ? "No hay citas" : "No appointments"}
            </Typography>
          )}
        </Box>
      </Box>
      <Button onClick={() => setOpen((prev) => !prev)}>Open Modal</Button>
    </Box>
  ) : (
    "loading"
  );
};

export default Calendar;
