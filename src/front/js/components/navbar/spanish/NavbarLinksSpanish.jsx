// Import React
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

//Import Materials
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
//Import components

export const NavbarLinksSpanish = () =>{
    return(
    <Box
    sx={{
      marginLeft: "auto",
      height: "90px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "75vw",
    }}
  >
    <Link to="/" className="linkremovestyle text-black">
      <Box className="d-flex align-items-center">
        <Typography variant="h6">Logo / Nombre</Typography>
      </Box>
    </Link>
    <Box to="/" className="linksnavbar">
      <Link to="/" className="linkremovestyle">
        <Button>
          <Typography className="buttonnavbar">Inicio</Typography>
        </Button>
      </Link>
      <Link to="/services" className="linkremovestyle">
        <Button>
          <Typography className="buttonnavbar">
            Servicios
          </Typography>
        </Button>
      </Link>
      <Link to="/aboutme" className="linkremovestyle">
        <Button>
          <Typography className="buttonnavbar">
            Sobre mi
          </Typography>
        </Button>
      </Link>
      <Link to="/contact" className="linkremovestyle">
        <Button>
          <Typography className="buttonnavbar">
            Contacto
          </Typography>
        </Button>
      </Link>
    </Box>
  </Box>
)
}