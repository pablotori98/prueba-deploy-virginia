//Import React
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

//Import materials
import { Box, Typography } from "@mui/material";
import { Context } from "../store/appContext";

//Import Image
import pluma from "../assets/forms/pluma.png";

//Components
import { ContactHome } from "../components/contacthome/ContactHome.jsx";

export const ContactInfo = () => {
  //Use Context
  const { actions, store } = useContext(Context);
  //Nombre pestañas
  if (store.language == "spanish") {
    const newTitle = "Contacto";
    useLayoutEffect(() => {
      document.title = newTitle;
    }, []);
  } else {
    const newTitle = "Contact";
    useLayoutEffect(() => {
      document.title = newTitle;
    }, []);
  }
  //Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box>
      <ContactHome />
      <Box className="fatherpluma">
        <img className="plumacontact" src={pluma} />
      </Box>
    </Box>
  );
};
