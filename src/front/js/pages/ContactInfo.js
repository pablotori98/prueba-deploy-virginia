//Import React
import React from "react";
import { Link } from "react-router-dom";

//Import materials
import { Box, Typography } from "@mui/material";

//Import Image
import pluma from "../assets/forms/pluma.png"
import { ContactHome } from "../components/contacthome/ContactHome.jsx";
export const ContactInfo = () =>{
    return(
        <Box>
            <ContactHome />
            <Box className="fatherpluma">
            <img className="plumacontact" src={pluma} />
            </Box>
        </Box>
    )
}