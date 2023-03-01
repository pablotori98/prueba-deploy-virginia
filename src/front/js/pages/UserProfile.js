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
    actions.fetchuser(sessionStorage.getItem("user_id"));
  }, []);
  const newTitle = store.language == "spanish" ? "Perfil" : "Profile";
  useLayoutEffect(() => {
    document.title = newTitle;
  }, []);

  console.log(store.user.paid_sessions)
  return (
    <Box className="d-flex flex-column align-items-center ">
      <p className="fontabhaya text-center mt-5 pt-3 fontsize3rem">
        Hola {store.user.first_name} {store.user.last_name}
      </p>
      {store.user.paid_sessions != null?
      <p className="mb-5 fontabhaya fontsize1-5rem">Tienes {store.user.paid_sessions} sesiones disponibles</p>
     :
     null 
    }
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
