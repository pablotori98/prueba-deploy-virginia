//Import React
import React, { useContext, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

//Import materials
import { Box, Typography } from "@mui/material";
import { Context } from "../store/appContext";

//Import Image
import pluma from "../assets/forms/pluma.png"
import { ContactHome } from "../components/contacthome/ContactHome.jsx";
export const ContactInfo = () =>{
    const { actions, store } = useContext(Context);
    if(store.language=="spanish"){
        const newTitle = "Contacto";
        useLayoutEffect(() => {
          document.title = newTitle;
        }, []);}else{
          const newTitle = "Contact";
          useLayoutEffect(() => {
            document.title = newTitle;
          }, []);
        }
    return(
        <Box>
            <ContactHome />
            <Box className="fatherpluma">
            <img className="plumacontact" src={pluma} />
            </Box>
        </Box>
    )
}