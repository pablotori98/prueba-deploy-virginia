//Import React
import React, { useContext, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "../components/calendar/Calendar.js";

//Import materials
import { Box, Typography } from "@mui/material";

import { Context } from "../store/appContext";
export const UserProfile = () => {
  const { actions, store } = useContext(Context);
  useState(() => {
    actions.fetchallusers(sessionStorage.getItem("user_id"));
  }, []);
  const newTitle = store.language == "spanish" ? "Perfil" : "Profile";
  useLayoutEffect(() => {
    document.title = newTitle;
  }, []);

  return (
    <Box className="d-flex flex-column align-items-center ">
      <h1 className="fontabhaya text-center my-5 py-3">
        Hola {store.user.first_name} {store.user.last_name}
      </h1>
      <Box className="d-flex justify-content-evenly w-100">
        <Box className="leftprofile">
          <Calendar />
        </Box>
        <Box className="rightprofile">
          <h3 className="fontabhaya">Mensajes de Psicologa</h3>
          <p>aqui irían los mensajes</p>
          <p>Mensaje </p>
          <p>Mensaje </p>
          <p>Mensaje </p>
          <p>Mensaje </p>
          <p>Mensaje </p>
          <p>Mensaje </p>
          <p>Mensaje </p>
          <p>Mensaje </p>

        </Box>
      </Box>
    </Box>
  );
};
