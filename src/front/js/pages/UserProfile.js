//Import React
import React, { useContext, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  console.log("gola", store.user.first_name);
  return (
    <Box className="d-flex justify-content-center">
      <Box>
        <h1 className="fontabhaya text-center">
          Hola {store.user.first_name} {store.user.last_name}
        </h1>
        <h3 className="fontabhaya">Tu próxima cita es el 15 de febrero</h3>
      </Box>
    </Box>
  );
};
