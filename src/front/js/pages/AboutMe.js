//Import React
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//Import materials
import { Box, Typography, useMediaQuery } from "@mui/material";
import imagenpsicologa from "../assets/psicologa/psicologaimagen.jpg";

import { AboutMeSpanishDesktop } from "../components/aboutme/aboutmespanish/AboutMeSpanishDesktop.jsx";
import { AboutMeSpanishTablet } from "../components/aboutme/aboutmespanish/AboutMeSpanishTablet.jsx";
import { AboutMeSpanishMobile } from "../components/aboutme/aboutmespanish/AboutMeSpanishMobile.jsx";
import { AboutMeComponent } from "../components/aboutme/AboutMeComponent.jsx";
export const AboutMe = () => {
  const mediadesktop = useMediaQuery("(min-width: 1000px)");
  const mediamobile = useMediaQuery("(min-width: 620px)");
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (<Box>
    <AboutMeComponent />
  </Box>)
}