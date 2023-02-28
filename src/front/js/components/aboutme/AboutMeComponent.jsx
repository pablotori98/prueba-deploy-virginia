//Import React
import React, { useContext, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

//Import materials
import { Box, Typography, useMediaQuery } from "@mui/material";

import { Context } from "../../store/appContext"
import { AboutMeEnglishMobile } from "./aboutmeenglish/AboutMeEnglishMobile.jsx";
import { AboutMeEnglishTablet } from "./aboutmeenglish/AboutMeEnglishTablet.jsx";
import { AboutMeSpanishDesktop } from "./aboutmespanish/AboutMeSpanishDesktop.jsx";
import { AboutMeSpanishMobile } from "./aboutmespanish/AboutMeSpanishMobile.jsx";
import { AboutMeSpanishTablet } from "./aboutmespanish/AboutMeSpanishTablet.jsx";
import { AboutMeEnglishDesktop } from "./aboutmeenglish/AboutMeEnglishDesktop.jsx";

export const AboutMeComponent = () => {
  const mediadesktop = useMediaQuery("(min-width: 1000px)");
  const mediamobile = useMediaQuery("(min-width: 620px)");
  const {actions, store} = useContext(Context)

  if(store.language=="spanish"){
  const newTitle = "Sobre mi";
  useLayoutEffect(() => {
    document.title = newTitle;
  }, []);}else{
    const newTitle = "About Me";
    useLayoutEffect(() => {
      document.title = newTitle;
    }, []);
  }
  return mediadesktop ? (
    store.language=="spanish"?
    <AboutMeSpanishDesktop />
    :
    <AboutMeEnglishDesktop />
  ) : !mediamobile ? (
    store.language=="spanish"?
    <AboutMeSpanishMobile />
    :
    <AboutMeEnglishMobile/>
  ) : (
    store.language=="spanish"?
    <AboutMeSpanishTablet />
    :
    <AboutMeEnglishTablet />
  );
};

{
  /* <img className="imgaboutme" src={imagenpsicologa}/>
            <h1 className="fontabhaya aboutmetitle">Sobre mi</h1> */
}
