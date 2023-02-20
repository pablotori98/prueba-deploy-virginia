//Import React
import React from "react";
import { Link } from "react-router-dom";

//Import materials
import { Box, Typography, useMediaQuery } from "@mui/material";
import imagenpsicologa from "../assets/psicologa/psicologaimagen.jpg";

import { AboutMeSpanishDesktop } from "../components/aboutme/aboutmespanish/AboutMeSpanishDesktop.jsx";
import { AboutMeSpanishTablet } from "../components/aboutme/aboutmespanish/AboutMeSpanishTablet.jsx";
import { AboutMeSpanishMobile } from "../components/aboutme/aboutmespanish/AboutMeSpanishMobile.jsx";
export const AboutMe = () => {
  const mediadesktop = useMediaQuery("(min-width: 1000px)");
  const mediamobile = useMediaQuery("(min-width: 620px)");

  return mediadesktop ? (
    <AboutMeSpanishDesktop />
  ) : !mediamobile ? (
    <AboutMeSpanishMobile />
  ) : (
    <AboutMeSpanishTablet />
  );
};

{
  /* <img className="imgaboutme" src={imagenpsicologa}/>
            <h1 className="fontabhaya aboutmetitle">Sobre mi</h1> */
}
