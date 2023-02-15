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

export const NavbarLinksEnglish = () =>{
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
            <Typography variant="h6" className="linksnavbar">Logo / Name</Typography>
          </Box>
        </Link>
        <Box className="linksnavbar">
          <Link to="/home" className="linkremovestyle">
            <Button>
              <Typography className="buttonnavbar linksnavbar">Home</Typography>
            </Button>
          </Link>
          <Link to="/services" className="linkremovestyle">
            <Button>
              <Typography className="buttonnavbar linksnavbar">
                Services
              </Typography>
            </Button>
          </Link>
          <Link to="/aboutme" className="linkremovestyle">
            <Button>
              <Typography className="buttonnavbar linksnavbar">
                About Me
              </Typography>
            </Button>
          </Link>
          <Link to="/contact" className="linkremovestyle">
            <Button>
              <Typography className="buttonnavbar linksnavbar">
                Contact
              </Typography>
            </Button>
          </Link>
        </Box>
      </Box>
)
}