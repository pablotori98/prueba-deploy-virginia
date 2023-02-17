import { Box } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { ContactHomeEnglish } from "./contacthomelanguages/ContactHomeEnglish.jsx";
import { ContactHomeSpanish } from "./contacthomelanguages/ContactHomeSpanish.jsx";

export const ContactHome = () =>{
    const {actions, store} = useContext(Context)
    return(
        <Box>
            {store.language=="spanish"?
        <ContactHomeSpanish />
        :
        <ContactHomeEnglish />    
        }
        </Box>
    )
}